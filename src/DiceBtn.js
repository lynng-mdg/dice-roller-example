import React from 'react';


const DiceBtn = ({ onClick, children }) => {
  return <button onClick={onClick}>{ children }</button>
}

export default DiceBtn;
