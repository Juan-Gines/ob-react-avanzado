import { useState } from 'react';
import './App.css';
import Contador from './components/contador/Contador';
import InputNuevaNota from './components/InputNuevaNota';
import ListadoNotas from './components/ListadoNotas';

function App() {
	const [notas, setNotas] = useState(['hacer la compra']);

	const addNuevaNota = (nuevaNota) => {
		setNotas([...notas, nuevaNota]);
	};

	return (
		<div className='App'>
			<h1>Sesión número 11</h1>
			<h3>Esto va a ser una (otra) aplicación de notas</h3>
			<InputNuevaNota addNuevaNota={addNuevaNota} />
			<ListadoNotas notas={notas} />
			<Contador />
		</div>
	);
}

export default App;
