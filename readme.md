# NextGen CSS Framework

A modern, lightweight, and flexible CSS/SCSS framework for next-generation websites.

![NextGen CSS Framework Banner](https://via.placeholder.com/1200x300?text=NextGen+CSS+Framework)

## Features

- 🚀 Modern CSS with custom properties (variables)
- 📱 Mobile-first responsive design
- 🌗 Dark mode support with `prefers-color-scheme`
- 📦 Modular architecture with modern Sass module system
- 🔍 Lightweight with minimal specificity
- ♿ Accessibility best practices
- 📊 Flexbox and CSS Grid systems
- ⚡ Performance-optimized

## Installation

### npm (Recommended)

```bash
npm install nextgen-css-framework --save
```

### Manual Installation

1. Download the source files from the repository
2. Copy the `scss` folder to your project
3. Import the framework in your SCSS:

```scss
@import 'path/to/nextgen/scss/main';
```

### CDN

```html
<link rel="stylesheet" href="https://cdn.example.com/nextgen/dist/nextgen.min.css">
```

## Quick Start

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
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text">Card content goes here.</p>
            <button class="btn btn-primary">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## Usage with Sass

Import the entire framework:

```scss
@import 'nextgen-css-framework/scss/main';
```

Or import only what you need:

```scss
// Required base
@import 'nextgen-css-framework/scss/abstracts/variables';
@import 'nextgen-css-framework/scss/abstracts/mixins';
@import 'nextgen-css-framework/scss/base/reset';

// Optional components
@import 'nextgen-css-framework/scss/components/buttons';
@import 'nextgen-css-framework/scss/layout/grid';
@import 'nextgen-css-framework/scss/utilities/spacing';
```

## Customization

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
@import 'nextgen-css-framework/scss/main';
```

## Framework Structure

```
nextgen/
├── scss/
│   ├── _index.scss              # Central file that forwards variables & mixins
│   ├── main.scss                # Main import file
│   ├── abstracts/
│   │   ├── _variables.scss      # Variables with proper definitions
│   │   ├── _functions.scss      # Sass functions
│   │   ├── _mixins.scss         # Mixins including media-breakpoint-up
│   │   └── _animations.scss     # Animation keyframes
│   ├── base/
│   │   ├── _reset.scss          # Modernized reset
│   │   └── _typography.scss     # Typography rules
│   ├── components/
│   │   ├── _buttons.scss        # Updated buttons
│   │   ├── _cards.scss          # Cards component
│   │   ├── _forms.scss          # Forms with proper variables
│   │   └── _navigation.scss     # Navigation with media query fixes
│   ├── layout/
│   │   ├── _grid.scss           # Fixed grid system
│   │   ├── _containers.scss     # Container layouts
│   │   └── _flexbox.scss        # Flexbox utilities
│   └── utilities/
│       ├── _spacing.scss        # Margin/padding utilities
│       ├── _display.scss        # Display helpers
│       ├── _colors.scss         # Color utilities
│       └── _responsive.scss     # Responsive utilities
├── dist/
│   ├── nextgen.css              # Compiled CSS
│   └── nextgen.min.css          # Minified CSS
```

## Key Features in Detail

### Modern Sass Module System

The framework uses Sass's modern module system with `@use` and `@forward` instead of the deprecated `@import`:

```scss
// _index.scss - Central file that forwards variables and mixins
@forward "abstracts/variables";
@forward "abstracts/functions";
@forward "abstracts/mixins";
@use "abstracts/variables";

// Component files
@use '../index' as *;
```

### CSS Custom Properties (Variables)

Uses CSS variables for theming and dark mode support:

```scss
:root {
  --ng-primary: #{$primary};
  --ng-secondary: #{$secondary};
  --ng-white: #{$white};
  --ng-body-bg: #{$white};
  --ng-body-color: #{$gray-900};
}

@media (prefers-color-scheme: dark) {
  :root {
    --ng-primary: #{color.adjust($primary, $lightness: 10%)};
    --ng-body-bg: #{$gray-900};
    --ng-body-color: #{$gray-100};
  }
}
```

### Responsive Grid System

12-column grid system using flexbox:

```html
<div class="row">
  <div class="col-md-4">Column 1</div>
  <div class="col-md-4">Column 2</div>
  <div class="col-md-4">Column 3</div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Future Enhancements

See the [Future Enhancements](future-enhancements.md) document for upcoming features and improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
