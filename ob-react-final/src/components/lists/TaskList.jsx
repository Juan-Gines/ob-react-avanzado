import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useList from '../../hooks/useList';

/**
 * Componente que gestiona la lista de tareas
 * @returns {React.Component}
 */

const TaskList = () => {
    const {
      value, item, editItem, isEmpty, push, remove, toggleCompleted,
    } = useList([
    ]);

    return (
      <div>
        <h1>Task List</h1>
        <div>
          <input
            value={item}
            className="input"
            onChange={(e) => editItem(e.target.value)}
            placeholder="New Task"
            type="text"
            onKeyDown={(e) => e.key === 'Enter' && push()}
          />
          <button
            type="button"
            onClick={push}
            className="btn"
          >
            Create Task
          </button>
        </div>
        {isEmpty() ? (
          <p>Task List is Empty</p>
        ) : (
          <ul>
            {value.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => toggleCompleted(index)}
                  checked={task.completed}
                />
                <span className={`tarea ${task.completed ? 'tachado' : ''}`}>{task.texto}</span>
                <FaTrashAlt onClick={() => remove(index)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default TaskList;
