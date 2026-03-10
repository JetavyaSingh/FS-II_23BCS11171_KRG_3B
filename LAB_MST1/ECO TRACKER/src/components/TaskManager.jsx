import React, { useState } from 'react';
import useForm from '../hooks/useForm';

const TaskManager = () => {
    const { values, handleChange, resetForm } = useForm({
        title: '',
        priority: 'Low',
    });

    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.title.trim()) return;

        setTasks([...tasks, { id: Date.now(), ...values }]);
        resetForm();
    };

    return (
        <div className="task-manager">
            <h2>Task Tracker</h2>
            <form onSubmit={handleSubmit} className="task-form">
                <div className="form-group">
                    <label htmlFor="title">Task Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        placeholder="Enter task title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="priority">Priority:</label>
                    <select
                        id="priority"
                        name="priority"
                        value={values.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <button type="submit">Add Task</button>
            </form>

            <div className="task-list">
                <h3>Tasks</h3>
                {tasks.length === 0 ? (
                    <p>No tasks added yet.</p>
                ) : (
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id} className={`task-item priority-${task.priority.toLowerCase()}`}>
                                <span className="task-title">{task.title}</span>
                                <span className="task-priority">| {task.priority}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TaskManager;
