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