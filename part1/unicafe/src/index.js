import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GiveFeedbackHeader = () => <h1>Give Feedback</h1>

const FeedbackButton = ({ name, feedbackHandler }) => <button onClick={feedbackHandler}>{name}</button>

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

const TotalDisplay = ({ total }) => <div>all {total}</div>

const AverageDisplay = ({ average }) => <div>average {average}</div>

const PercentPositiveDisplay = ({ percentPositive }) => <div>percent positive {percentPositive}%</div>

const Statistics = ({ statistics }) => {

    const total = statistics.good + statistics.neutral + statistics.bad

    const avg = (...numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length

    const feedbackScoreAverage = ({ good, neutral, bad }) => {
        if (!(good + neutral + bad)) {
            return 0;
        }

        const feedbackValues = [].concat(
            Array.apply(null, Array(good)).map(() => 1),
            Array.apply(null, Array(neutral)).map(() => 0),
            Array.apply(null, Array(bad)).map(() => -1)
        )

        return avg(...feedbackValues)
    }

    const percentPositive = total ? 100 * (statistics.good / total) : 0

    return (
        <div>
            <StatisticsHeader />

            <StatisticsDisplay name="good" value={statistics.good} />
            <StatisticsDisplay name="neutral" value={statistics.neutral} />
            <StatisticsDisplay name="bad" value={statistics.bad} />

            <TotalDisplay total={total} />
            <AverageDisplay average={feedbackScoreAverage(statistics)} />
            <PercentPositiveDisplay percentPositive={percentPositive} />
        </div>
    )
}

const App = () => {
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
            <GiveFeedback feedbackHandlers={feedbackIncrementers} />
            <Statistics statistics={feedbackStatistics} />
        </>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
