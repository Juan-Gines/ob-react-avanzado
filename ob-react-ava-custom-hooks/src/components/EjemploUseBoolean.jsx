import React, { useState, useRef, useEffect } from 'react';

// useBoolean Hook
const useBoolean = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const updateValue = useRef({
		toogle: () => setValue((oldValue) => !oldValue),
		on: () => setValue(true),
		off: () => setValue(false),
	});
	return [value, updateValue.current];
};

const EjemploUseBoolean = () => {
	const [lista, setLista] = useState([]);

	//uso de Hook useBoolean
	const [cargando, setCargando] = useBoolean(false);
	const [error, setError] = useBoolean(false);

	//Al iniciar el componente, cargamos la lista
	useEffect(() => {
		setCargando.on(); // cargando = true
		fetch('https:reqres.in/users')
			.then((res) => res.json())
			.then(setLista)
			.catch((error) => {
				alert(`Ha ocurrido un error: ${error}`);
				setError.on();
			})
			.finally(() => setCargando.off()); // cargando = off
	}, [lista, setCargando, setError]);

	return (
		<div>
			<p>{cargando ? 'Cargando...' : null}</p>
			<p>{error ? 'Ha ocurrido un error' : null}</p>
		</div>
	);
};

export default EjemploUseBoolean;
