import React from 'react';
import H2 from './H2';
import TasksList from './TasksList';
import { MainSection } from '../styledComponents/styledSection';

const Section = ({ toggleHideDone, tasks, hideDone, removeTask, toggleTaskDone, setAllDone }) => {
  return (
    <MainSection className="section">
      <H2 toggleHideDone={toggleHideDone} tasks={tasks} hideDone={hideDone} setAllDone={setAllDone} />
      <TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
    </MainSection>
  );
}

export default Section;