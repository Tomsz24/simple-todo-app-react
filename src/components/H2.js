import React from 'react';
import { Button, Subtitle } from '../styledComponents/StyledH2.js';


const H2 = ({ tasks, toggleHideDone, hideDone, setAllDone }) => {
  return (
    tasks.length > 0 && (
      <Subtitle className="section__subtitle">
        Lista zadań
        <Button onClick={toggleHideDone}> {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>

        <Button disabled={tasks.every(({ done }) => done)} onClick={setAllDone} >Ukończ wszystkie</Button>
      </Subtitle>
    ));
}

export default H2;