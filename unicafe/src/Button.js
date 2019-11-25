import React from 'react';

const Button = ({ update, text }) => {
  return <button onClick={update}>{text}</button>;
};

export default Button;
