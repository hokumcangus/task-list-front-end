import { useState } from 'react';
import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';



const tasksData = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(tasksData);
  
  const isCompleteFunc = (id) => {
    setTaskData(taskData => taskData.map(task => {
      if (task.id === id) {
        return {...task, isComplete: task.isComplete}
      }
    }))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasksData={tasksData} />}</div>
      </main>
    </div>
  );
};

export default App;
