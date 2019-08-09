import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ name, handler }) => <button onClick={handler}>{name}</button>

const Anecdote = ({ header, anecdote, votes}) => {
    return (
        <div>
            <h1>{header}</h1>
            {anecdote}
            <div>
                has {votes} votes
            </div>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array.apply(null, Array(anecdotes.length)).map(() => 0))

    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

    const nextAnecdoteHandler = () => {
        let next
        do {
            next = getRandomInt(anecdotes.length)
        } while (next === selected);
        setSelected(next)
    }

    const voteHandler = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    const indexOfHighestVote = votes.indexOf(Math.max(...votes))

    return (
        <>
            <Anecdote header="Anecdote of the Day" anecdote={props.anecdotes[selected]} votes={votes[selected]} />
            <div>
                <Button name="vote" handler={voteHandler} />
                <Button name="next anecdote" handler={nextAnecdoteHandler} />
            </div>

            <Anecdote header="Anecdote with most votes" anecdote={props.anecdotes[indexOfHighestVote]} votes={Math.max(...votes)} />
        </>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
