# NextGen CSS Framework - Installation & Usage Guide

## Installation

### Option 1: NPM (Recommended)

1. Install the package using npm:

```bash
npm install nextgen-css-framework --save
```

2. Import the framework into your project:

```scss
// Import the entire framework
@import 'nextgen-css-framework/scss/main';

// Or import only specific components
@import 'nextgen-css-framework/scss/abstracts/variables';
@import 'nextgen-css-framework/scss/abstracts/mixins';
@import 'nextgen-css-framework/scss/base/reset';
@import 'nextgen-css-framework/scss/components/buttons';
```

### Option 2: Manual Installation

1. Download the source files from the repository
2. Copy the `scss` folder to your project
3. Import the framework in your SCSS:

```scss
@import 'path/to/nextgen/scss/main';
```

### Option 3: CDN

Add the following link in your HTML file:

```html
<link rel="stylesheet" href="https://cdn.example.com/nextgen/dist/nextgen.min.css">
```

## Basic Setup

### HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NextGen CSS Framework</title>
  <link rel="stylesheet" href="path/to/nextgen.css">
</head>
<body>
  <div class="container">
    <h1>Getting Started with NextGen CSS Framework</h1>
    <p class="lead">A modern, lightweight CSS framework for next-generation websites.</p>
    
    <div class="grid">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Easy to Use</h3>
            <p class="card-text">NextGen CSS Framework is designed with simplicity in mind.</p>
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Powerful Features</h3>
            <p class="card-text">Flexible grid system, modern components, and utility classes.</p>
            <button class="btn btn-outline-primary">Documentation</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## Customization

### Customizing Variables

Create a `_custom-variables.scss` file to override default variables:

```scss
// _custom-variables.scss
$primary: #ff6b6b;
$secondary: #546de5;
$font-family-base: 'Nunito', sans-serif;
$border-radius: 0.5rem;
```

Then import your custom variables before importing NextGen:

```scss
// main.scss
@import 'custom-variables';
@import 'nextgen/scss/main';
```

### Building from Source

1. Clone the repository:

```bash
git clone https://github.com/username/nextgen-css-framework.git
cd nextgen-css-framework
```

2. Install dependencies:

```bash
npm install
```

3. Customize the variables in `scss/abstracts/_variables.scss`

4. Build the CSS:

```bash
npm run build
```

The compiled CSS will be available in the `dist` folder.

## Framework Features

### Grid System

NextGen provides a 12-column grid system:

```html
<div class="row">
  <div class="col-md-4">Column 1</div>
  <div class="col-md-4">Column 2</div>
  <div class="col-md-4">Column 3</div>
</div>
```

### Components

NextGen includes various components:

- Buttons
- Cards
- Forms
- Navigation
- And more...

### Utility Classes

Use utility classes for quick styling:

```html
<div class="d-flex justify-content-between align-items-center">
  <div class="p-3 bg-primary text-white rounded">Flex Item 1</div>
  <div class="p-3 bg-secondary text-white rounded">Flex Item 2</div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

MIT License
