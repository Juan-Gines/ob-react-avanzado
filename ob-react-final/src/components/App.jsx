import React, { useEffect } from 'react';
import TaskList from './lists/TaskList';
import Settings from './settings/Settings';

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
    const [dark, setDark] = React.useState(false);

    /**
     * Documentación del useEffect
     * Se crea una variable de estado donde se almacena en localstorage
     */
    useEffect(() => {
      const config = JSON.parse(localStorage.getItem('config'));
      setDark(config.theme);
    }, []);

    /**
     * Función para intercambiar la variable de estado light <-> dark
     * @returns
     */

    const toggleDark = () => setDark(!dark);
    return (
      <div className={`App ${dark ? 'dark' : ''} `}>
        <TaskList />
        <hr style={{ marginTop: 20, marginBottom: 20 }} />
        <Settings toggleDark={toggleDark} />
      </div>
    );
};

export default App;
