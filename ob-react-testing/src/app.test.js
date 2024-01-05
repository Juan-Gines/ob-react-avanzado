import { fireEvent, render,screen } from '@testing-library/react';
import App from './App';
import InputNuevaNota from './components/InputNuevaNota';
import ListadoNotas from './components/ListadoNotas';

describe('REACT - Testeamos los componentes', () => {
	test('El listado se renderiza correctamente', () => {
		render(<ListadoNotas />);
		expect(screen).toBeDefined();
	});
	test('El listado renderiza una lista correctamente', () => {
		const notas = ['bajar la basura', 'bajar al perro'];
		render(<ListadoNotas notas={notas} />);
		expect(screen).toBeDefined();
	});
	test('El listado renderiza solo las notas que debe renderizar', () => {
		const notas = ['bajar la basura', 'bajar al perro'];
		render(<ListadoNotas notas={notas} />);
		const div = screen.getByLabelText('listado-notas');
		expect(div.childElementCount).toBe(2);
	});
});

describe('REACT - Hacemos un test de integración', () => {
	test('Renderizamos la app', () => {
		render(<App />);
		expect(screen).toBeDefined();
	});
	test('Se renderiza correctamente el input', () => {
		const placeholdertext = 'Introduce una nueva nota';
		render(<App />);
		const input = screen.getByPlaceholderText(placeholdertext);
		expect(input).toBeDefined();
	});
	test('Cuando hacemos click en el botón añadir, se lanza el evento', () => {
		const funcionMock = jest.fn();
		render(<InputNuevaNota addNuevaNota={funcionMock} />);
		const button = screen.getByText('Añadir');
		fireEvent.click(button);
		expect(funcionMock).toHaveBeenCalledTimes(1);
	});
	test('Añadimos una nueva nota', () => {
		const placeholdertext = 'Introduce una nueva nota';
		render(<App />);
		const input = screen.getByPlaceholderText(placeholdertext);
		const button = screen.getByText('Añadir');
		const div = screen.getByLabelText('listado-notas');
		const hijosInicial = div.childElementCount;
		fireEvent.change(input, { target: { value: 'Echar gasolina' } });
		fireEvent.click(button);
		const hijosFinal = div.childElementCount;
		expect(hijosFinal).toBeGreaterThan(hijosInicial);
		expect(hijosInicial).toBeLessThan(hijosFinal);
		expect(hijosInicial).not.toBe(hijosFinal);
	});
});
