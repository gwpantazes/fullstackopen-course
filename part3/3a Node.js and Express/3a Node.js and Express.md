# Part 3a Node.js and Express
https://fullstackopen.com/en/part3/node_js_and_express

Part 3 focuses on backend.

NodeJS - a Javascript runtime based on Google's Chrome V8 Javascript engine.
- Browsers don't support newest features of Javascript.
- JS running in browser must be transpiled e.g. with babel
- Recent node versions have most recent JS features

Back to working on the notes application.

NPM, - Node Package Manager, manages JS packages.
- `npm init` -> `package.json`
    
- Entry point of application is `index.js`. 
- Run the program directly with `node` or via `npm` scripts like `npm start`
- Customary for NPM projects to execute tasks via npm scripts

# Simple web server
`http` packae can start a simple web server. (Node's built-in web server module)
- Be mindful of the port the application is running on. Ports can't be shared.
```js
const http = require('http')
import http from 'http'
```

ES6 modules (import/export) vs CommonJS modules (const = require)
- For most things, the ES6 modules vs the CommonJS modules behave the same.

Server gets "bound" (bind) to port.

- In this course, at least
- Purpose of backend server is to offer raw JSON data to the frontend.

- application/json value in the Content-Type header
- JSON.stringify(object) method

We get a CORS error if we don't do anything else (different ports).

# Express
Express.js is more pleasing than working with the more cumbersome built-in http web server.

- transitive dependencies are kept in `node_modules`
- Semantic versioning
    - Caret in front of package.json version: the version installed will be ***at least*** 4.17.1
    - If major number of a dependency doesn't change, the newer versions should be backwards compatible
- `npm update` and `npm install`

# Web and express
- Express describes routes
- Request has all the request info, response offers an API on how to send back the response
- Response
    - send method infers type
    - json responds with JSON - application/json

Node has `JSON.stringify`
Express has `response.json()`
JSON is a string. Not a JS object.

# nodemon
Have to restart server when making changes. (CTRL+C and restarting with `npm start`)
- even though the backend server restarts automatically, the browser still has to be manually refreshed (no hot reload)

# REST
RESTful HTTP API, like json-server

REST = Representational State Transfer
- Introduced in 2000 in Roy Fieldings dissertation.
- Architectural style for building scalable web applications

- Singular things are called "resources". Every resource has an associated URL, the resource's unique address
- Groups of homogeneous things are called "collections"

- We actually haven't achieved full REST, just CRUD / resource-oriented architecture
    - REST is only achieved if we have hypermedia control passed with responses

Truthy/Falsy values: undefined is falsy, objects are truthy

We don't need to do anything but send the status code when programming a REST API, unlike for a website.

# [Deleting Resources](https://fullstackopen.com/en/part3/node_js_and_express#deleting-resources)

- Return HTTP Status 204 No Content (Successful, but returning no entity-body)
https://www.restapitutorial.com/httpstatuscodes.html

# Postman
Testing API operations
- Gets can be made from the browser, but others... no
- `curl` command line tool can make API requests
- Postman

# Visual Studio Code REST client
Visual Studio REST client - https://marketplace.visualstudio.com/items?itemName=humao.rest-client
Keep `.rest` file requests in a folder called `requests`
- Docs: https://github.com/Huachao/vscode-restclient/blob/master/README.md#usage

# Receiving data
- body-parse library https://github.com/expressjs/body-parser
- Without a body-parse, POST body would be undefined. So register the body parser for use with express
- middleware, intercepts post and parses the json body and attaches it to the response before the route event handler is called

- **Keep the terminal running the application visible at all times when you are working on the backend**

- Be careful of content-type, server won't even try to guess correct one

`request` has `get` method and `headers` property for debugging headers.
- `console.log(request.headers)` for finding Content-Type header issues

- Map the body JSON onto a well-defined object so we don't accept objects with arbitrary or empty properties
    - If content missing, 400 bad request

- Generate dates/timestamps on the server to prevent misconfigured clients