const fs = require('fs');
const appCode = fs.readFileSync('app.js', 'utf8');

const run = new Function('global', 'window', 'document', 'localStorage', `
    ${appCode}
    return { DEFAULT_MODULES, countPages, countDonePages, countClientReviewPoints, countCRs };
`);

// Mock objects
const mockWindow = {};
const mockDocument = {
    addEventListener: () => {},
    getElementById: () => ({ innerHTML: '' })
};
const mockLocalStorage = {
    getItem: () => null,
    setItem: () => {}
};

const exportsObj = run(global, mockWindow, mockDocument, mockLocalStorage);
const { DEFAULT_MODULES, countPages, countDonePages, countClientReviewPoints, countCRs } = exportsObj;

console.log("DEFAULT_MODULES STATS:");
Object.keys(DEFAULT_MODULES).forEach(key => {
    const mod = DEFAULT_MODULES[key];
    console.log(`  ${key}:`);
    console.log(`    Pages: ${countPages(mod)}`);
    console.log(`    Done: ${countDonePages(mod)}`);
    console.log(`    Reviews: ${countClientReviewPoints(mod)}`);
    console.log(`    CRs: ${countCRs(mod)}`);
});
