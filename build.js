/**
 * Simple Build Script for NextGen CSS Framework
 */

const fs = require('fs');
const path = require('path');
const sass = require('sass');

// Define paths - using path.resolve for better cross-platform compatibility
const SCSS_ENTRY = path.resolve(__dirname, 'scss/main.scss');
const CSS_OUTPUT = path.resolve(__dirname, 'dist/nextgen.css');
const CSS_MIN_OUTPUT = path.resolve(__dirname, 'dist/nextgen.min.css');
const CSS_MAP_OUTPUT = path.resolve(__dirname, 'dist/nextgen.css.map');
const CSS_MIN_MAP_OUTPUT = path.resolve(__dirname, 'dist/nextgen.min.css.map');

// Simple banner
const banner = `/*! NextGen CSS Framework v1.0.0 | MIT License */\n`;

// Create dist directory if it doesn't exist
if (!fs.existsSync(path.dirname(CSS_OUTPUT))) {
  fs.mkdirSync(path.dirname(CSS_OUTPUT), { recursive: true });
}

// Log all SCSS files to verify their existence
function checkScssFiles() {
  console.log('Checking SCSS files...');
  
  // Directory paths to check
  const directories = [
    'scss',
    'scss/abstracts',
    'scss/base',
    'scss/components',
    'scss/layout',
    'scss/utilities'
  ];
  
  // Check if directories exist
  directories.forEach(dir => {
    const dirPath = path.resolve(__dirname, dir);
    if (fs.existsSync(dirPath)) {
      console.log(`Directory exists: ${dirPath}`);
      console.log('Contains files:', fs.readdirSync(dirPath));
    } else {
      console.error(`⚠️ Directory MISSING: ${dirPath}`);
    }
  });
  
  // Specifically check the main entry file
  if (fs.existsSync(SCSS_ENTRY)) {
    console.log(`Main SCSS entry file exists: ${SCSS_ENTRY}`);
  } else {
    console.error(`⚠️ Main SCSS entry file MISSING: ${SCSS_ENTRY}`);
  }
}

// Compile SCSS to CSS
function compileSass() {
  try {
    console.log('Compiling SCSS to CSS...');
    
    // First check if all files exist
    checkScssFiles();
    
    // Compile standard CSS
    const result = sass.compile(SCSS_ENTRY, {
      loadPaths: [path.resolve(__dirname, 'scss')],
      style: 'expanded'
    });
    
    // Write standard CSS with banner
    fs.writeFileSync(CSS_OUTPUT, banner + result.css);
    console.log(`✓ Created: ${CSS_OUTPUT}`);
    
    // Compile minified CSS
    const minResult = sass.compile(SCSS_ENTRY, {
      loadPaths: [path.resolve(__dirname, 'scss')],
      style: 'compressed'
    });
    
    // Write minified CSS with banner
    fs.writeFileSync(CSS_MIN_OUTPUT, banner + minResult.css);
    console.log(`✓ Created: ${CSS_MIN_OUTPUT}`);
    
    // Create simple source maps
    const sourceMapData = {
      version: 3,
      file: path.basename(CSS_OUTPUT),
      sources: ['scss/main.scss'],
      sourcesContent: [fs.readFileSync(SCSS_ENTRY, 'utf8')],
      mappings: ''
    };
    
    fs.writeFileSync(CSS_MAP_OUTPUT, JSON.stringify(sourceMapData));
    fs.writeFileSync(CSS_MIN_MAP_OUTPUT, JSON.stringify(sourceMapData));
    
    console.log(`✓ Created: ${CSS_MAP_OUTPUT}`);
    console.log(`✓ Created: ${CSS_MIN_MAP_OUTPUT}`);
    
    console.log('Build completed successfully! 🎉');
  } catch (error) {
    console.error('Error compiling SCSS:', error);
    process.exit(1);
  }
}

// Run the build
compileSass();