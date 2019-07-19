# Introduction to React
https://fullstackopen.com/en/part1/introduction_to_react

[React library](https://reactjs.org/)
[create-react-app](https://github.com/facebookincubator/create-react-app)

```bash
$ npm install -g create-react-app
$ npmx create-react-app project-name
$ cd project-name
$ npm start # starts by default at http://localhost:3000
```

`App` is a component. We render that component to the `<div id="#root">` element.
Usually react apps don't put HTML directly into index.html. index.html on its own is empty.

Component is defined as a JS function. `() => (...)` is shorthand for `() => { return (...) }`
    - ES6 introduced arrow functions

Assign to const variables: `const App = ...`

JSX every tag needs closing, unlike HTML. `<br />`

Convention: Root component called App at the top of the component tree of the application

pass data to components using _props_

React component names must be capitalized or it will make an empty normal HTML element

React components usually need
- a root element
- or should be an array of components
- or should be wrapped in an empty JSX element fragment