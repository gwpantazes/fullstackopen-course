# [2a Exercises](https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises)

# 2.1: course contents step6
- Finish code for rendering course contents from exercises 1.1-1.5
    - Ensure that the console shows no errors!
    - You can start with the code from the model answers.
        
        - [x] Note that if you copy a project from one place to another, you might have to destroy the node_modules directory and install the dependencies again with the command npm install before you can start the application. It might not be good to copy a project or to put the node_modules directory into the version control per se.
        - [x] Use the given updated App component
        

- [x] Define a component responsible for formatting a single course called Course.
    - [x] Course component contains the components defined in the previous part, which render the course name and its parts.
    - [x] Don't need the sum of the exercises yet.
    
- [x] Application must work for N parts a course has. Make sure application works if you add or remove parts of a course.

# 2.2: Course contents step7
- [x] Show the sum of the exercises of the course.

# 2.3*: Course contents step8
- [x] If you haven't done so already, calculate the sum of exercises with the array method reduce.
- [x] Install VS Code plugin to swap between arrow function short form and long form

# 2.4: Course contents step9
- [x] Extend application to allow for arbitrary number of courses

# 2.5: separate module
- [x] Declare the Course component as a separate module, which is imported by the App component. 
- ~~You can include all subcomponents of the course into the same module.~~ I split them all up.
