# [Part 2c Getting data from server](https://fullstackopen.com/en/part2/getting_data_from_server)

- Frontend, client-side, browser functionality
- Backend server-side 

- [JSON Server](https://github.com/typicode/json-server) to mock JSON server
    - `db.json` in project root
    - install with `npm install -g json-server`
        - > global installation isn't necessary because we can run json-server with `npx` (? what?)
    - run using npx `npx json-server --port 3001 --watch db.json`
    - Use port 3001 since create-react-app does port 3000 by default ("reserves")
    - Useful for development without having to program any of it

- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)

# The browser as a runtime environment
- Javascript engines / runtime environments follow the asynchronous model
- Requires all IO operations (with some exceptions) to be non-blocking.
    - Code execution continues immediate after calling an IO function, without waiting for it to return
    - Javascript engine calls registered event handlers on certain events
- Currently all JS engines are single threaded, no parallel code
    - Makes it necessary to have non-blocking IO
    - Otherwise browser would freeze when fetching data from the server
    - Code that takes time will slow EVERYTHING down
- "responsive": able to continuously react to user operations with sufficient speed
- event loop: stack, event loop, callback queue, and browser APIs vs JS Runtime environment

- web workers can run parallelized code
- a single browser window is a single thread (with its own JS runtime)

# npm
- We could use promise-based `fetch`
- We'll be using [axios library](https://github.com/axios/axios)
    - Like fetch, but more pleasant
    - Also get used to adding external libraries, npm packages
- Practically all JS projects use node package manager npm
    - create-react-app follows same format
    - `package.json`
        - scripts section lets you write small macros!

# Axios and promises
- promise is an object representing the eventual completion or failure of an asynchronous operation
    - promise = async operation
    1. pending - no values available yet
    2. fullfilled (resolved) - operation completed and final value is available, generally successful
    3. rejected - error prevented the final value from being determined, generally a failed operation
- `then` registers an event handler to the promise completion
- server tells axios library `application/json; charset=utf-8` so it knows how to parse the data
- response from the promise's `then` callback has data, status code, and headers
- style: chain promise into then. one call on each line

# [Effect-hooks](https://fullstackopen.com/en/part2/getting_data_from_server#effect-hooks)
state hooks and effect hooks
- state hooks let us use react state
- effect hooks let us run callbacks for side effects
    - data fetching
    - setting up a subscription
    - manually changing the DOM in React components
- effect runs immediately after rendering

By default `useEffect` runs after every render. Second argument array of values can change this behavior.
- `[]`: only run the effect on the first render of the component
- This argument array should include *all values from the component scope that change over time and that are used by the effect*. Otherwise, your effect code will reference stale values from previous renders due to closure scope.

# The development runtime environment
- dev-server stiches Javascript files into one file