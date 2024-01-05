import React, { useState } from 'react';
import useList from '../../hooks/useList';

// Refactorizamos el código

const TaskList = () => {
  const tasks = useList([]);

  // const { value, setValue, push, remove, isEmpty } = useList();
  const [newTask, setNewTask] = useState('');

  /* const handleSubmit = (e) => {
      e.preventDefault();
      tasks.push(newTask);
      setNewTask('');
  }; */

  /* const handleInputChange = (e) => {
      setNewTask(e.target.value);
  }; */

  const addNewTask = () => {
    tasks.push(newTask);
    setNewTask('');
  };

  return (
    <div>
      <h1>Task List</h1>
      {/* <form onSubmit={handleSubmit}>
        <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
        <button type="submit">Create Task</button>
      </form> */}
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          type="text"
          onKeyDown={(e) => e.key === 'Enter' && addNewTask}
        />
        <button
          type="button"
          onClick={addNewTask}
        >
          Create Task
        </button>
      </div>
      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <ul>
          {tasks.value.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
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
