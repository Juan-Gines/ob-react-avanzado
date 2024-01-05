import React, { useState } from 'react';
import useList from '../../hooks/useList';

const TaskList = () => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleSort = (e) => {
      	tasks.sortable();
    }

    const handleReverse = () => {
      	tasks.invert();
    }

    const handleClear = () => {
      	tasks.clear();
    }
    
    return (
			<div>
				<h1>Task List</h1>
				<form onSubmit={handleSubmit}>
					<input
						value={newTask}
						onChange={handleInputChange}
						placeholder='New Task'
						type='text'
					/>
					<div>
						<button type='submit'>Create Task</button>
						<button type='button' onClick={handleSort}>Sort Tasks</button>
						<button type='button' onClick={handleReverse}>Reverse Tasks</button>
						<button type='button' onClick={handleClear}>Clear Tasks</button>
					</div>
				</form>
				{tasks.isEmpty() ? (
					<p>Task List is Empty</p>
				) : (
					<ul>
						{tasks.value.map((task, index) => (
							<li key={index}>
								<input
									type='checkbox'
									onClick={() => tasks.remove(index)}
									checked={false}
								/>
								{task}
							</li>
						))}
					</ul>
				)}
			</div>
		);
};

export default TaskList;
