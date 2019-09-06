# [Part 2d Altering data in server](https://fullstackopen.com/en/part2/altering_data_in_server)

REST - Representation State Transfer
REST API - An API which follows REST architectural style

- Routes
    - URLs and HTTP request types

# REST
REST terminology

*Resources*: individual data objects
- Every resource has a unique address associated with it (URL)

Resources are fetched with HTTP GET requests
Creating a new resource is done with HTTP POST request
    - The data for the new note resource is sent in the *body* of the request
    - Typically required to be JSON (in our case)
        - Request must contain the Content-Type request header with the value `application/json`

# Sending Data to the Server
Let the server generate ids.
Axios post will automatically send Content-Type `application/json` for javascript objects.
Newly created resource is held in `response.data`

Remember to use `concat` for array state manipulations
It's wise to let the server generate timestamps instead of clients, which can be wrongly configured.

# Changing the importance of notes

Every note / component receives its own **unique** event handler function, since the id of every note is unique.
- * Uses a closure to provide the note id for later.

Template strings, "dollar-bracket"-syntax for JS expressions

- Replace the entire resource with HTTP PUT
- Change the existing resource's properties with HTTP PATCH

Object spread syntax is used to create a new copy of the object with only some properties changed.

Don't modify the original, create a copy, because the original is a reference to an object in React state. And we must never modify React state directly.

Simply object spread copying is only a shallow copy, values of the new object are same as the old object. Object references still point to the same objects.

# Extracting communication with the backend into a separate module
App component is bloated after adding code for communicating with backend server

Single Responsibility Principle, extract into separate modules.

`export default` needs to return an object, can be an anonymous object with the module level objects.

# Cleaner syntax for defining object literals
Compact object literal syntax when key is equal to variable name (only usable when defining object properties using variables).

ES6 Object Initializer Property Definitions

```js
const name = 'Leevi'
const age = 0
const person = { name, age }
```

# Promises and errors
If a resource that doesn't exist or is deleted is worked with there will be an error.
status code 404 Not Found

Rejected promise 
- Provide `then` with second callback function called upon rejection
- Or use the `catch` method after `then`

Promise chain
`catch` is typically used deeper in the promise chain
- `catch` method defines a handler at the end of the promise chain, and is called **once any promise in the chain throws an error and the promise becomes rejected**

Alert and get rid of the offending resource.