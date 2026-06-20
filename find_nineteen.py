import zipfile
import xml.etree.ElementTree as ET
import os
import glob

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

def main():
    folder = r"C:\Users\Dell\Downloads"
    files = glob.glob(os.path.join(folder, "IEMS weekly report*.xlsx"))
    for xlsx_path in files:
        filename = os.path.basename(xlsx_path)
        with zipfile.ZipFile(xlsx_path, 'r') as z:
            shared_strings = parse_shared_strings(z)
            
            try:
                xml_content = z.read('xl/worksheets/sheet1.xml')
            except KeyError:
                sheets = [f for f in z.namelist() if f.startswith('xl/worksheets/sheet')]
                if not sheets: continue
                xml_content = z.read(sheets[0])
                
            root = ET.fromstring(xml_content)
            for row_node in root.findall('.//{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
                r_idx = int(row_node.get('r'))
                for cell_node in row_node.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                    ref = cell_node.get('r')
                    val = cell_node.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                    if val is not None and val.text:
                        v_text = val.text
                        cell_type = cell_node.get('t')
                        if cell_type == 's':
                            idx = int(v_text)
                            cell_val = shared_strings[idx] if idx < len(shared_strings) else v_text
                        else:
                            cell_val = v_text
                        
                        # Check if cell_val matches 19 exactly or is float 19.0
                        try:
                            f_val = float(cell_val)
                            if f_val == 19.0:
                                print(f"File: {filename} -> Row {r_idx}, Col {ref}: {cell_val}")
                        except ValueError:
                            if cell_val == '19':
                                print(f"File: {filename} -> Row {r_idx}, Col {ref}: {cell_val}")

if __name__ == '__main__':
    main()
