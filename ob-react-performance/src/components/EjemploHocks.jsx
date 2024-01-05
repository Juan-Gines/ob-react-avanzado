import React, { useMemo, useCallback, useState } from 'react';

// useMemo --> React.memo() --> Funciones Creacionales de componentes que deben memoizar algo
// useCallback --> Memoizar valores listados en la dependencia. Funciones en línea

const MiComponente = () => {
	const names = ['Martín', 'Eric', 'Juan Ginés'];

	const [name, setName] = useState('');

	const getName = useCallback(() => {
		const random = Math.floor(Math.random() * (names.length - 1));
		setName(names[random]);
	}, [name]);

	const clearName = useCallback(() => {
        setName(null)
    }, []);
	return <h1>Mi componente</h1>;
};


//React.useMemo se utiliza para crear componentes que se quedaran cacheados solo renderizara si se cambia el estado
//React.useCallback para controlar estados dentro de la funcion componente