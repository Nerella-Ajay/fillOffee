import './index.css';

import React, { useState } from 'react';
import './index.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editableTask, setEditableTask] = useState({});

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditableTask(tasks[index]);
    };

    const handleInputChange = (field, value) => {
        setEditableTask({ ...editableTask, [field]: value });
    };

    const handleSaveClick = () => {
        onEdit(editingIndex, editableTask);
        setEditingIndex(null);
        setEditableTask({});
    };

    const handleCancelClick = () => {
        setEditingIndex(null);
        setEditableTask({});
    };

    return (
        <div>
        {tasks.map((task, index) => (
            <div key={index} className="task">
            {editingIndex === index ? (
            <div className="editTaskForm">
                <input
                type="text"
                value={editableTask.title || ''}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Title"
                required
                />
                <textarea
                value={editableTask.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Description"
                />
                <button onClick={handleSaveClick} className="saveButton">Save</button>
                <button onClick={handleCancelClick} className="cancelButton">Cancel</button>
            </div>
            ) : (
            <div>
                <div className="taskWithStatus">
                    <p className="addedTask">{task.title}</p>
                    <p className="addedTask">{task.status}</p>
                    <p className="addedTask">{task.dueDate}</p>
                    <p className="taskDescription">{task.description}</p>
                </div>
                <div className="statusButtons">
                    <button onClick={() => handleEditClick(index)} className="editButton">Edit</button>
                    <button onClick={() => onDelete(index)} className="deleteButton">Delete</button>
                </div>
            </div>
            )}
        </div>
        ))}
    </div>
    );
};

export default TaskList;

