# Part 1d A more complex state, debugging React apps
https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

# Complex State
`useState` function multiple times to create separate "pieces" of state.
`useState` can initialize to any value, such as an object.

*Object spread syntax* can automatically bring along all the rest of the object's key-value pairs to a new object decl.
```js
const [clicks, setClicks] = useState({left: 0, right: 0})

const handleLeftClick = () => {
    setClicks({
        ...clicks,  // Copies over entire clicks object into this new anonymous object creation
        left: clicks.left + 1   //
    })
}
```
What's actually happening: the object spread is actually bringing over ALL values from the previous object.
Then, following with an assignment to a property overrides that property.
So: First, copy all. Second, override. Alternatively described: create a copy of the object where the value of the overriden properties are set.
Object spread syntax came out in 2018

Why not update the state directly? `clicks` is our state variable, so do we have to use `setClicks`?
***IT IS FORBIDDEN IN REACT TO MUTATE STATE DIRECTLY.***
The application may appear to work, but can result in unexpected side effects.
**Changing state has to always be done by setting the state to a ***new object*****
If properties from the previous state object want to simply be copied, this has to be done by copying those properties into a new object.
Again: State shouldn't be mutated directly. Provide a new object for the state.

Think about how you store your state (separate, or bundled into objects).
There should be benefits to bundling state together into an object.
[There are situations when it's benefits to store application state in a more complicated data structure.](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)

React Hooks need a completely new state object.
In the slightly older style of using classes and `this.setState`, it would *merge* the state. That's not how it is anymore.

**RECOMMENDED: Split state into multiple state variables based on which values tend to change together.**
Reduce the need for merging by splitting into separate objects / group related state into a few independent state variables
Complex state logic can be managed with custom hooks or with a [reducer](https://reactjs.org/docs/hooks-reference.html#usereducer).

# Handling Arrays
Initialize with an empty array.
Set the entire array object, don't mutate the existing one.
Use `arr.concat()` which returns a new array object, not the current one.
Don't use `push()` since this modifies the state array directly, which is not good.
Mutating state directly can lead to bugs that are hard to figure out.

# Conditional rendering
Conditional Rendering: Render different React-elements depending on the state of the application.
(Literally just using `if` and returning different stuff).
React has fancier ways of doing conditional rendering though.

# Old React
In this course we use the state hook to add component state. Available 16.8.0 onward.
Before hooks, no way to add stat to React functional components.
Components had to be defined as a React class to use state. (JS `class` syntax).
This class uses hooks exclusively (radical decision!). Ensure learning future style of React.
Class syntax (old) vs Functional Components with hooks (new).

# Debugging React Applications
First rule of web development: Keep the browser's developer console open at all times.
The Console tab in particular should always be open, unless there is a specific reason to view another tab.

Old school print based debugging is always a good idea. E.g. `console.log(props)`
Tip: Use commas to print the entire object, not pluses to concat strings.

Pause execution of your application code in the Chrome developer console's debugger.
Write the command `debugger` anywhere in your code. (Hardcoded breakpoint)
Inspect current values of variables in the console, or in the Sources tab "Scope" section
Debugger allows line by line code execution. (Sources tab)

[React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
Adds React tab to developer tools.
Can inspect React elements, state & props! (Sorta shitty for state created by hooks)
Shows state hooks in order of definition.

# [Rules of Hooks](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#rules-of-hooks)
Rules and limitations of hooks for proper functioning state.

`useState` (and `useEffect`) ***must not be called from inside a loop, conditional expression, or any place that is not a function defining a component***.
Hooks may only be called from inside the React Component function body. (`useState()` is the hook!)
Hooks must always be called in th same order. ***ORDER MATTERS FOR HOOKS***
E.g. No calling `useState` from within an if, a loop, or a nested function in the component.

# [Event Handling Revisited](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#event-handling-revisited)
Event handling has proven difficult, so more on it.
