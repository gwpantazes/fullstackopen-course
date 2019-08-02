# Part 1c: Component state, event handlers
https://fullstackopen.com/en/part1/component_state_event_handlers

React Component state.

Nested function in component. Access props directly, not as parameters.

Props are read-only. Components are pure functions with respect to props. https://reactjs.org/docs/components-and-props.html

# Destructuring
JS ES6 feature - destructure values from objects and arrays upon assignment.

Streamline component by assigning the values of the properties directly into const variables at the top of the component.
Destructuring makes assigning variables out of objects easier.
In the component `const { name, age } = props` 
or in the Component parameters `const MyComp = ({ destructured, vars}) => { ... }`

PRO TIP: Prop parameter destructuring is the COOL way to do it.

# Page re-rendering
Updating a value of a prop from the higher scope doesn't rerender the component.
Don't re-render components with `ReactDOM.render`.

# Stateful component
```js
import React, { useState } from 'react'
const App = (props) => {
  const [ counter, setCounter ] = useState(0)
```
Destructure the array of length two into state variables.
Parameter to use state sets initial value.
`counter` is variable actually holding state. `setCounter` is function to modify that variable.
When a state modifying function is called, *React re-renders the component*.
Rerendering a component means that the function body of the component function gets re-executed.
    QUESTION: Does this create a whole new batch of all those functions?
    QUESTION: How, then, does it keep state?
    QUESTION: Does this mean it's a terrible idea to use `setInterval` in a function changing state?
After re-render (re-executing component function body), it calls `useState` and returns the newly changed value.

Debug re-renders by putting `console.log` right into the middle of the component, before the return of the JSX.
It will run every time the implicit `render` function gets called.

With react hooks, we don't have to define react components as `class`es anymore.

# Event Handling
Buttons. `onClick` event handler.
Define event handlers as `const` functions in the component. Put the function reference in the JSX.
Remember to use the state's `setCounter` or `setXyz` function.

# Event Handlers are functions
Event handlers need to be function objects or references to functions (effectively same thing).
You can't call the intented function / put a *function call* directly in the event handler's slot.
UNLESS that function is reterning a function object, of course!

***GOTCHA:*** Don't make a function call to a state setter in the render function. This will cause an infinite state change -> render -> state change... loop.

# Function that returns a function
Return a function object from your function. (BOOM! THAT'S A CLOSURE, BABY)
Call the factory function with the parameter you want it to call later, let the closure do the work.

Double arrow function all on one line is a small closure generator.
`const setToValue = value => () => setCounter(value)`
Double arrow functions have to be "called twice".
First function configures second function, defining parameters (closure scope).
Second function gets called with those parameters (closure call).
Closure == Same thing as *currying* in functional programming. (Currying is said in func programming, but comes from mathematics).

# Passing state to child components
React components should be small and reusable (across application and even other projects).

React Best Practice: Lift shared state up to the closest common ancestor in the component hierarchy.

`onClick` prop is the suggested naming convention for a component getting passed an onclick handler.
Once again, use destrucring to simplify component setup.

No exercises! moving on.