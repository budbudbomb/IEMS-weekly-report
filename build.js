const fs = require('fs');
const path = require('path');

try {
    const htmlPath = path.join(__dirname, 'index.html');
    const cssPath = path.join(__dirname, 'styles.css');
    const jsPath = path.join(__dirname, 'app.js');
    const distDir = path.join(__dirname, 'dist');
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
    }
    const outputPath = path.join(distDir, 'index.html');

    let html = fs.readFileSync(htmlPath, 'utf8');
    const css = fs.readFileSync(cssPath, 'utf8');
    const js = fs.readFileSync(jsPath, 'utf8');

    // Replace CSS link with inline style tag
    html = html.replace(/<link[^>]*href=["']styles\.css["'][^>]*>/, `<style>\n${css}\n</style>`);

    // Replace JS script with inline script tag
    html = html.replace(/<script[^>]*src=["']app\.js["'][^>]*>\s*<\/script>/, `<script>\n${js}\n</script>`);

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log('Successfully generated standalone HTML dashboard at:', outputPath);
} catch (error) {
    console.error('Error generating standalone HTML:', error);
}
