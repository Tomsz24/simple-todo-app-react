import React, { useState } from 'react';
import { Wrapper, Input, Button } from '../styledComponents/StyledForm';

const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const onFormSubmit = event => {
    event.preventDefault();
    if (newTask.trim() === "") {
      return;
    }
    addNewTask(newTask.trim());
    setNewTask('');
  }

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input value={newTask} type="text" placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTask(target.value)} />
      <Button>Dodaj zadanie</Button>
    </Wrapper>
  );
}

export default Form;