# NextGen CSS Framework

A modern, lightweight, and flexible CSS/SCSS framework for next-generation websites.

## Framework Structure

```
nextgen/
├── scss/
│   ├── main.scss                 # Main entry file
│   ├── abstracts/
│   │   ├── _variables.scss       # Variables
│   │   ├── _functions.scss       # SCSS functions
│   │   ├── _mixins.scss          # SCSS mixins
│   │   └── _animations.scss      # Animation keyframes
│   ├── base/
│   │   ├── _reset.scss           # CSS reset
│   │   └── _typography.scss      # Typography rules
│   ├── components/
│   │   ├── _buttons.scss         # Buttons
│   │   ├── _cards.scss           # Cards
│   │   ├── _forms.scss           # Forms
│   │   └── _navigation.scss      # Navigation elements
│   ├── layout/
│   │   ├── _grid.scss            # Grid system
│   │   ├── _containers.scss      # Container layouts
│   │   └── _flexbox.scss         # Flexbox utilities
│   └── utilities/
│       ├── _spacing.scss         # Margin/padding utilities
│       ├── _display.scss         # Display helpers
│       ├── _colors.scss          # Color utilities
│       └── _responsive.scss      # Responsive utilities
├── dist/
│   ├── nextgen.css               # Compiled and minified CSS
│   └── nextgen.css.map           # Source map
└── docs/
    └── index.html                # Documentation
```

## Features

- Modern CSS with CSS variables (custom properties)
- Flexbox and CSS Grid systems
- Dark mode support with prefers-color-scheme
- Mobile-first responsive design
- Accessibility best practices
- Modular architecture
- Lightweight with minimal specificity
- Performance-optimized
- Compatible with modern browsers

## Usage

Import the entire framework:

```scss
@import 'nextgen/scss/main';
```

Or import only what you need:

```scss
// Required base
@import 'nextgen/scss/abstracts/variables';
@import 'nextgen/scss/abstracts/mixins';
@import 'nextgen/scss/base/reset';

// Optional components
@import 'nextgen/scss/components/buttons';
@import 'nextgen/scss/layout/grid';
@import 'nextgen/scss/utilities/spacing';
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
