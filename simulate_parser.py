import zipfile
import xml.etree.ElementTree as ET
import os
import json

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

def parse_team(val):
    if not val: return []
    val_str = str(val).strip()
    if val_str == '' or val_str == '-' or val_str.lower() == 'none': return []
    import re
    parts = re.split(r'[,/&;]|\band\b', val_str, flags=re.IGNORECASE)
    return [p.strip() for p in parts if p.strip() and p.strip() != '-']

def get_module_id(name):
    n = name.lower().strip()
    if 'preksha' in n: return 'preksha'
    if 'samadhan' in n or 'grievance' in n: return 'samadhan'
    if 'expenditure' in n or 'expense' in n: return 'expenditure'
    if 'sugamta' in n or 'route' in n: return 'sugamta'
    if 'pithasin' in n or 'polling' in n or 'ipbms' in n: return 'ipbms'
    if 'evm' in n: return 'evm'
    
    import re
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

def is_category_header(row, colIdx):
    pageVal = str(row[colIdx['pages']]).strip() if colIdx['pages'] < len(row) else ''
    if not pageVal: return False
    
    devVal = str(row[colIdx['dynamicDev']]).strip() if colIdx['dynamicDev'] < len(row) else ''
    isEmptyOrHyphen = lambda val: val == '' or val == '-'
    
    # Precise check for category names
    p_name = pageVal.lower()
    categories = [
        'profile', 'main pages', 'reports', 'other pages', 'dashboard & management',
        'route planning', 'vehicle requisition', 'vehicle management', 'scanning',
        'registration', 'complaint management', 'user management', 'application & reports',
        'core'
    ]
    if any(p_name == cat or p_name.startswith(cat) for cat in categories):
        if not isEmptyOrHyphen(devVal):
            return False
        return True
        
    intRevVal = str(row[colIdx['internalReviewReview']]).strip() if colIdx['internalReviewReview'] < len(row) else ''
    intStatusVal = str(row[colIdx['internalReviewStatus']]).strip() if colIdx['internalReviewStatus'] < len(row) else ''
    cliRevVal = str(row[colIdx['clientReviewReview']]).strip() if colIdx['clientReviewReview'] < len(row) else ''
    cliStatusVal = str(row[colIdx['clientReviewStatus']]).strip() if colIdx['clientReviewStatus'] < len(row) else ''
    reqVal = str(row[colIdx['reqGathering']]).strip() if colIdx['reqGathering'] < len(row) else ''
    finalVal = str(row[colIdx['finalStatus']]).strip() if colIdx['finalStatus'] < len(row) else ''
    
    if (isEmptyOrHyphen(devVal) and isEmptyOrHyphen(intRevVal) and isEmptyOrHyphen(intStatusVal) and 
        isEmptyOrHyphen(cliRevVal) and isEmptyOrHyphen(cliStatusVal) and 
        isEmptyOrHyphen(reqVal) and isEmptyOrHyphen(finalVal)):
        return True
        
    return False

def simulate_parse():
    xlsx_path = r"C:\Users\Dell\Downloads\IEMS weekly report (4).xlsx"
    with zipfile.ZipFile(xlsx_path, 'r') as z:
        shared_strings = parse_shared_strings(z)
        rows = get_sheet_rows(z, shared_strings)
        
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
    row3 = rows[headerRowIndex + 2] if (headerRowIndex + 2) < len(rows) else []
    combinedHeaders = []
    maxCols = max(len(row1), len(row2), len(row3))
    
    group1 = ''
    group2 = ''
    for c in range(maxCols):
        val1 = str(row1[c]).strip() if c < len(row1) else ''
        if val1 != '':
            group1 = val1
            group2 = ''
        val2 = str(row2[c]).strip() if c < len(row2) else ''
        if val2 != '':
            group2 = val2
        val3 = str(row3[c]).strip() if c < len(row3) else ''
        
        parts = []
        if group1:
            parts.append(group1)
        if group2 and group2.lower() != group1.lower():
            parts.append(group2)
        if val3 and val3.lower() != (group2 or group1).lower():
            parts.append(val3)
            
        combinedHeaders.append(' '.join(parts).lower().strip())
        
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
        elif 'remark' in s: colIdx['remark'] = idx
        elif 'dependency' in s or 'blocker' in s: colIdx['dependency'] = idx
        elif 'process' in s and 'flow' in s: colIdx['docProcessFlow'] = idx
        elif 'user' in s and 'manual' in s: colIdx['docUserManual'] = idx
        elif 'team' in s or 'developer' in s or s == 'dev': colIdx['team'] = idx
        elif 'time' in s or 'duration' in s or 'need' in s: colIdx['timeNeeded'] = idx

    print("Header Row Index:", headerRowIndex)
    print("Resolved colIdx:")
    for k, v in colIdx.items():
        print(f"  {k}: {v} -> '{combinedHeaders[v]}' if v < len(combinedHeaders) else 'OUT OF BOUNDS'")
        
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
                # Skip in simulated stats
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
        
        page = {
            'name': pageName,
            'dynamicDev': dev_val
        }
        cat['pages'].append(page)
        
    print("\nParsed Module Stats:")
    for mid, mod in parsedModules.items():
        total = 0
        done = 0
        for ut in mod['userTypes']:
            for cat in ut['categories']:
                for p in cat['pages']:
                    total += 1
                    if p['dynamicDev'].lower() == 'done':
                        done += 1
        print(f"  {mid}: {done}/{total} done pages (Progress: {done/total*100:.1f}%)" if total > 0 else f"  {mid}: no pages")

if __name__ == '__main__':
    simulate_parse()
