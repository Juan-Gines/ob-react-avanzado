import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/actions';
import TodoForm from '../pure/todoForm';

const mapStateToProps = (state) => ({
	//Not necesary
});

const mapDispatchToProps = (dispatch) => {
	return {
		submit: (text) => {
			dispatch(addTodo(text));
		},
	};
};

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
