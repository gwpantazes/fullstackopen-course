import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Content = (props) => (
    <>
        <p>{props.part1} {props.exercise1}</p>
        <p>{props.part2} {props.exercise2}</p>
        <p>{props.part3} {props.exercise}</p>
    </>
)

const Total = (props) => (
    <p>Number of exercises {props.total}</p>
)

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <>
            <Header course={course} />
            <Content
                part1={part1} exercise1={exercises1}
                part2={part2} exercise2={exercises2}
                part3={part3} exercise3={exercises3}
            />

            <Total total={exercises1 + exercises2 + exercises3}></Total>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
