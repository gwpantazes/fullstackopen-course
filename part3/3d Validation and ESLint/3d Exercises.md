# 3d Exercises

# 3.19: Phonebook database, step7
- [x] Add validation to your application, that will make sure that you can only add one number for a person in the phonebook. 
    - Our current frontend won't allow users to try and create duplicates, but we can attempt to create them directly with Postman or the VS Code REST client.
- [x] Mongoose does not offer a built-in validator for this purpose. Install the mongoose-unique-validator package with npm and use it instead.
- [x] If an HTTP POST request tries to add a name that is already in the phonebook, the server must respond with an appropriate status code and error message.

# 3.20*: Phonebook database, step8
- [x] Expand the validation so that the name stored in the database has to be at least three characters long, 
- [x] and the phone number must have at least 8 digits.

- [x] Expand the frontend so that it displays some form of error message when a validation error occurs. Error handling can be implemented by adding a catch block as shown below:
```js
personService
    .create({ ... })
    .then(createdPerson => {
      // ...
    })
    .catch(error => {
      // this is the way to access the error message
      console.log(error.response.data)
    })
```
You can display the default error message returned by Mongoose, even though they are not as readable as they could be.

# 3.21 Deploying the database backend to production
- [x] Generate a new "full stack" version of the application by creating a new production build of the frontend, and copy it to the backend repository. 
- [x] Verify that everything works locally by using the entire application from the address https://localhost:3001.

- [x] Push the latest version to Heroku 
- [x] and verify that everything works there as well.

# 3.22: Lint configuration
- [x] Add ESlint to your application.