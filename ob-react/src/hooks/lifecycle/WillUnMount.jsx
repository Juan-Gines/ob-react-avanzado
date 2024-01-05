/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso del hook para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
	componentWillUnmount() {
		console.log('Comportamiento antes de que el componente desaparezca');
	}

	render() {
		return (
			<div>
				<h1>WillUnMount</h1>
			</div>
		);
	}
}

export const WillunmountHook = () => {
	useEffect(() => {
		//aquí no ponemos nada
		return () => {
			console.log('Comportamiento antes de que el componente desaparezca');
		};
	}, []); //si ponemos el array al final solo se ejecutara una vez

	return (
		<div>
			<h1>WillUnMount</h1>
		</div>
	);
};
