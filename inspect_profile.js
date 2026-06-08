const xlsx = require('xlsx');

function dumpProfilePages() {
    try {
        const workbook = xlsx.readFile('Project Status - 24 May 2024.xlsx');
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: '' });
        
        const colIdx = {
            module: 0,
            userType: 1,
            pages: 2,
            dynamicDev: 7,
            internalReviewReview: 8,
            internalReviewStatus: 9
        };

        for (let i = 1; i < 30; i++) {
            const row = data[i];
            if (!row) continue;
            console.log(`Row ${i + 1}: Module="${row[colIdx.module]}" UT="${row[colIdx.userType]}" Page="${row[colIdx.pages]}" Dev="${row[colIdx.dynamicDev]}" IntRev="${row[colIdx.internalReviewReview]}"`);
        }
    } catch (err) {
        console.error(err);
    }
}
dumpProfilePages();
