import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const GiveFeedbackHeader = () => <h1>Give Feedback</h1>

const FeedbackButton = ({ name, feedbackHandler}) => <button onClick={feedbackHandler}>{name}</button>

const GiveFeedback = ({ feedbackHandlers }) => {
    return (
        <div>
            <GiveFeedbackHeader />
            <div>
                <FeedbackButton name="good" feedbackHandler={feedbackHandlers.good} />
                <FeedbackButton name="neutral" feedbackHandler={feedbackHandlers.neutral} />
                <FeedbackButton name="bad" feedbackHandler={feedbackHandlers.bad} />
            </div>
        </div>
    )
}

const StatisticsHeader = () => <h1>Statistics</h1>

const StatisticsDisplay = ({ name, value }) => <div>{name} {value}</div>

const Statistics = ({ statistics }) => {
    return (
        <div>
            <StatisticsHeader />
            <StatisticsDisplay name="good" value={statistics.good} />
            <StatisticsDisplay name="neutral" value={statistics.neutral} />
            <StatisticsDisplay name="bad" value={statistics.bad} />
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrementFeedback = (feedbackValue, feedbackSetter) => () => feedbackSetter(feedbackValue + 1)

    const feedbackIncrementers = {
        good: incrementFeedback(good, setGood),
        neutral: incrementFeedback(neutral, setNeutral),
        bad: incrementFeedback(bad, setBad)
    }

    const feedbackStatistics = {
        good: good,
        neutral: neutral,
        bad: bad
    }

    return (
        <>
            {/* TODO Name, and event handler {value, and setValue} */}
            <GiveFeedback feedbackHandlers={feedbackIncrementers} /> 
            <Statistics statistics={feedbackStatistics} />
        </>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
