import React, { useState } from 'react';
import '../App.css';

export default function AddNewTask({ onAddNewTask = () => {} }) {
  const [taskInfo, setTaskInfo] = useState('');

  const onTextChange = (event) => {
    setTaskInfo(event.target.value);
  };

  const onAddTaskClick = () => {
    if (taskInfo) {
      onAddNewTask(taskInfo);
      setTaskInfo('');
    }
  };

  return (
    <div className='AddNewTask'>
      <input className='AddNewTaskInput' value={taskInfo} onChange={onTextChange} placeholder='Enter task details and click Add Task' />
      <button className='AddNewTaskButton' onClick={onAddTaskClick}>Add Task</button>
    </div>
  )
}