import zipfile
import xml.etree.ElementTree as ET

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
    def cell_to_coords(ref):
        col_str = ''
        row_str = ''
        for char in ref:
            if char.isalpha(): col_str += char
            else: row_str += char
        col = 0
        for char in col_str:
            col = col * 26 + (ord(char.upper()) - ord('A') + 1)
        return col - 1, int(row_str) - 1
    for row_node in root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        row_idx = int(row_node.get('r')) - 1
        while len(rows) <= row_idx: rows.append([])
        row_cells = {}
        for cell_node in row_node.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            ref = cell_node.get('r')
            col_idx, _ = cell_to_coords(ref)
            val = cell_node.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            cell_val = ''
            if val is not None and val.text:
                v_text = val.text
                cell_type = cell_node.get('t')
                if cell_type == 's':
                    idx = int(v_text)
                    cell_val = shared_strings[idx] if idx < len(shared_strings) else v_text
                else:
                    cell_val = v_text
            row_cells[col_idx] = cell_val
        row_list = [''] * (max(row_cells.keys()) + 1) if row_cells else []
        for ci, val in row_cells.items(): row_list[ci] = val
        rows[row_idx] = row_list
    return rows

xlsx_path = r"C:\Users\Dell\Downloads\IEMS weekly report (8).xlsx"
with zipfile.ZipFile(xlsx_path) as z:
    ss = parse_shared_strings(z)
    rows = get_sheet_rows(z, ss)

row1 = rows[0]; row2 = rows[1]; row3 = rows[2]
maxCols = max(len(row1), len(row2), len(row3))
group1 = ''; group2 = ''
for c in range(maxCols):
    val1 = (row1[c] if c < len(row1) else '').strip()
    if val1: group1 = val1; group2 = ''
    val2 = (row2[c] if c < len(row2) else '').strip()
    if val2: group2 = val2
    val3 = (row3[c] if c < len(row3) else '').strip()
    parts = []
    if group1: parts.append(group1)
    if group2 and group2.lower() != group1.lower(): parts.append(group2)
    if val3 and val3.lower() != (group2 or group1).lower(): parts.append(val3)
    combined = ' '.join(parts).lower().strip()
    # Only show columns relevant to doc/dependency
    if any(k in combined for k in ['dependency','blocker','documentation','process','manual','remark','final']):
        print(f"Col {c:2}: '{combined}'")
        # Show what the matcher would resolve
        if 'dependency' in combined or 'blocker' in combined:
            print(f"         -> maps to: dependency")
        if 'process' in combined and 'flow' in combined:
            print(f"         -> maps to: docProcessFlow")
        if 'user' in combined and 'manual' in combined:
            print(f"         -> maps to: docUserManual")
        if 'remark' in combined:
            print(f"         -> maps to: remark")
        if 'final' in combined and 'status' in combined:
            print(f"         -> maps to: finalStatus")
