# Part 2c Exercises

# 2.11: The Phonebook Step6
Continue developing phonebook.
- [x] Store initial state of the application in a `db.json` in project root
- [x] Start json-server on port 3001 and make sure that the server returns the list of people by going to the address http://localhost:3001/persons in the browser.
- [x] Modify the application such that the initial state of the data is fetched from the server using the axios-library.
    - [x] Complete the fetching with an Effect hook.

# 2.12* Data for countries, step1
- [x] Create an application which lets the user look at data of various countries
- [x] Use the REST API at https://restcountries.eu
    - [x] The application should probably get the data from the endpoint `all`
    - [x] I'm cheating and I don't want to bother them with multiple requests so I only did it once and made a local json-server with that data
- [x] User interface
    - [x] Country to be shown by typing a search query into the search field
    - [x] If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific
    - [x] If there are fewer than ten countries, but more than one, then all countries matching the query are shown
    - [x] When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken in that country are shown

NB: it is enough that your application works for most of the countries. Some countries, like Sudan, can cause trouble, since the name of the country is part of the name of another country, South Sudan. You need not worry about these edge cases.