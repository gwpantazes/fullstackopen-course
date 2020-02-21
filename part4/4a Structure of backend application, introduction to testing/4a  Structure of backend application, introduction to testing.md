# 4a Structure of backend application, introduction to testing
https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing

# Project Structure
Project structure is now becoming a bit more defined.
- Split code into different modules.
- Use Express routers to split express application logic further.
- App.js holds the domain specific app logic of setting up the express app
- Controllers set routers up as middleware to the greater express app

Express does not have strict Structure. Ruby on Rails does.

# Testing Node Applications
https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#testing-node-applications

Automated testing is neglected.

Unit tests
- Our application logic is so simple, there is not much that makes sense to test with unit tests

Javascript has different testing libraries or **test runners**.
- [Jest](https://jestjs.io/) developed by facebook. Resembles Mocha library, previous king of JS testing.
- "ava" is a JS testing library that's gained some popularity in other circles

Jest 
- works well for testing backends
- works really well when testing React applications

Tests are only ever executed during the development of the application.
Install jest as a development dependency only.

Jest needs to be setup either in package.json or jest.config.json. Also need to tell eslint that jest globals are ok.

Tests take description and function.
Describe blocks can be a logical grouping, and can run shared setup or teardown operations for a group of tests.

