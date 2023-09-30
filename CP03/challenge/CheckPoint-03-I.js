// Ejercicio 1: Utilizar un bucle for para imprimir los números del 1 al 5 en una variable resultado1.

// Resultado esperado restultado = '1 2 3 4 5 ';

let resultado1 = '';

// Escribí tu código acá abajo:
for (let i = 1; i <= 5; i++) {
	resultado1 += `${i} `;
}

// Ejercicio 2: Utilizar un bucle for para imprimir los números pares del 2 al 10.

// Resultado esperado restultado = '2 4 6 8 10 ';

let resultado2 = '';

// Escribí tu código acá abajo:
for (let i = 2; i <= 10; i += 2) {
	resultado2 += `${i} `;
}

// Ejercicio 3: Utilizar un bucle for para imprimir los números impares del 1 al 9.

// Resultado esperado restultado = '1 3 5 7 9 ';

let resultado3 = '';

// Escribí tu código acá abajo:
for (let i = 1; i < 10; i += 2) {
	resultado3 += `${i} `;
}

// Ejercicio 4: Utilizar un bucle for para calcular la suma de los números del 1 al 5.

let suma = 0;

// Escribí tu código acá abajo:
for (let i = 1; i <= 5; i++) {
	suma += i;
}

// Ejercicio 5: Utilizar un bucle for para calcular el producto de los números del 1 al 5.

let producto = 1;

// Escribí tu código acá abajo:
for (let i = 1; i <= 5; i++) {
	producto *= i;
}

// Ejercicio 6: Utilizar un bucle for para imprimir los elementos de un arreglo "frutas".

let frutas = ['manzana', 'banana', 'uva', 'pera', 'naranja'];

let resultado6 = '';

// Resultado esperado resultado6 = 'manzana banana uva pera naranja ';
for (let i = 0; i < frutas.length; i++) {
	resultado6 += `${frutas[i]} `;
}

// Ejercicio 7: Utilizar un bucle for para encontrar el índice de la primera ocurrencia de "banana" en el arreglo "frutas".

let indiceBanana = -1;

// Terminar el bucle cuando se encuentre la primera ocurrencia

// Escribí tu código acá abajo:
for (let i = 0; i < frutas.length; i++) {
	if (frutas[i] === 'banana') {
		indiceBanana = i;
		break;
	}
}

// Ejercicio 8: Utilizar un bucle for para sumar los elementos de un arreglo "numeros".

let numeros = [3, 6, 9, 12, 15];
let sumaNumeros = 0;

// Escribí tu código acá abajo:
for (let i = 0; i < numeros.length; i++) {
	sumaNumeros += numeros[i];
}

// Ejercicio 9: Utilizar un bucle for para imprimir los números del 10 al 1 en orden descendente.

let resultado9 = '';

// Resultado esperado: resultado0 = '10 9 8 7 6 5 4 3 2 1 '

// Escribí tu código acá abajo:
for (let i = 10; i > 0; i--) {
	resultado9 += `${i} `;
}

// Ejercicio 10: Utilizar un bucle for para calcular la potencia de 2 elevado a la n, donde n es un número.
let n = 4; // Cambia el valor de n según lo necesites
let potencia;

// Escribí tu código acá abajo:

// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
	resultado1,
	resultado2,
	resultado3,
	suma,
	producto,
	resultado6,
	indiceBanana,
	sumaNumeros,
	resultado9,
	potencia,
};
