import React, { useState } from "react";
import { CreateDiceGame } from "./CreateDiceGame";

export const GameInputForm = (props) => {
  const [numDie, setNumDie] = useState(5);
  const [numDiceSides, setNumDiceSides] = useState(8);
  const [diceSideValues, setDiceSideValues] = useState('ABCDEP AEHOXU AISOLR ABCDEF ABCSCC');
  const [validWords, setValidWords] = useState('PARSE PAUSE PHASE POISE PROSE PULSE PURSE PEACE');
  const [viewGame, setViewGame] = useState(false);
  const [formView, setFormView] = useState(true)

  const onSubmit = (event) => {
    event.preventDefault();

    if (!numDie || !numDiceSides || !diceSideValues || !validWords) {
      alert('Please make sure no field is empty.');
      return;
    }

    if (checkIfImpossible()) {
      alert('Sorry! This set of options is impossible. Please enter a new set.');
      return;
    }

    setDiceSideValues(diceSideValues.split(" "));
    setValidWords(validWords.split(" "));
    setViewGame(true)
    setFormView(false);

  };

  const checkIfImpossible = () => {
    //Need to make sure that our options
    //(1) contain the values in the array
    //(2) can make a word with the values on individual die (i.e., if a dice contains only Ps)

    //(1) Combine the 

    return false;
  }

  return (
    <div className='game-data-form'>
      {formView &&
        <div>
          <h1>Enter Your Game Data</h1>
          <p>Not sure what to enter? Open the 'Game Data Options' panel on the left.</p>
          <form onSubmit={onSubmit} id='inputt'>
            <input
              type='text'
              value={numDie}
              onChange={(e) => setNumDie(e.target.value)}
              placeholder="Number of Die"
              className="numDie"
            />
            <input
              type='text'
              value={numDiceSides}
              onChange={(e) => setNumDiceSides(e.target.value)}
              placeholder="Number of Sides"
              className="numSides"
            />
            <textarea
              type='text'
              value={diceSideValues}
              onChange={(e) => setDiceSideValues(e.target.value)}
              placeholder="Please add dice sides here"
              rows={8}
            />
            <textarea
              type='text'
              value={validWords}
              onChange={(e) => setValidWords(e.target.value)}
              placeholder="Please add valid words here"
              rows={8}
            />
            <button type='submit'>Create game</button>
          </form>
        </div>
      }
      {viewGame &&
        <div>
          <CreateDiceGame numDie={Number(numDie)} diceSides={diceSideValues} validWords={validWords} />
        </div>
      }
    </div>
  )
}