import os
import glob

downloads_dir = r"C:\Users\Dell\Downloads"
search_pattern = os.path.join(downloads_dir, "*IEMS*")
files = glob.glob(search_pattern)

print("Found files:")
for f in files:
    mtime = os.path.getmtime(f)
    import datetime
    dt = datetime.datetime.fromtimestamp(mtime)
    print(f"  {os.path.basename(f)} (Modified: {dt})")
