import React from 'react'
import '../App.css';
import TaskItem from './TaskItem'

export default function TaskListContainer({ taskList, onDeleteTask }) {
  const taskListJsx = [];

  const onDeleteTaskItem = (index) => {
    onDeleteTask(index);
  };

  taskList.forEach((value, index) => {
    taskListJsx.push(
      <div key={index}>
        <TaskItem index={index} value={value} onDeleteTask={onDeleteTaskItem} />
        <hr />
      </div>,
    );
  });

  return (
    <div className='TaskListContainer'>
      <h1>Your task list</h1>
      {taskList.length === 0 && <div>You don't have any task in your to-do list.</div>}
      <div>{taskListJsx}</div>
    </div>
  )
}