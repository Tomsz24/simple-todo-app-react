import React from 'react';
import { Item, Content, TaskDoneBtn, RemoveTaskBtn, Ul } from '../styledComponents/styledTasksList';

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
  return (
    <Ul>
      {tasks.map(task => (
        <Item
          hide={hideDone && task.done}
          key={task.id}>
          <TaskDoneBtn onClick={() => toggleTaskDone(task.id)}>{task.done ? '✔' : ''}</TaskDoneBtn>
          <Content
          >{task.done ? <s>{task.id}</s> : task.id} - {task.done ? <s>{task.content}</s> : task.content}</Content>
          <RemoveTaskBtn onClick={() => removeTask(task.id)} className="section__removeTask"><span role="img" aria-label="bin">🗑️</span></RemoveTaskBtn>
        </Item
        >
      ))}
    </Ul>
  );
}

export default TasksList;