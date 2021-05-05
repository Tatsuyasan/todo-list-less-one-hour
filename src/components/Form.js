import React from 'react';

const Form = (props) => {
  const { addTask } = props;

  return (
    <div className='form'>
      <input
        className='description'
        type='text'
        placeholder='Enter your task..'
      />
      <button
        onClick={() => {
          const nodeDescription = document.querySelector('.description');
          const description = nodeDescription.value;
          const task = {
            id: Math.random(),
            description,
          };
          addTask(task);

          nodeDescription.value = '';
        }}
      >
        save
      </button>
    </div>
  );
};

export default Form;
