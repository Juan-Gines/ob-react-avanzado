import React, { useState } from 'react';

const InputNuevaNota = ({ addNuevaNota }) => {
	const [nuevaNota, setNuevaNota] = useState('');
	const clearInput = (e) => {
		e.target.value = '';
		setNuevaNota(null);
	};
	return (
		<div className='input-nueva-nota'>
			<input
				type='text'
				placeholder='Introduce una nueva nota'
				value={nuevaNota}
				onKeyDown={(e) => e.key === 'Enter' && addNuevaNota(nuevaNota) && clearInput(e)}
				onChange={(e) => setNuevaNota(e.target.value)}
			/>
			<button onClick={(e) => addNuevaNota(nuevaNota) && clearInput(e)}>Añadir</button>
		</div>
	);
};

export default InputNuevaNota;
