import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, addTotal] = useState(0);

  const updateGood = () => {
    setGood(good + 1);
    addTotal(total + 1);
  };
  const updateNeutral = () => {
    setNeutral(neutral + 1);
    addTotal(total + 1);
  };
  const updateBad = () => {
    setBad(bad + 1);
    addTotal(total + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button update={updateGood} text='good' />
      <Button update={updateNeutral} text='neutral' />
      <Button update={updateBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
