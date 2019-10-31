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

https://fullstackopen.com/en/part3/saving_data_to_mongo_db#exercises

# 3.13: Phonebook database, step1
- [x] Change the fetching of all phonebook entries so that the data is fetched from the database.
- [x] Verify that the frontend works after the changes have been made.
- [x] Write all Mongoose-specific code into its own module, just like we did in the chapter Database configuration into its own module

# 3.14: Phonebook database, step2
- [x] Change the backend so that new numbers are saved to the database. 
- [x] Verify that your frontend still works after the changes.
- [x] At this point, you can choose to simply allow users to create all phonebook entries. At this stage, the phonebook can have multiple entries for a person with the same name.