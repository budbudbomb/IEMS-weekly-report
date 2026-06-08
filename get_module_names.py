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

def main():
    xlsx_path = r"C:\Users\Dell\Downloads\IEMS weekly report (2).xlsx"
    with zipfile.ZipFile(xlsx_path, 'r') as z:
        shared_strings = parse_shared_strings(z)
        rows = get_sheet_rows(z, shared_strings)
        
    print("Non-empty Module Names in Column 0:")
    for r, row in enumerate(rows):
        if row and len(row) > 0 and str(row[0]).strip() != '':
            print(f"Row {r+1}: '{row[0]}'")

if __name__ == '__main__':
    main()
