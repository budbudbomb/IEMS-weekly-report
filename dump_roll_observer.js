const fs = require('fs');

const jsContent = fs.readFileSync('C:\\Users\\Dell\\.gemini\\antigravity-ide\\scratch\\project-dashboard\\app.js', 'utf8');

const match = jsContent.match(/const MODULES = (\{[\s\S]*?\n\});/);
if (match) {
    try {
        // Evaluate the object to access its properties
        const extractScript = jsContent.substring(0, jsContent.indexOf('let presentationMode'));
        
        eval(extractScript + '\n\nconsole.log(JSON.stringify(MODULES["preksha"].userTypes.find(ut => ut.name.toLowerCase() === "roll observer"), null, 2));');
    } catch (e) {
        console.error("Error evaluating:", e);
    }
} else {
    console.log("Could not find MODULES declaration.");
}
