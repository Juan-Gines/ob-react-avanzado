import React, { useState, useCallback, useMemo } from 'react';
import { Button } from './WrappedButton';

const GeneradorNombres = (props) => {
	const { names } = props;

	const [name, setName] = useState(names[0]);

	const getName = useCallback(() => {
		const index = Math.floor(Math.random() * names.length);
		setName(names[index]);
	}, [names]);

	const clearName = useCallback(() => {
		setName(null);
	}, []);
	return (
		<>
			<h1>Memoize de React con useMemo y useCallback</h1>

			{useMemo(() => {
				console.log('Renderización Nombre');
				return (
					<>
						<h2>Nombre Generado: {name ? name : 'None'}</h2>
					</>
				);
			}, [name])}

			<Button
				click={getName}
				label='Generar Nombre'
			/>
			<Button
				click={clearName}
				label='Borrar Nombre'
			/>
		</>
	);
};

export default GeneradorNombres;
