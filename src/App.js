import './App.css';

import React, { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  const saveTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleViewTasks = () => {
    setShowTasks(!showTasks); // Toggle task visibility
  };

  return (
    <div className="App">
      <Header />
      <TaskForm onSave={saveTask} />
      <button onClick={handleViewTasks} className="viewButton">
        {showTasks ? 'Hide Tasks' : 'View Tasks'}
      </button>
      {showTasks && (
        <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      )}
    </div>
  );
};

export default App;
