import { render, fireEvent, screen } from '@testing-library/react';
import Contador from './Contador';

describe('Probando componente contador', () => {
	let aumentar, disminuir, resetear, count;
	beforeEach(() => {
		render(<Contador />);
		aumentar = screen.getByLabelText('aumentar');
		disminuir = screen.getByLabelText('disminuir');
		resetear = screen.getByLabelText('resetear');
		count = screen.getByLabelText('contador');
	});

	test('Se renderiza el componente', () => {
		expect(screen).toBeDefined();
	});

	test('Al hacer clic el valor aumenta en 1', () => {
		const countInicial = parseInt(count.innerHTML);
		fireEvent.click(aumentar);
		const countFinal = parseInt(count.innerHTML);
		expect(countFinal).toBe(countInicial + 1);
	});

	test('Al hacer clic el valor disminuye en 1', () => {
		const countInicial = parseInt(count.innerHTML);
		fireEvent.click(disminuir);
		const countFinal = parseInt(count.innerHTML);
		expect(countFinal).toBe(countInicial - 1);
	});

	test('Al hacer clic el valor es igual a 0', () => {
		fireEvent.click(aumentar);
		fireEvent.click(resetear);
		const countFinal = parseInt(count.innerHTML);
		expect(countFinal).toBe(0);
	});
});
