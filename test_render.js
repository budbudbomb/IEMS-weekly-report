const fs = require('fs');

const appJs = fs.readFileSync('app.js', 'utf8');

// evaluate the file to get JUNE_COMMITMENTS and DEFAULT_MODULES
const script = `
    ${appJs.split('// ============================================')[1]}
    ${appJs.split('// ============================================')[2]}
    ${appJs.split('// ============================================')[3]}
    ${appJs.split('// ============================================')[4]}
    
    let renderedCount = 0;
    JUNE_COMMITMENTS.forEach(commit => {
        const mod = DEFAULT_MODULES[commit.moduleId];
        if (mod) renderedCount++;
    });
    console.log("Modules rendered:", renderedCount);
`;

try {
    eval(script);
} catch(e) {
    console.error(e);
}
