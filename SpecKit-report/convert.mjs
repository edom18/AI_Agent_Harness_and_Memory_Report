import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const inputDir = '.';

// HTML template
const template = (title, content) => `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>${title}</h1>
    </header>
    ${content}
  </div>
</body>
</html>`;

function getTitleFromMarkdown(mdContent, fallbackTitle) {
  const match = mdContent.match(/^#\s+(.*)/m);
  return match ? match[1] : fallbackTitle;
}

function processFiles() {
  const files = fs.readdirSync(inputDir);
  const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md' && !f.startsWith('.'));
  
  // Create an index if needed, or simply let the user navigate
  console.log(`Found ${mdFiles.length} markdown files to convert.`);

  for (const file of mdFiles) {
    const mdPath = path.join(inputDir, file);
    const htmlFileName = file.replace('.md', '.html');
    const htmlPath = path.join(inputDir, htmlFileName);

    console.log(`Converting ${file} -> ${htmlFileName}...`);
    
    let mdContent = fs.readFileSync(mdPath, 'utf8');
    
    // Extract title
    const title = getTitleFromMarkdown(mdContent, file.replace('.md', ''));

    // Replace internal .md links with .html links
    mdContent = mdContent.replace(/\]\(([^)]+)\.md\)/g, ']($1.html)');
    
    // Convert to HTML
    const htmlContent = marked.parse(mdContent);
    
    // Wrap in template
    const finalHtml = template(title, htmlContent);
    
    fs.writeFileSync(htmlPath, finalHtml, 'utf8');
    console.log(`  Saved ${htmlFileName}.`);
  }
}

processFiles();
console.log('Done!');
