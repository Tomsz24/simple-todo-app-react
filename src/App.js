import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section from './components/Section';

const getInitialTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
}

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(getInitialTasks);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  }


  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }


  const toggleTaskDone = id => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }

      return task;
    }))
  }


  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  }


  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ])
  }

  return (
    <React.Fragment>
      <h1 className="title">Lista zadań</h1>
      <Header addNewTask={addNewTask} />
      <Section tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} removeTask={removeTasks} toggleTaskDone={toggleTaskDone} setAllDone={setAllDone} />
    </React.Fragment>
  );
}

export default App;
