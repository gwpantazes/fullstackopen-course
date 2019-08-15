# [Part 2a Rendering a collection, modules](https://fullstackopen.com/en/part2/rendering_a_collection_modules)

Use `console.log` gratuitously. Use debugging tools like `debugger;`. Don't guess.
Use commas, not `+` concatenation, in `console.log`.

# Javascript Arrays
Functional programming methods of Javascript array: `find`, `filter`, and `map`.
- Like Java8 streams

# [Rendering Collections](https://fullstackopen.com/en/part2/rendering_a_collection_modules#rendering-collections)
- `map` react elements inside other tags using JSX expressions
- it's common to break out JSX generating code into own function (used the word method?)

## Key-attribute
- React elements need unique key props
    - pass in some unique id as a `key` react prop (looks like element attribute)
- Make sure the elements have the key attribute. Look out for warnings.

# Map
- Map always creates a new array

- Be careful of common sources of error such as curly braces around the one-liner arrow function expression

- Formatting one-expression arrow function blocks is good, e.g. especially for JSX when mapping

## Anti-pattern: array indexes as keys
- We *could* have passed in the index to our map to use the array index as keys
- But don't do this! It's not recommended and can cause problems.
    - Key is the only thing React uses to identify DOM elements.
    - Using array indices as keys can break your app and display worng data!
    - Pushing item onto the list or remove something from the middle, suddenly it's all broken.
- Every such item should have a *permanent* and *unique* property
    - Ideally assigned when the item is created (an ID)
- tl;rd: Generate a unique id for every item and use it as a key when rendering the list

Exception: You can use index as a key if
1. the list and items are static, they are not computed and do not change
2. the items in the list have no ids
3. the list is never reordered or filtered

# Refactoring Modules
Clean up time!
- `key` attribute needs to be defined for the react element, whatever it may be - HTML tag or React component tag

- Declare each component in their own file as an ES6-module.

- `import` imports modules, enabling use in code
    - puts the module into a variable for usage

- Put into `src/components` directory
- Name the file after the component

- Modules must have thir own imports
- Modules export the declared module, the variable 

- import location must be given in relation to the importing file

- Use single quotes around the module names
- Filename extension can be omitted

- `App` is a componnt as well, so split that into its own module too.
- Now we have `src/index.js`, `src/App.js`, et al.
    - Interestingly, App.js is kept up in root source

# When the application breaks
- console.log before the render in the component
- Typical problems
    - props expected to be of different type
    - called with a different name than their actual
    - destructuring may fail for this reason
        - console.log the entire props to see what it contains