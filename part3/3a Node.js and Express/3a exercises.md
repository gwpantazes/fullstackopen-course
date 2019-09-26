# 3a Exercises
https://fullstackopen.com/en/part3/node_js_and_express#exercises

- Use a new dedicated git repository, otherwise there'll be problems in exercise 3.10.

# 3.1: Phonebook backend step1
- [x] Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons
    - [x] The application must be started with the command npm start.
    - [x] The application must also offer an npm run watch command that will run the application and restart the server whenever changes are made and saved to a file in the source code.

# 3.2: Phonebook backend step2
- [x] Implement a page at the address http://localhost:3001/info. The page has to show 
    - [x] the time that the request was received 
    - [x] how many entries are in the phonebook at the time of processing the request

# 3.3: Phonebook backend step3
- [x] Implement the functionality for displaying the information for a single phonebook entry. 
    - [x] The url for getting the data for a person with the id 5 should be http://localhost:3001/api/persons/5
- [x] If an entry for the given id is not found, the server has to respond with the appropriate status code.

# 3.4: Phonebook backend step4
- [x] Implement functionality that makes it possible to delete a single phonebook entry by making an HTTP DELETE request to the unique URL of that phonebook entry.
    - [x] Test that your functionality works with either Postman or the Visual Studio Code REST client.

# 3.5: Phonebook backend step5
- [x] Expand the backend so that new phonebook entries can be added by making HTTP POST requests to the address http://localhost:3001/api/persons.
- [x] Generate a new id for the phonebook entry with the Math.random function. Use a big enough range for your random values so that the likelihood of creating duplicate id's is small.

# 3.6: Phonebook backend step6
- [x] Implement error handling for creating new entries. The request is not allowed to succeed, if:
    - [x] The name or number is missing
    - [x] The name already exists in the phonebook
- [x] Respond to requests like these with the appropriate status code
- [x] also send back information that explains the reason for the error

# 3.7: Phonebook backend step7
- [x] Add the morgan middleware to your application for logging.
    - [x] Configure it to log messages to your console based on the tiny configuration.

# 3.8*: Phonebook backend step8
- [x] Configure morgan so that it also shows the data sent in HTTP POST requests
- possible solutions utilizes these two techniques:
    - [x] creating new tokens
    - [x] JSON.stringify