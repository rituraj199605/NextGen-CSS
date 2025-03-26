/**
 * This script updates all SCSS files to use the modern @use syntax
 * It adds the necessary import to all files that need access to variables
 */

const fs = require('fs');
const path = require('path');

// Directories to process
const directories = [
  'scss/base',
  'scss/components',
  'scss/layout',
  'scss/utilities'
];

// Process each directory
directories.forEach(dirPath => {
  const fullDirPath = path.resolve(__dirname, dirPath);
  
  if (fs.existsSync(fullDirPath)) {
    const files = fs.readdirSync(fullDirPath);
    
    // Process each SCSS file in the directory
    files.forEach(file => {
      if (file.endsWith('.scss')) {
        const filePath = path.join(fullDirPath, file);
        updateScssFile(filePath);
      }
    });
  }
});

// Function to update a SCSS file
function updateScssFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file already has the @use statement
    if (!content.includes('@use \'../index\'')) {
      // Add the @use statement at the top of the file
      // Preserve any comments at the very top
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find where to insert the @use statement
      // Skip past any initial comments
      while (insertIndex < lines.length && 
             (lines[insertIndex].trim().startsWith('//') || 
              lines[insertIndex].trim().startsWith('/*') ||
              lines[insertIndex].trim() === '')) {
        insertIndex++;
      }
      
      // Insert our @use statement
      lines.splice(insertIndex, 0, '@use \'../index\' as *;');
      
      // Reconstruct the file content
      content = lines.join('\n');
      
      // Write back to the file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`⏩ Already updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error);
  }
}

console.log('SCSS files update completed!');