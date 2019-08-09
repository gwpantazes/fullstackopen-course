import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const GiveFeedbackHeader = () => <h1>Give Feedback</h1>

const Button = ({ name, feedbackHandler }) => <button onClick={feedbackHandler}>{name}</button>

const GiveFeedback = ({ feedbackHandlers }) => {
    return (
        <div>
            <GiveFeedbackHeader />
            <div>
                <Button name="good" feedbackHandler={feedbackHandlers.good} />
                <Button name="neutral" feedbackHandler={feedbackHandlers.neutral} />
                <Button name="bad" feedbackHandler={feedbackHandlers.bad} />
            </div>
        </div>
    )
}

const StatisticsHeader = () => <h1>Statistics</h1>

const Statistic = ({ name, value }) => <tr><td>{name}</td><td>{value}</td></tr>

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

    if (total === 0) {
        return (
            <div>
                <StatisticsHeader />
                <div>No feedback given</div>
            </div>
        )
    }

    return (
        <div>
            <StatisticsHeader />
            <table><tbody>
                <Statistic name="good" value={statistics.good} />
                <Statistic name="neutral" value={statistics.neutral} />
                <Statistic name="bad" value={statistics.bad} />
                <Statistic name="all" value={total} />
                <Statistic name="average" value={feedbackScoreAverage(statistics)} />
                <Statistic name="percent positive" value={percentPositive + "%"} />
            </tbody></table>
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
