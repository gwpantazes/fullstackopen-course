# 1.6: unicafe step1
Unicae collects feedback from customers.
Implement a web application for collecting customer feedback.
3 options for feedback: good, neutral, and bad

Display the total amount of collected feedback of each category.

Application only needs to work during a single browsers session.
Refreshing the page, feedback can disappear.
Can implement in a single index.js file.


# 1.7: unicafe step2
Expand application to show more statistics about the gathered feedback.
- The total number of collected feedback
- the average score (good: 1, neutral: 0, bad: -1)
- percentage of positive feedback

# 1.8: unicafe step3
- Refactor application so Statistics is extracted into its own Statistics component.
- State of the application should remain in the App root component.
- Remember: components should not be defined inside other components.

# 1.9: unicafe step4
Change your application to display statistics only once feedback has been gathered.

# 1.10: unicafe step5
Refactor: extract the following two components:
- Button for defining the buttons used for submitting feedback
- Statistic for displaying a single statistic, e.g. the average score.
To be clear: the Statistic component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics

The application's state should still be kept in the root App component.

# 1.11*: unicafe step6
Display the statistics in an HTML table.

Resolve all warnings. Typical source of an error Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist. is Chrome extension. Try going to chrome://extensions/ and try disabling them one by one and refreshing React app page; the error should eventually disappear.

# 1.12*: anecdotes step1
Expand the given application code by adding a button which displays a random anecdote.
- Generate random numbers

# 1.13*: anecdotes step2
Expand your application so that you can vote for the displayed anecdote.

If storing votes of each anecdote int an array or object in the component's state, refer to the material for correct way of updating state stored in complex data structures like objects and arrays. Make copies of arrays / objects.

Using an array may be the simpler choice in this case. Create a zero-filled array of a desired length.