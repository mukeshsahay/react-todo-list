import React, { useState } from 'react';
import './App.css';
import AddNewTask from './components/AddNewTask';
import TaskListContainer from './components/TaskListContainer';
import AppHeader from './components/AppHeader';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  const onAddNewTask = (taskInfo) => {
    setTaskList( arr => [...arr, taskInfo]);
  };

  const onDeleteTask = (index) => {
    var dummyTaskList = [...taskList];
    dummyTaskList.splice(index, 1);
    setTaskList(dummyTaskList);
  };

  return (
    <div className="App">
      <AppHeader />
      <AddNewTask onAddNewTask={onAddNewTask}/>
      <TaskListContainer taskList={taskList} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
