const fs = require('fs');

const htmlContent = fs.readFileSync('dashboard_standalone.html', 'utf8');

// Extract JS content between <script> and </script> tags
// We want to find the script containing the DEFAULT_MODULES or the app logic
const matches = htmlContent.match(/<script>([\s\S]*?)<\/script>/g);
if (!matches) {
    console.error("No script tag found in HTML file!");
    process.exit(1);
}

// Find the match that contains DEFAULT_MODULES
let scriptCode = '';
for (const match of matches) {
    const raw = match.substring(8, match.length - 9); // strip <script> and </script>
    if (raw.includes('DEFAULT_MODULES')) {
        scriptCode = raw;
        break;
    }
}

if (!scriptCode) {
    console.error("Could not find app script in HTML file!");
    process.exit(1);
}

const run = new Function('global', 'window', 'document', 'localStorage', `
    ${scriptCode}
    return { DEFAULT_MODULES, MODULES, countPages, countDonePages };
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
const { DEFAULT_MODULES, countPages, countDonePages } = exportsObj;

console.log("STANDALONE DEFAULT_MODULES:");
Object.keys(DEFAULT_MODULES).forEach(key => {
    const mod = DEFAULT_MODULES[key];
    const total = countPages(mod);
    const done = countDonePages(mod);
    console.log(`  ${key}: totalPages = ${total}, donePages = ${done}`);
});
