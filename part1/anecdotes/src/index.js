import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const {onClick, text} = props
  return(
    <button onClick={onClick}> {text} </button>

  )
}
const maxArray = v => {
  let maxVotes = 0;
  let maxVotesIndex = 0;
  for (let i = 0; i < v.length; i++) {
    if (v[i] > maxVotes) {
      maxVotes = v[i];
      maxVotesIndex = i;
    }
  }
  return [maxVotes, maxVotesIndex];
};

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const newAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const newVote = () => {
      const tempVotes = [...votes]
      tempVotes[selected] += 1
      setVotes(tempVotes)
  }

  const [m, mI] = maxArray(votes)

  return (
    <div>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p> has {votes[selected]} votes </p>
    <Button onClick={newAnecdote} text={'next anecdote'}/>
    <Button onClick={newVote} text={'vote'}/>
    <h1>Anecdote With Most Votes</h1>
    <p>{props.anecdotes[mI]}</p>
    <p>has {m} votes</p>
    </div>
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
