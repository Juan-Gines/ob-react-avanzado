// Aquí vamos a declarar todas las funciones y variables que necesitemos para ilustrar los casos de prueba

/* const sumar = (a,b) =>{
  return (a,b)
} */

export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a / b;

export const devuelveFactorial = (num) => {
	if (num < 0) return "Error los negativos no tienen factorial";
	let factorial = 1;
	for (let i = 1; i <= num; i++) {
		factorial *= i ;
	}
	return factorial;
};

export const devuelveEmail = () => 'juan@juan.com';

export const devuelveObjeto = () => {
	return {
		ancho: 10,
		alto: 19,
	};
};

export const devuelveArrayNum = () => [1, 2, 3, 4, 5];
export const devuelveArrayObj = () => [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
export const devuelveArrayStr = () => ['leche', 'arroz', 'plátanos', 'naranjas'];

export const devuelveTrue = () => true;
export const devuelveFalse = () => false;
export const devuelveNull = () => null;
export const devuelveUndefined = () => undefined;
export const devuelveNaN = () => NaN;

export class Rectangulo {
	constructor(ancho, alto) {
		this.ancho = ancho;
		this.alto = alto;
	}

	calculaArea() {
		return this.ancho * this.alto;
	}
}
