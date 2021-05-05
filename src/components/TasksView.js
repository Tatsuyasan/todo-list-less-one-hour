import React from 'react';

const TasksView = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <div className='tasks-view'>
      {tasks.map((task) => {
        return (
          <div key={task.id} className='task-line'>
            <p>{task.description}</p>
            <button
              onClick={() => {
                deleteTask(task);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TasksView;
