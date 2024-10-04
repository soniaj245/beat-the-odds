import React, { useState } from "react";
import { GameResults } from "./GameResults";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const CreateDiceGame = (props) => {
  const diceSides = props.diceSides;
  const validWords = props.validWords;
  const [diceSideValue, setDiceSideValue] = useState(Array.from({ length: diceSides.length }).map((e, i) => diceSides[i][Math.floor(Math.random() * 6)]));
  const [diceDisabled, setDiceDisabled] = useState(Array.from({ length: diceSides.length }).map(() => false));
  const [rollCount, setRollCount] = useState(0);
  const [viewGame, setViewGame] = useState(true);
  const [viewResults, setViewResults] = useState(false);

  const goToResults = () => {
    setViewGame(false);
    setViewResults(true);
  }
  const enableAndDisableDie = (index) => {
    const updateDisabledDie = diceDisabled.map((dice, i) => {
      if (i === index) {
        return !diceDisabled[i];
      } else {
        return dice;
      }
    })

    setDiceDisabled(updateDisabledDie);
  }

  const randomizeDiceSides = () => {
    setRollCount(rollCount + 1);
    const newDiceValues = diceSideValue.map((value, i) => {
      if (!diceDisabled[i]) {
        return diceSides[i][Math.floor(Math.random() * diceSides.length)]
      } else {
        return value
      }
    })

    setDiceSideValue(newDiceValues);
  }

  return (
    <div className="dice-game">
      {viewGame &&
        <div>
          <h1>Let's Play</h1>
          <Accordion className="accordion-panel">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
            >
              Dice Details
            </AccordionSummary>
            <AccordionDetails className='panel-content'>
              {diceSides.map((dice, index) => {
                return (
                  <li>Dice {index + 1}: {dice}</li>
                )
              })}
            </AccordionDetails>
          </Accordion>
          <ul className="dice-grid">
            {diceSides.map((dice, index) => {
              return (
                <input
                  value={diceSideValue[index]}
                  onChange={!diceDisabled && randomizeDiceSides}
                  onSelect={() => enableAndDisableDie(index)}
                  style={{backgroundColor: diceDisabled[index] && '#A191D0', color: diceDisabled[index] && 'black'}}
                />
              )
            })}
          </ul>
          <p>Roll Count: <b>{rollCount}</b></p>
          <button onClick={randomizeDiceSides}>Randomize</button>
          <button onClick={goToResults}>All Done</button>
        </div>
      }
      {viewResults &&
        <GameResults finalValueSet={diceSideValue} validWords={validWords} rollCount={rollCount} diceSides={diceSides}/>
      }
    </div>
  )
}

//ABCDEP AEHOXU AISOLR ABCDEF ABCSCC
//PARSE PAUSE PHASE POISE PROSE PULSE PURSE PEACE