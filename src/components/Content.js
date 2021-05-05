import React, { useState } from 'react';
import Form from './Form';
import TasksView from './TasksView';

const Content = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (item) => {
    const newTab = [
      ...tasks,
      {
        id: item.id,
        description: item.description,
      },
    ];

    setTasks(newTab);
  };

  const deleteTask = (item) => {
    const result = tasks.find((taskItem) => taskItem.id === item.id);
    if (!result) return;
    const index = tasks.indexOf(result);
    tasks.splice(index, 1);
    const newTab = [...tasks];
    setTasks(newTab);
  };

  return (
    <div className='content'>
      <div className='layout'>
        <Form addTask={addTask} />
        <TasksView tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default Content;
