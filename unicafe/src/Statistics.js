import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad, total }) => {
  let average = ((good - bad) / total).toFixed(1);
  let positive = ((good / (good + neutral + bad)) * 100).toFixed(1);
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <tr>
            <td>all </td>
            <td>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td> {average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
