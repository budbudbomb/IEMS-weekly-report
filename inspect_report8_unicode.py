import zipfile
import xml.etree.ElementTree as ET
import os
import sys

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

def main():
    xlsx_path = r"C:\Users\Dell\Downloads\IEMS weekly report (8).xlsx"
    if not os.path.exists(xlsx_path):
        print(f"File not found: {xlsx_path}")
        return
        
    with zipfile.ZipFile(xlsx_path, 'r') as z:
        shared_strings = parse_shared_strings(z)
        rows = get_sheet_rows(z, shared_strings)
        
    print(f"Total rows read: {len(rows)}")
    
    # Let's inspect headers: row index finding pages
    headerRowIndex = -1
    for r in range(min(len(rows), 15)):
        row = rows[r]
        if row and any(cell and str(cell).lower().strip() == 'pages' for cell in row):
            headerRowIndex = r
            break
            
    # Find Preksha rows and check their data
    preksha_rows = []
    current_module = ""
    current_usertype = ""
    for r in range(headerRowIndex + 3, len(rows)):
        row = rows[r]
        if not row: continue
        # If the row is entirely empty strings, skip
        if all(str(cell).strip() == "" for cell in row):
            continue
            
        mod_val = row[0] if len(row) > 0 else ""
        ut_val = row[1] if len(row) > 1 else ""
        if mod_val: current_module = str(mod_val).strip()
        if ut_val: current_usertype = str(ut_val).strip()
        
        if 'preksha' in current_module.lower():
            preksha_rows.append((r, current_usertype, row))
            
    print(f"\nTotal Preksha rows: {len(preksha_rows)}")
    
    # We will write to a file or stdout using ascii encoding with backslashreplace to avoid crash
    sys.stdout.reconfigure(errors='backslashreplace')
    
    for r_idx, ut, row in preksha_rows[:62]:
        # Print representation to avoid console encoding crash
        cleaned_row = [str(cell).strip() for cell in row]
        print(f"Row {r_idx+1} ({ut}): {cleaned_row}")

if __name__ == '__main__':
    main()
