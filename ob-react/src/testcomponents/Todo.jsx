import React from 'react';

const Todo = ({ todo }) => {
	const { id, text, completed } = todo;
	const [checked, setChecked] = React.useState(completed);
	return (
		<div data-testid={`todo-test-${id}`}>
			<label>
				<input
					id='checkbox'
					type='checkbox'
					checked={completed}
					onChange={() => setChecked(!checked)}
				/>
				{text}
			</label>
		</div>
	);
};

export default Todo;
