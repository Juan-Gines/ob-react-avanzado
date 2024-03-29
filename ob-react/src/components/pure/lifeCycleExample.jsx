/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
	constructor(props) {
		super(props);
		console.log('CONSTRUCTOR: cuando se instancia el componente');
	}

	componentWillMount() {
		//deshuso
		console.log('WillMount: Antes del comntaje del componente');
	}

	componentDidMount() {
		console.log('DidMount: Justo al del montaje del componente, antes de renderizarlo');
	}

	componentWillReceiveProps(nextProps) {
		// deshuso
		console.log('WillReceiveProps: Si va a recibir nuevas props');
	}

	shouldComponentUpdate(nextProps, nextState) {
		/**
		 * Controla si el componente debe o no actualizarse
		 */
		//return true | false
	}

	componentWillUpdate(nextProps, nextState) {
		//deshuso
		console.log('WillUpdate: Justo antes de actualizarse');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('DidUpdate: Justo después de actualizarse');
	}

	componentWillUnmount() {
		console.log('WillUnmount: Justo antes de desaparecer');
	}

	render() {
		return <div></div>;
	}
}

LifeCycleExample.propTypes = {};

export default LifeCycleExample;
