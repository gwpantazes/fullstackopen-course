# 3c Exercises

# 3.12: Command-line database
- [x] Create a cloud-based MongoDB database for the phonebook application with MongoDB Atlas.
- [x] Create a mongo.js file in the project directory, that can be used for 
    - [x] adding entries to the phonebook, 
    - [x] and for listing all of the existing entries in the phonebook.
    - [x] NB Do not include the password in the file that you commit and push to GitHub!
    - [x] Use the program by passing three command-line arguments (the first is the password), e.g.: `node mongo.js yourpassword Anna 040-1234556`
    - [x] As a result, the application will print: `added Anna number 040-1234556 to phonebook`
    - [x] The new entry to the phonebook will be saved to the database. Notice that if the name contains whitespace characters, it must be enclosed in quotes: `node mongo.js yourpassword "Arto Vihavainen" 040-1234556`
    - [x] If the password is the only parameter given to the program, meaning that it is invoked like this: `node mongo.js yourpassword`, then the program should display all of the entries in the phonebook.