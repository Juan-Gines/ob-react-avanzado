import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es',
};

const Settings = ({ toggleDark }) => {
    const [config, setConfig] = useLocalStorage('config', defaultConfig);

    /**
     * Función para cambiar light <- -> dark
     */
    const toggleSettings = () => {
        setConfig((oldConfig) => (
            {
                ...oldConfig,
                theme: oldConfig.theme === 'light' ? 'dark' : 'light',
            }
        ));
        toggleDark();
    };

    return (
      <div>
        <h1>APP SETTINGS</h1>
        <p>
          {' '}
          Actual Config:
          {' '}
          {config.theme}
        </p>
        <button className="btn" type="button" onClick={toggleSettings}>
          Toggle DarkMode
        </button>
      </div>
    );
};

export default Settings;
