import './styles.css';
import { useState } from 'react';

function Square({ value }) {

  function handleClick() {
    console.log('clicked!' + {value}.value);
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Row() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
    </>
  );
}

export default function Board() {
  return (
    <>
    <div className="board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
    </div>
    <div className="board-row">
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
      

    </>
  );
}