# 1b Javascript

Official name of JS standard is ECMAScript. e.g. ECMAScript rcent version ES9 = ECMAScript 2018

New JS transpiles to older JS using transpilers because browsers don't support newest JS yet.

[Babel](https://babeljs.io/) is popular transpiler.
`create-react-app` automatically configures babel transpilation.

***WORK RELEVANT NOTE: Part 7*** talks about transpilation, and I was just wondering things like
- Exporting original class name -> hashed class names from RALPHA build process
- Transpile-time data-test id macro/insertion (keeping it out of runtime)

Node.js is a JS runtime environment based on Google's V8 engine and works anywhere.
How to run: `node name_of_file.js`
`node` starts a console/interpreter/REPL.

# Variables
`const` defines a constant.
`let` defines a mutable variable.
Type of variable can change during execution.
Stick with `const` and `let`. Don't use the older `var`.

There is only one variable scope in ES5 and that's function scope. So var would live outside of blocks e.g. for loops

IIFE Immediately Invoked Function Expression: `(function () { ... })()`
Declared and immediately called.

JS variables are *hoisted* to the top of their function.
JS pulls / hoists the variables up to the top of the function. If you forget to declare the local function var, because of hoisting and variable search functionality, JS will walk up to the global scope looking for a var declaration.
If you `use strict` then JS won't allow this global walk-up to look for badly declared/used variables.
You should always use `"use strict";`
Even when using use strict, it'll still walk up the whole global scope if you use a variable in a JS function

`var` is function scope, and hoists scope
`let` is block scope! And replaces `var`
`const` you cannot ***reassign*** but the object itself is mutable (you can change properties of objects)
***RULE OF PROGRAMMING***: Minimize mutable state!

# Arrays
```
const t = [1, -1, 3]
t.push(5)
t.length
t[1]
t.forEach(value => { console.log(value) })
t.map(value => value * 2)           // Map is used frequently in React
const [first, second, ...rest] = t  // Destructuring Assignment
```
`const` array only prevents whole array object reassignment. Items can be modified.

React and functional programming.
Immutable data structures.
In React code, it is preferable to use the method `.concat()` which creates a new array with the content of the old and new array. Don't use `push()`.

# Objects