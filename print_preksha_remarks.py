import zipfile, xml.etree.ElementTree as ET, os

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
    xml_content = z.read('xl/worksheets/sheet1.xml')
    root = ET.fromstring(xml_content)
    rows_dict = {}
    def cell_to_col(ref):
        col_str = ''.join(c for c in ref if c.isalpha())
        col = 0
        for char in col_str:
            col = col * 26 + (ord(char.upper()) - ord('A') + 1)
        return col - 1
    for row_node in root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        row_idx = int(row_node.get('r')) - 1
        row_cells = {}
        for cell_node in row_node.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            ref = cell_node.get('r')
            col_idx = cell_to_col(ref)
            val = cell_node.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            cell_val = ''
            if val is not None and val.text:
                if cell_node.get('t') == 's':
                    idx = int(val.text)
                    cell_val = shared_strings[idx] if idx < len(shared_strings) else val.text
                else:
                    cell_val = val.text
            row_cells[col_idx] = cell_val
        rows_dict[row_idx] = row_cells
    max_row = max(rows_dict.keys()) + 1
    rows = []
    for i in range(max_row):
        rows.append(rows_dict.get(i, {}))
    return rows

xlsx_path = r"C:\Users\Dell\Downloads\IEMS weekly report (8).xlsx"
with zipfile.ZipFile(xlsx_path) as z:
    ss = parse_shared_strings(z)
    rows = get_sheet_rows(z, ss)

MODULE_COL = 0
USERTYPE_COL = 1
PAGES_COL = 2
REMARK_COL = 27

current_module = ''
current_usertype = ''

print("Preksha rows info:")
for i, row in enumerate(rows[3:], start=4):
    mod_val = row.get(MODULE_COL, '')
    ut_val = row.get(USERTYPE_COL, '')
    page_val = row.get(PAGES_COL, '')
    if mod_val and str(mod_val).strip(): current_module = str(mod_val).strip()
    if ut_val and str(ut_val).strip(): current_usertype = str(ut_val).strip()
    
    if current_module.lower() == 'preksha':
        remark_val = row.get(REMARK_COL, '')
        if remark_val and str(remark_val).strip():
            print(f"Row {i:3} | UserType: {current_usertype:18} | Page: {str(page_val):30} | Remark: {str(remark_val)}")
