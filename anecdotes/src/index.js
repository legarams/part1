import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(6).fill(0));

  const copy = [...vote];
  const selectQuote = () => {
    const number = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(number);
  };

  const selectVote = () => {
    let copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };
  const calculateMost = vote => {
    let i;
    let max = vote.reduce(function(a, b) {
      return Math.max(a, b);
    });
    for (i = 0; i < vote.length; i++) {
      if (max > 0) {
        if (vote[i] === max) {
          return (
            <p>
              {anecdotes[i]}. has {max} votes
            </p>
          );
        }
      }
    }
  };
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br />
      has {vote[selected]} votes <br />
      <button onClick={selectVote}>vote</button>
      <button onClick={selectQuote}>next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      {calculateMost(copy)}
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
