import zipfile
import xml.etree.ElementTree as ET
import os

def parse_shared_strings(z):
    try:
        xml_content = z.read('xl/sharedStrings.xml')
        root = ET.fromstring(xml_content)
        strings = []
        for s_node in root.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
            t_nodes = s_node.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t')
            strings.append(''.join(t.text for t in t_nodes if t.text))
        return strings
    except KeyError:
        return []

def get_sheet_rows(z, shared_strings):
    try:
        xml_content = z.read('xl/worksheets/sheet1.xml')
    except KeyError:
        sheets = [f for f in z.namelist() if f.startswith('xl/worksheets/sheet')]
        if not sheets:
            return []
        xml_content = z.read(sheets[0])

    root = ET.fromstring(xml_content)
    rows = []
    
    def cell_to_coords(ref):
        col_str = ''
        row_str = ''
        for char in ref:
            if char.isalpha():
                col_str += char
            else:
                row_str += char
        col = 0
        for char in col_str:
            col = col * 26 + (ord(char.upper()) - ord('A') + 1)
        return col - 1, int(row_str) - 1

    for row_node in root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        row_idx = int(row_node.get('r')) - 1
        while len(rows) <= row_idx:
            rows.append([])
            
        row_cells = {}
        max_col_idx = -1
        for cell_node in row_node.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            ref = cell_node.get('r')
            col_idx, _ = cell_to_coords(ref)
            max_col_idx = max(max_col_idx, col_idx)
            
            val_node = cell_node.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = ''
            if val_node is not None:
                val = val_node.text
                cell_type = cell_node.get('t')
                if cell_type == 's':
                    idx = int(val)
                    if idx < len(shared_strings):
                        val = shared_strings[idx]
            row_cells[col_idx] = val
            
        row_list = [''] * (max_col_idx + 1)
        for col_idx, val in row_cells.items():
            row_list[col_idx] = val
        rows[row_idx] = row_list
        
    return rows

def get_module_id(name):
    n = name.lower().strip()
    if 'preksha' in n: return 'preksha'
    if 'samadhan' in n or 'grievance' in n: return 'samadhan'
    if 'expenditure' in n or 'expense' in n: return 'expenditure'
    if 'sugamta' in n or 'route' in n: return 'sugamta'
    if 'pithasin' in n or 'polling' in n or 'ipbms' in n: return 'ipbms'
    if 'evm' in n: return 'evm'
    return name.lower().strip().replace(' ', '-')

def is_category_header(row, colIdx):
    pageVal = str(row[colIdx['pages']]).strip() if colIdx['pages'] < len(row) else ''
    if not pageVal: return False
    
    devVal = str(row[colIdx['dynamicDev']]).strip() if colIdx['dynamicDev'] < len(row) else ''
    intRevVal = str(row[colIdx['internalReviewReview']]).strip() if colIdx['internalReviewReview'] < len(row) else ''
    intStatusVal = str(row[colIdx['internalReviewStatus']]).strip() if colIdx['internalReviewStatus'] < len(row) else ''
    cliRevVal = str(row[colIdx['clientReviewReview']]).strip() if colIdx['clientReviewReview'] < len(row) else ''
    cliStatusVal = str(row[colIdx['clientReviewStatus']]).strip() if colIdx['clientReviewStatus'] < len(row) else ''
    reqVal = str(row[colIdx['reqGathering']]).strip() if colIdx['reqGathering'] < len(row) else ''
    finalVal = str(row[colIdx['finalStatus']]).strip() if colIdx['finalStatus'] < len(row) else ''
    
    isEmptyOrHyphen = lambda val: val == '' or val == '-'
    
    if (isEmptyOrHyphen(devVal) and isEmptyOrHyphen(intRevVal) and isEmptyOrHyphen(intStatusVal) and 
        isEmptyOrHyphen(cliRevVal) and isEmptyOrHyphen(cliStatusVal) and 
        isEmptyOrHyphen(reqVal) and isEmptyOrHyphen(finalVal)):
        return True
    return False

def run_parser(rows):
    headerRowIndex = -1
    for r in range(min(len(rows), 10)):
        row = rows[r]
        if row and any(cell and str(cell).lower().strip() == 'pages' for cell in row):
            headerRowIndex = r
            break
            
    if headerRowIndex == -1:
        headerRowIndex = 1
        
    colIdx = {
        'module': 0, 'userType': 1, 'pages': 2, 'reqGathering': 3,
        'staticScreensCreation': 4, 'staticScreensPresentation': 5, 'staticScreensStatus': 6,
        'dynamicDev': 7, 'internalReviewReview': 8, 'internalReviewStatus': 9,
        'clientReviewReview': 10, 'clientReviewStatus': 11, 'crDetails': 12,
        'crDevStatus': 13, 'crClientReview': 14, 'crApproval': 15,
        'finalStatus': 16, 'remark': 17, 'dependency': 18,
        'docProcessFlow': 19, 'docUserManual': 20, 'team': 21, 'timeNeeded': 22
    }
    
    row1 = rows[headerRowIndex] if headerRowIndex < len(rows) else []
    row2 = rows[headerRowIndex + 1] if (headerRowIndex + 1) < len(rows) else []
    
    combinedHeaders = []
    maxCols = max(len(row1), len(row2))
    currentGroupHeader = ''
    for c in range(maxCols):
        val1 = str(row1[c]).strip() if c < len(row1) else ''
        if val1 != '':
            currentGroupHeader = val1
        val2 = str(row2[c]).strip() if c < len(row2) else ''
        combined = currentGroupHeader
        if val2 != '' and val2.lower() != currentGroupHeader.lower():
            combined += ' ' + val2
        combinedHeaders.append(combined.lower().strip())
            
    for idx, s in enumerate(combinedHeaders):
        if 'module' in s: colIdx['module'] = idx
        elif 'user type' in s or 'usertype' in s: colIdx['userType'] = idx
        elif s == 'pages' or s == 'page' or 'page name' in s: colIdx['pages'] = idx
        elif 'requirement' in s or 'requiemernt' in s: colIdx['reqGathering'] = idx
        elif 'static' in s and 'creation' in s: colIdx['staticScreensCreation'] = idx
        elif 'static' in s and 'presentation' in s: colIdx['staticScreensPresentation'] = idx
        elif 'static' in s and 'status' in s: colIdx['staticScreensStatus'] = idx
        elif 'dynamic' in s: colIdx['dynamicDev'] = idx
        elif 'internal' in s and 'review' in s and 'status' not in s: colIdx['internalReviewReview'] = idx
        elif 'internal' in s and 'status' in s: colIdx['internalReviewStatus'] = idx
        elif 'client' in s and 'review' in s and 'status' not in s: colIdx['clientReviewReview'] = idx
        elif 'client' in s and 'status' in s: colIdx['clientReviewStatus'] = idx
        elif 'cr' in s and 'detail' in s: colIdx['crDetails'] = idx
        elif 'cr' in s and 'dev' in s: colIdx['crDevStatus'] = idx
        elif 'cr' in s and 'client' in s: colIdx['crClientReview'] = idx
        elif 'cr' in s and 'approval' in s: colIdx['crApproval'] = idx
        elif 'final' in s and 'status' in s: colIdx['finalStatus'] = idx

    parsedModules = {}
    dataStartRowIndex = headerRowIndex + 1
    currentModuleName = ''
    currentUserTypeName = ''
    currentCategoryName = 'General'
    lastUserTypeName = ''
    
    for r in range(dataStartRowIndex, len(rows)):
        row = rows[r]
        if not row: continue
        
        moduleVal = row[colIdx['module']] if colIdx['module'] < len(row) else ''
        userTypeVal = row[colIdx['userType']] if colIdx['userType'] < len(row) else ''
        
        if moduleVal and str(moduleVal).strip() != '':
            currentModuleName = str(moduleVal).strip()
        if userTypeVal and str(userTypeVal).strip() != '':
            currentUserTypeName = str(userTypeVal).strip()
            
        if not currentModuleName: continue
        
        pageVal = row[colIdx['pages']] if colIdx['pages'] < len(row) else ''
        if pageVal:
            pageName = str(pageVal).strip()
            if pageName != '' and pageName.lower() == 'project setup':
                continue
                
        if not currentUserTypeName: continue
        if not pageVal: continue
        pageName = str(pageVal).strip()
        if pageName == '': continue
        
        id = get_module_id(currentModuleName)
        if id not in parsedModules:
            parsedModules[id] = {
                'id': id,
                'name': currentModuleName,
                'userTypes': []
            }
            
        mod = parsedModules[id]
        
        if currentUserTypeName != lastUserTypeName:
            currentCategoryName = 'General'
            lastUserTypeName = currentUserTypeName
            
        if is_category_header(row, colIdx):
            currentCategoryName = pageName
            continue
            
        ut = next((u for u in mod['userTypes'] if u['name'] == currentUserTypeName), None)
        if not ut:
            ut = {
                'name': currentUserTypeName,
                'categories': []
            }
            mod['userTypes'].append(ut)
            
        cat = next((c for c in ut['categories'] if c['name'] == currentCategoryName), None)
        if not cat:
            cat = {
                'name': currentCategoryName,
                'pages': []
            }
            ut['categories'].append(cat)
            
        dev_val = str(row[colIdx['dynamicDev']]).strip() if colIdx['dynamicDev'] < len(row) else '-'
        client_review_val = str(row[colIdx['clientReviewReview']]).strip() if colIdx['clientReviewReview'] < len(row) else ''
        cr_val = str(row[colIdx['crDetails']]).strip() if colIdx['crDetails'] < len(row) else ''
        
        page = {
            'name': pageName,
            'dynamicDev': dev_val,
            'clientReview': client_review_val,
            'cr': cr_val
        }
        cat['pages'].append(page)
        
    return parsedModules

def main():
    folder = r"C:\Users\Dell\Downloads"
    files = [
        "IEMS weekly report (2).xlsx",
        "IEMS weekly report (1).xlsx",
        "IEMS weekly report.xlsx",
        "election_features_mapping.xlsx"
    ]
    
    for filename in files:
        xlsx_path = os.path.join(folder, filename)
        if not os.path.exists(xlsx_path):
            continue
            
        print(f"\nFILE: {filename}")
        with zipfile.ZipFile(xlsx_path, 'r') as z:
            shared_strings = parse_shared_strings(z)
            rows = get_sheet_rows(z, shared_strings)
            
        parsed = run_parser(rows)
        for mid, mod in parsed.items():
            t, d, r, c = 0, 0, 0, 0
            for ut in mod['userTypes']:
                for cat in ut['categories']:
                    for p in cat['pages']:
                        t += 1
                        if p['dynamicDev'].lower() == 'done': d += 1
                        if p['clientReview'] and p['clientReview'] != '-' and p['clientReview'] != '': r += 1
                        if p['cr'] and p['cr'] != '-' and p['cr'] != '' and p['cr'].lower() != 'none': c += 1
            print(f"  Module: {mid:12} -> Pages: {t:2}, Done: {d:2}, Reviews: {r:2}, CRs: {c:2}")

if __name__ == '__main__':
    main()
