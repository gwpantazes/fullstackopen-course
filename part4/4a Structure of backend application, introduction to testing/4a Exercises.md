# 4a Exercises

Blog List Application. Users save information about interesting blogs.
For each listed blog we will save the **author**, **title**, **url**, and amount of **upvotes** from users of the application.

# 4.1 Blog list, step1
Using the starter code provided:

- [x] Turn the application into a functioning npm project.
- [x] In order to keep your development productive, configure the application to be executed with nodemon. 
- [x] You can create a new database for your application with MongoDB Atlas, or use the same database from the previous part's exercises.

- [x] Verify that it is possible to add blogs to list with Postman or the VS Code REST client 
- [x] and that the application returns the added blogs at the correct endpoint.

# 4.2 Blog list, step2
- [x] Refactor the application into separate modules as shown earlier in this part of the course material

# 4.3: helper functions and unit tests, step1
- [x] Create a collection of helper functions to assist dealing with the blog list.
    - [x] Create the functions into a file called utils/list_helper.js.
    - [x] Write your tests into an appropriately named test file under the tests directory.

- [x] list_helper.js: First define a dummy function that receives an array of blog posts as a parameter and always returns the value 1.

- [x] Verify that your test configuration works with the following test:

# 4.4: helper functions and unit tests, step2
- [x] Define a new `totalLikes` function that receives a list of blog posts as a parameter. 
  - [x] The function returns the total sum of likes in all of the blog posts.

- [x] Write appropriate tests for the function. 
  - [x] It's recommended to put the tests inside of a describe block, so that the test report output gets grouped nicely

# 4.5*: helper functions and unit tests, step3
- [x] Define a new `favoriteBlog` function that receives a list of blogs as a parameter. 
  - [x] The function finds out which blog has most likes. 
  - [x] If there are many top favorites, it is enough to return one of them.
  - [x] Return an object with the title, author, and likes.

- [x] Write the tests for this exercise inside of a new describe block. 
  - Do the same for the remaining exercises as well.

# 4.6*: helper functions and unit tests, step4
- [x] Use the Lodash Library.
- [x] Define a function called `mostBlogs` that receives an array of blogs as a parameter. 
  - [x] The function returns the author who has the largest amount of blogs. 
  - [x] The return value also contains the number of blogs the top author has:
  - [x] Return type has `author` and `blogs`
  - [x] If there are many top bloggers, then it is enough to return any one of them.

# 4.7*: helper functions and unit tests, step5
- [x] Define a function called mostLikes that receives an array of blogs as its parameter. 
  - [x] The function returns the author, whose blog posts have the largest amount of likes. 
  - [x] The return value also contains the total number of likes that the author has received:
  - [x] If there are many top bloggers, then it is enough to show any one of them.

```json
{
  author: "Edsger W. Dijkstra",
  likes: 17
}
```
