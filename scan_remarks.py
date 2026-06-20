import zipfile, xml.etree.ElementTree as ET

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
    rows = []
    def cell_to_col(ref):
        col_str = ''.join(c for c in ref if c.isalpha())
        col = 0
        for char in col_str:
            col = col * 26 + (ord(char.upper()) - ord('A') + 1)
        return col - 1
    def cell_to_row(ref):
        return int(''.join(c for c in ref if c.isdigit())) - 1
    for row_node in root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        row_idx = int(row_node.get('r')) - 1
        while len(rows) <= row_idx: rows.append({})
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
            rows[row_idx][col_idx] = cell_val
    return rows

xlsx_path = r"C:\Users\Dell\Downloads\IEMS weekly report (8).xlsx"
with zipfile.ZipFile(xlsx_path) as z:
    ss = parse_shared_strings(z)
    rows = get_sheet_rows(z, ss)

REMARK_COL = 27  # column index for Remark (0-based)
MODULE_COL = 0
USERTYPE_COL = 1

print(f"Scanning remark column (col {REMARK_COL}) for all non-empty values:\n")
for i, row in enumerate(rows):
    remark_val = row.get(REMARK_COL, '')
    if remark_val:
        module = row.get(MODULE_COL, '')
        utype = row.get(USERTYPE_COL, '')
        print(f"Row {i+1:3}: module='{module}' | usertype='{utype}' | remark='{remark_val[:80]}'")
