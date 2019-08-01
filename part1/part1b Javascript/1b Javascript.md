# 1b Javascript
https://fullstackopen.com/en/part1/javascript

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
- Object literals: list property key value pairs within curly braces
- Values of the properties can be of any type, like integers, strings, arrays, objects
- Properties referenced with dot notation or square braces
    - Dot notation no string, just JS symbol name
    - Bracket notation, use a string
- Dot notation or bracket notation can add properties to an already existing object
- Invalid property names must be done with brackets for strings

# [Functions](https://fullstackopen.com/en/part1/javascript#functions)
- Arrow functions: `const func = (param1, ...) => { return something; }
- `function` declaration with a *name*
- nameless `function` expression being assigned to a varaible

# [Object methods and "this"](https://fullstackopen.com/en/part1/javascript#object-methods-and-this)
In this couse we're using a React version containing React hooks, so we don't need to define objects with methods.
Older versions of react have to know how to use object methods and "this".

Arrow functions and functions defined using `function` have different behavior for objects and `this`.
- `function` `this` is determined by how it's called (runtime binding)
    - Can't be set by assignment during runtime, except with `bind()`
- `bind()` sets the value of a function's `this` regardless of how it's called
- Arrow functions don't provide their own `this` binding, inheriting the value of the enclosing lexical context)

- in non–strict mode, is always a reference to an object
- in strict mode can be any value.

- Global Context: In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
    - Note: You can always easily get the global object using the global `globalThis` property, regardless of the current context in which your code is running.

- In a browser, the global object is `window`

`this` refers to the object the function is being called from

Methods can be assigned to properties of objects.

Method references can be used to store a method reference and call it later from that alias/variable.
    - ALTHOUGH, method references lose context of the original `this`. This is becaus `this` is based on *how the method is called*.
        - Methods which don't reference `this` can still be used via method reference.
    - Losing track of `this` is a problem!

This course uses "this-less" Javascript.

`setTimeout(myObj.myFuncUsingThis, 1000)` will lose track of `this` in the object. `this` referes to the Timeout object in this case.
`bind` can solve this: `setTimeout(myObj.myFuncUsingThis.bind(myObj), 1000)`
`bind` creates a new function where it has bound `this` to point to the object, overriding the calling context.

Arrow functions shouldn't be used as methods for objects because then `this` doesn't work at all.

TODO Learn in-depth about `this`: https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth

# [Classes](https://fullstackopen.com/en/part1/javascript#classes)
No class mechanism lik object-oriented programming languages.
Simulating object oriented classes is possible.
*class syntax& introduced in ES6 simplifies definition of class-like things.

`class`, `constructor`, and `new`.
At the core, classes are still objects based on javascripts prototype inheritance.
Javascript only actually has types of Boolean, Null, Undefined, Number, String, Symbol, and Object.
So object's created by classes are actually just Objects.

`class` is controversial: https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65
https://github.com/petsel/not-awesome-es6-classes
`class` is used alot in "old" React and Node.js code.
Hook feature of react, we don't need `class` syntax.

# Javascript Materials
- Mozilla's Javascript guide is the best: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
- https://github.com/getify/You-Dont-Know-JS
- https://egghead.io/ has good stuff, but some is behind paywall
    
# Re-Introduction to Javascript
Reading https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript since it was highly recommended.

## Types
- Number
    - double precision 64-bit format IEEE 754 values
    - in practice, integers behave like 32 bit ints
    - Also a Math object
    - parseInt converts strings to number. Always specify base.
    - parseFloat always base 10.
    - parse functions ignore trailing NaN characters if the leading is a number
    - Unary `+` operator converts string values to numbers: `+ '42'; // 42`
    - NaN Not a Number if parsed thing isn't a number
        - NaN is toxic. It'll return NaN from an expression using it.
        - isNaN() function
    - Infinity and -Infinity == 1 / 0 and -1 / 0. isFinite().
- String
    - Sequence of Unicode characters
    - UTF-16 code units (each code unit is a 16 bit number)
    - Each Unicode character is represented by either 1 or 2 code units
    - Represent a single character with a single character in a string
- Boolean
    - `true` and `false`
    - "true values" and "false values" ("truthy" and "falsy")
        - false, 0, empty strings (""), NaN, null, and undefined all become false.
        - All other values become true.
    - * Boolean operations such as && (logical and), || (logical or), and ! (logical not) are supported
- Symbol (new in ES2015)
- Object
    - Function
    - Array
    - Date
    - RegExp
- null
    - Deliberate non-value. Has to be accessed through `null` keyword.
- undefined
    - Uninitialized variable / hasn't been assigne yet.
    - `undefined` is a constant.
- Error

## Variables
let, const, or var.
- let block level vars
- const block level constant vars
- var variable is available from the *function* it is declared in
    - var hoists above the block scope up to the function scope (or even global scope)
- Variable without assignment is undefined.

## Operators
Normal math stuff. 
Compound assignment (`x+=2`)
`+` operator string concats
If you add a string to a number, everything is converted into a string first
```js
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75" (LEFT TO RIGHT!)
```
    - Tip: Adding empty string to something converts it to a string

Comparisons work for both strings and numbers: <, >, <= and >=
    - QUESTION: How does it work for strings...?

Equality
- `==`: Equality with type coercion
- `===`: Strict equality which avoid type coercion
- `!=` and `!==` operators too

Also bitwise operators!

## Control Structures

- if else if else
- while {} and do {} while();
- Java and C style for loop: `for(init; check; iterate) {}`
- `for...of` loop for iterables: `for (let value of array) {}`
    - `Object.entries(object)` provides an iterable key-value pairs of the object
- `for...in` loop through object's property keys: `for (let propertyKey in object)` 
    
&& and || operators use short-circuit logic; execution of second operand is dependent on the result of the first. 
This is useful for checking for null objects before accessing their attributes. `var name = o && o.getName();`

Or for caching values (when falsy values are invalid):
`var name = cachedName || (cachedName = getName());`

Ternary expression like Java.

`switch` multiple branches based on number or string.
- `break` or fall-through to next case.
- Note: Specifically label deliberate fallthrough with a comment.
- default clause is optional
- comparisons take place with `===`

## Objects
Objects are collections of name-value pairs.
- The "name" part is a javascript string.
- Value can be any value, including more objects.

Create an object (semantically equivalent options): 
- `new Object()`
- `{}` object literal syntax
    - Prefer this style for its simplicity and likeness to JSON
    - Initialize objects in their entirety

Object attribute access can be chained together
```js
obj.details.color; // orange
obj['details']['size']; // 12
```

Object prototypes (look a lot like classes!) are created with functions (that look alot like constructors!)
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define an object
var you = new Person('You', 24); 
// We are creating a new person named "You" aged 24.
```

Dot notation and bracket notation can be used to get/set property values from objects.
Object keys can be set dynamically by using bracket notation and strings/variables.

## Arrays
Arrays are an object. Magic property `length`.
Bracket get/set
    - Doesn't have to be adjacent. You can set 100 forward. `a[a.length + 100] = 'whatever'`. Increases length accordingly, because *length is 1 + the highest index*.
Array literal syntax `[1,2,3]`
Querying nonexistent array index return undefined

- `for...of` useful for iterables like arrays.
- `for...in` can iterate over an array, but only iterates over the indices. Also, if other properties were added to the Array.prototype, then it would also be in the loop, which isn't great. So don't use `for...in` for arrays.
- `array.forEach(function(currentValue, index, array) {})` can also do something per value in array

Append: `a.push(item);`

## Functions
Empty return no no return returns `undefined`.

Parameters aren't required. You can call a function without specifying parameter arguments, and they'll receieve `undefined`.
You can also pass in more arguments than the function was expecting.
Functions have access to the `arguments` variable in their function body, which is an array-like object holding all the values passed to the function.
You can either leave the function definition empty `function avg()` 

### Rest Parameter and Spread Operator Syntax
or use the Rest parameter syntax `function avg(...args)` (which is more clear and shortens code too).
The `...variable` Rest parameter holds the entire list of uncaptured arguments that the function was called with.

You can call the function with an array as the parameter by using function.apply()
`avg.apply(null, [1,2,3]);` 
Or by using the spread operator: `let a = avg(...numbers)`

Anonymous functions (no name functions) are just objects.
Anonymous functions can be given names by assigning to variables.

 IIFEs (Immediately Invoked Function Expressions): `(function() { /*...*/ })();`

Functions can be called recursively. Useful for tree structures (such as browser DOM).
Named IIFE can be used to use a function expression recursively (since recursion needs to know its own name).

Name in IIFE is only available in the function's own scope.
Nice to name things for stack traces and debugging.

Functions are objects

## Custom Objects
Javascript is prototype-based.
Objects have no class statement about the object. They are just objects.
Javscript uses functions as classes.
Attach functions to objects. `this` keyword referes to the current object.
Be careful: call functions using `this` from the object, and don't call from method reference or all `this` will be the global object and the access properties of `this` will be undefined.

You can use `this.` prefix on your object prototype function to "improve"/make it clearer what the "this" values are.

`new` is strongly related to `this`. `new` creates a new empty object, then calls the function with `this` set to that new object. `new` returns the `this` object to the calling site.
Functions designed to be called by `new` are called *constructor functions*.
- Common practice is to capitalize these functions as a reminder to call them with `new`

Tip: Extract out and share functions instead of creating new function objects every time.
Tip: Better yet, assign the functions after the constructor function directly to the prototype: `MyObject.prototyp.myFunc = function() {};`

The *prototype* is an object shared by all instances of `MyObj`.
Prototype forms a lookup chain (the prototype chain!). 
Accessing a property of Person that isn't set will elevate the lookup chain to the `prototype` object and see if it exists there instead.
Anything assigned to `MyObj.prototype` becomes available to all instances of that constructor via the `this` object.
Adding things to the prototype can happen any time, even after the object instance has already been created during runtime.

You can modify built-in Javascript prototypes too, such as `String.prototype` to inject methods or whatever.

Note: String literals are just String objects.

`Object.prototype` is at the top of the prototype chain.
- toString()
- You can override methods from higher in the prototype chain by overriding at a lower layer, either in the instance itself or in its prototype

First argument to `apply()` is the object that should be treated as `this`.
Calls function with a `bind`. First argument can be null.
`apply()` has sister function called `call` which also lets you set `this`, but takes expanded arg list, not array like in `apply`.

Rest arguments `...args` can be used to capture the rest of the arguments.

### Inner functions
Functions can be declared in other functions.
Nested functions can access variables in their parent function's scope.
Remember global scope is a function scope too.
Global > Function > Function > etc.

Keep the number of functions in the global scope down. Nest functions to restrict scope.

Use nested functions coupled together to get a "local global" effect of sharing data without polluting the global namespace. Use with caution.

## Closures
Powerful, but confusing: Closures.

Closures are outer functions and inner functions.
The outer function does return. But its scope and its variables do not disappear.
The inner function still has access to the parent function scope which hasn't disappeared.
There can be "copies" / different versions of the parent function scope.

When JS executes a function, a "scope" object is created to hold the local variables created within the function.
The scope is initialized with any variables passed in as function parameters.
Scope is similar to the global object, but different:
- A brand new scope object is created every time a function starts executing
- Scope objects cannot be directly accessed by JS code (unlike Global, accessible as `this` and/or `window` in browsers)
    - There is no mechanism for iterating over the properties of the current scope object.

Javascript's garbage collector doesn't collect the parent scope because the returned function maintains a reference back to its parent scope. The scope object will not be garbage-collected until there are no more references to the returned function object (child).

Scope objects form a chain called a scope chain.
Similar to prototype chain used by objects.

A closure is a combination of a function and the scope object in which it was created.
Closures let you save state, and can be used in place of objects because of that state.

# Remaining Reading List
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
- https://stackoverflow.com/questions/111102/how-do-javascript-closures-work