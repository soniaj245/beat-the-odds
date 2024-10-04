import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const GameInformation = () => {
  return (
    <div className='accordion'>
      <Accordion className="accordion-panel">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          How to Play
        </AccordionSummary>
        <AccordionDetails className='panel-content'>
          1. Enter the details for the game in the form to the right and press submit. For more information about game data and data options, open the 'Game Data Options' panel below.
        </AccordionDetails>
        <AccordionDetails className='panel-content'>
          2. Once you press submit, you should see a number of squares with the letters or numbers inside. These are your dice.
        </AccordionDetails>
        <AccordionDetails className='panel-content'>
          3. Choose whichever dice you want to save by clicking on the corresponding square. At any point, you can unselect a die.
        </AccordionDetails>
        <AccordionDetails className='panel-content'>
          4. Click on the 'Randomize' button after you've made your choices to get new values in any unselected squares.
        </AccordionDetails>
        <AccordionDetails className='panel-content'>
          5. The goal is to collect whichever values are needed to create a valid word in as few rolls as possible. The values do not need to be in the same order as the word you are looking for and it is likely that it will be impossible to create a word in the correct order. If you have completed a word, press 'All Done' to see your stats.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}