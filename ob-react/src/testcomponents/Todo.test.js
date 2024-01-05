import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Todo from './Todo';

afterEach(() => cleanup());

describe('Todo component is working correctly', () => {
	const todo = { id: 5, text: 'Hacer la compra', completed: true };
	render(<Todo todo={todo} />);
	const todoelement = screen.getByTestId(`todo-test-${todo.id}`);

	it('should render Todo component', () => {
		expect(todoelement).toBeInTheDocument();
	});

	it('should have right textw', () => {
		expect(todoelement).toHaveTextContent(todo.text);
	});
});

describe('Todo component should check/uncheck completed/not completed todos', () => {
	const todo = { id: 12, text: 'Hacer la compra', completed: true };
	render(<Todo todo={todo} />);
	const todoelement = screen.getByTestId(`todo-test-${todo.id}`);
	const checkbox = todoelement.querySelector('#checkbox');

	it('should be checked', () => {
		expect(checkbox).toBeChecked();
	});

	it('matches snapshot', () => {
		const snapTodo = { id: 1, text: 'Pasar los tests 2', completed: false };
		const tree = renderer.create(<Todo todo={snapTodo} />);
		expect(tree).toMatchSnapshot();
	});
});
