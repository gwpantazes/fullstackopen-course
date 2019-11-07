# 3c Saving data to MongoDB
https://fullstackopen.com/en/part3/saving_data_to_mongo_db

Main topic: Persisting data in a database.

# Debugging Node Applications

- More difficult.
- `console.log()` always worth it.

# Visual Studio Code Debugger
- Runs on a port, so watch out for port collisions.
- Set a breakpoint

# Chrome dev tools
`node --inspect index.js` will make application available to Chrome developer console.
- Green icon in dev tools
- Sources pane allows you to set breakpoints

## Question everything
Soon there will be a frontend/backend/database -> many potential bugs.
Be systematic, eliminate possibilities with console.log and debuggers.

# MongoDB

Database to save indefinitely.
Relational database vs document database (MongoDB).
Differences:
- How data is organized
- Query language supported

Document databases are usually categorized as NoSQL.

Databases have collections.
Collections are analogous to tables, and they hold documents.
Documents are BSON (Binary representation of JSON), and contains more data types.
- Documents are composed of field-and-value pairs.
- Field values can be any BSON data types: other documents, arrays, arrays of documents

Fields
- Field names are strings
- `_id` is reserved for the primary key: must be unique in collectin, immutable, and can be any type other than array
- Field names cannot contain the `null` character
- Can't use `$` in top level field names.
- Recommended: Don't use `$` or `.` in field names.
- BSON documents can have more than one field with the same name, but MongoDB can't. 

Dot Notation
- Dot notation accesses array elements and fields of embedded document
- Array: "apples.2" gets the 3rd apple (0-based, yay)
- Documents: "contact.phone.number"

Documents
- Size limit 16 megabytes for BSON.
    - See GridFS API for biggr documents or files (`mongofiles`)
- Document order is preserved, except `_id` always comes first
    - Renaming fields may reorder them
- `_id` field is primary key
    - MongoDB automatically generates id if not supplied (ObjectId)
    - ObectId is a good default, but there are alternatives
        - A natural unique identifier, if available. Saves space and avoids additional index.
        - Generate an auto-incrementing number
        - Generate a UUID in application code. Store UUID as value in BSON BinData type
            - Index keys that are of the BinData type are more efficiently stored in the index if:
                - the binary subtype value is in the range of 0-7 or 128-135, and
                - the length of the byte array is: 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, or 32.
    - Use your driver's BSON UUID facility to generate UUIDs. Be careful of driver implementations of UUID serialization and deserialization / compatbility.
    - NOTE: most of the time the mongo client will generate the objectId before sending the operation to MongoDB, but `mongod` can add the field too.

Documents are also used to: query filters, update specifications documents, and index specification documents

We can use https://www.mongodb.com/cloud/atlas for a cloud mongo provider.

Use mongoose library which has a higher level API than the mongo node.js client.

Database is the URL endpoint. Mongo automatically creates database if it doesn't already exist.

# Schema
Schema and model of the database object.
Schema defines shape, , model is how you actually access and create database objects.
MongoDB is schemless; Mongoose adds schema at the application level.

# Creating and saving objects
Models are "constructor functions"
note.save is a property/function that saves that document (instance of the model) to the database

# Fetching objects from the database
The model can find objects from the database.

# Backend connected to a database
Schema override toJSON which gets called automatically upon JSON stringify, but we also should explicitly call it when returning notes from API...? What?

# Database configuration into its own module
https://fullstackopen.com/en/part3/saving_data_to_mongo_db#database-configuration-into-its-own-module

dotenv npm library
gitignore the env right away
import dotenv before using the env variables

# Verifying frontend and backend integration
When you change the backend,
- test the backend with Postman
- test the frontend to see if still works
    - It's _highly inefficient_ to only test the application through the frontend

Notes app - https://github.com/fullstackopen-2019/part3-notes-backend/tree/part3-3

# Error Handling
https://fullstackopen.com/en/part3/saving_data_to_mongo_db#error-handling

Without error handling, operations like finding nonexistent ID will hang.
Handle promise rejections with catch. Log errors.

# Moving error handling into middleware
Middleware might be the best place to deal with errors, so that it can send it to Sentry or other logging services.

> The error that is passed forwards is given to the next function as a parameter. If next was called without a parameter, then the execution would simply move onto the next route or middleware. If the next function is called with a parameter, then the execution will continue to the error handler middleware.

https://expressjs.com/en/guide/error-handling.html
`next()` either goes on to the next route or middleware, or to an error handler if it was given an object as a paramater. 
You can respond from within the error handler.
Remember to pass the error along to the default Express error handler.

# The order of middleware loading
Execution of middleware is same order as loaded in using `app.use` function.
Be careful when defining middleware.

Correct order is error handlers coming AFTER routes. Body parse should come very early, because logger and POST route rely on it.
```js
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(logger)

app.post('/api/notes', (request, response) => {
  const body = request.body
  // ...
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  // ...
}

// handler of requests with result to errors
app.use(errorHandler)
```

# Other operations
Deleting and updating a resource / MongoDB document.

`findByIdAndRemove` and `findByIdAndUpdate` mongoose model method.
- `findByIdAndUpdate` takes a regular JS object, not a new Model object
- `findByIdAndUpdate` `new: true` option gives the updated document to the event handler. By default, event handler will get the original.
- Have to set mongoose to use the new MongoDB native method rather than the deprecated one