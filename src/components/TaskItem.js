import React from 'react';
import '../App.css';

export default function TaskItem({index, value, onDeleteTask}) {
  const onDeleteClick = () => {
    onDeleteTask(index);
  };

  return (
    <div className='TaskItem'>
      <div className='TaskItemInput' >
        <input type="checkbox" />
        <label className='TaskItemLabel'>{value}</label>
      </div>
      <button className='TaskItemButton' onClick={onDeleteClick}>Delete Task</button>
    </div>
  )
}