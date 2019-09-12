# Part 2e Adding styles to React app
https://fullstackopen.com/en/part2/adding_styles_to_react_app

CSS
- CSS Preprocessor comes later

First, we'll do it the old school way
index.css in `src`, add it by importing it into the `index.js` file: `import './index.css'`

# Improved error message
`null` conditional rendering
`setTimeout` to show a component for only some time

# Inline styles
React components or elements can be provided with CSS properties as a Javascript object through the `style` attribute

CSS rules are slightly different in Javascript than in normal CSS
- Keys aren't quoted, but values are (because it's a JS object!)
- CSS is hyphenated kebab case, while CSS properties in JS are camelCase

Traditional best practice is to separate style (CSS) from content (HTML) and functionality (Javascript).
Philosophy of React is the opposite: React separates along logical functional entities, not sytle/content/functionality.
- Structural units are components
- Components handle style/content/functionality in one place
- Individual components are as independent and reusable as possible