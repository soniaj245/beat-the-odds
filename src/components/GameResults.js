import React, { useState, useEffect } from "react";

export const GameResults = (props) => {
  const rollCount = props.rollCount;
  const validWords = props.validWords;
  const finalValues = props.finalValueSet;
  const [optimalRollCount, setOptimalRollCount] = useState();
  const [gameResult, setGameResult] = useState('');
  const [gameResultSub, setGameResultSub] = useState('');

  useEffect(() => {
    setOptimalRollCount(getOptimalRolls);
    finalizeResults();
  }, []);

  const checkIfValidWord = () => {
    const sortedResult = finalValues.sort().join('');

    for(var i = 0; i < validWords.length; i++){
      const sortedValWord = validWords[i].split('').sort().join('');
      if(sortedResult === sortedValWord){
        return true;
      }
    }

    return false;
  }

  function getOptimalRolls(){
    let diceFaces = [];
    for(let i = 0; i < props.diceSides.length; i++){
      let diceSideAtIndex = [];
      for(let j = 0; j < props.diceSides[i].length; j++){
        diceSideAtIndex.push(props.diceSides[i][j]);
      }
      diceFaces.push(diceSideAtIndex);
    }
  
    let memo = {};
    let validWordsSet = new Set(validWords);
    let initialState = ['', '', '', '', ''];
    let results = expectedRolls(initialState, diceFaces, validWordsSet, memo);

    if(results == Infinity){
        return 'impossible'
    }else{
        return results;
    }
  }
  
  function expectedRolls(state, diceFaces, validWordsSet, memo){
   const stateJoin = state.join('')
    if(validWordsSet.has(stateJoin)){
      return 0;
    }
  
    if(memo[state] !== undefined){return memo[state]}
    
    let expected = Infinity;
    
    for(let i = 0; i < state.length ; i++){
        let newState = state;
        for(let newFace of diceFaces[i]){
            newState[i] = newFace;
            memo[state] = expected;
            expected = Math.min(expected, 1 + expectedRolls(newState, diceFaces, validWordsSet, memo))
        }
    }
    
    return expected;
  }

  const finalizeResults = () => {
    const isValidWord = checkIfValidWord();

    if (isValidWord && rollCount <= optimalRollCount) {
      setGameResult('You Won!');
      setGameResultSub("You were able to match the die to a valid word and you got it under the computer's optimal roll count!")
    } else if (isValidWord && rollCount > optimalRollCount) {
      setGameResult('You won! But you also lost...');
      setGameResultSub("You were able to match the die to a valid word but you did not get it under the computer's optimal roll count!")
    } else {
      setGameResult('You lost...');
      setGameResultSub("Unfortunately, you were not able to find a matching word for this.")
    }
  }

  return (
    <div>
      <h1>{gameResult}</h1>
      <p>{gameResultSub}</p>
      <h3>According to the computer...</h3>
      <p>it should've taken an average of <b>{optimalRollCount}</b> rolls to complete the puzzle.</p>
      <h3>You took...</h3>
      <p><b>{rollCount}</b> rolls to complete the puzzle.</p>
    </div>
  )
}