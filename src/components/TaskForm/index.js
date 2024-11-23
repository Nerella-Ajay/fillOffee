import React, { useState } from 'react';
import './index.css';

const capitalizeTitle = (title) => {
    if (!title) return '';
    return title.charAt(0).toUpperCase() + title.slice(1);
};

const TaskForm = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('Pending');
    const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTitle = capitalizeTitle(title);
        onSave({ title: formattedTitle, description, dueDate, status });
        setTitle('');
        setDescription('');
        setDueDate('');
        setStatus('Pending');
    };
    return (
        <form onSubmit={handleSubmit}>
        <div className='inputsContainer'>
            <label htmlFor="title" className='titleLabel'>Title:</label>
            <input
            className='inputLabel'
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
        </div>
        <div className='inputsContainer'>
            <label htmlFor="description" className='titleLabel'>Description:</label>
            <textarea
            id="description"
            className='inputLabel'
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className='inputsContainer'>
            <label htmlFor="dueDate" className='titleLabel'>Due Date:</label>
            <input
            id="dueDate"
            type="date"
            className='dueDates'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            />
        </div>
        <div className='inputsContainer'>
            <label htmlFor="status" className='titleLabel'>Status:</label>
            <select
            id="status"
            className='taskStatus'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            </select>
        </div>
        <button type="submit" className='addButton'>Add Task</button>
        </form>
    );
};

export default TaskForm;
