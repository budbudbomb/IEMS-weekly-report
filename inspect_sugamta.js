const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');

const filePaths = [
    'C:\\Users\\Dell\\Downloads\\IEMS weekly report (4).xlsx',
    'C:\\Users\\Dell\\Downloads\\IEMS weekly report (2).xlsx',
    'C:\\Users\\Dell\\Downloads\\IEMS weekly report (1).xlsx',
    'C:\\Users\\Dell\\Downloads\\IEMS weekly report.xlsx'
];

let xlsxPath = '';
for (const p of filePaths) {
    if (fs.existsSync(p)) {
        xlsxPath = p;
        break;
    }
}

if (!xlsxPath) {
    console.log("No Excel files found in Downloads!");
    process.exit(1);
}

console.log("Reading from:", xlsxPath);
const workbook = xlsx.readFile(xlsxPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

console.log("Headers:");
for (let i = 0; i < 4; i++) {
    console.log(`Row ${i+1}:`, rows[i] ? rows[i].slice(0, 10) : []);
}

console.log("\nSugamta Rows:");
let currentModule = "";
for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    if (row && row[0] && row[0].trim() !== '') {
        currentModule = row[0].trim();
    }
    if (currentModule.toLowerCase().includes('sugamta')) {
        console.log(`Row ${r+1}:`, row.slice(0, 10));
    }
}
