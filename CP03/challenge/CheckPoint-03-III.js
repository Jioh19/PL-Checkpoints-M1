// Ejercicio 1: Utilizar un bucle do...while para imprimir los números del 1 al 5.

let resultado1 = '';

let i = 1;

// Escribí tu código acá abajo:
do {
	resultado1 += `${i} `;
	i++;
} while (i <= 5);

// Ejercicio 2: Utilizar un bucle do...while para imprimir los números pares del 2 al 10.

let resultado2 = '';

let j = 2;

// Escribí tu código acá abajo:
do {
	resultado2 += `${j} `;
	j += 2;
} while (j <= 10);

// Ejercicio 3: Utilizar un bucle do...while para imprimir los números impares del 1 al 9.

let resultado3 = '';

let k = 1;

// Escribí tu código acá abajo:
do {
	resultado3 += `${k} `;
	k += 2;
} while (k <= 9);

// Ejercicio 4: Utilizar un bucle do...while para calcular la suma de los números del 1 al 5.

let suma = 0;

let num = 1;

// Escribí tu código acá abajo:
do {
	suma += num;
	num++;
} while (num <= 5);

// Ejercicio 5: Utilizar un bucle do...while para calcular el producto de los números del 1 al 5.

let producto = 1;

let num2 = 1;

// Escribí tu código acá abajo:
do {
	producto *= num2;
	num2++;
} while (num2 <= 5);

// Ejercicio 6: Utilizar un bucle do...while para imprimir los elementos de un arreglo "frutas".

let frutas = ['manzana', 'banana', 'uva', 'pera', 'naranja'];

let resultado6 = '';

let index = 0;

// Escribí tu código acá abajo:
do {
	resultado6 += `${frutas[index]} `;
	index++;
} while (index < frutas.length);

// Ejercicio 7: Utilizar un bucle do...while para encontrar el índice de la primera ocurrencia de "banana" en el arreglo "frutas".

// Terminar el bucle cuando se encuentre la primera ocurrencia

let indiceBanana = -1;

let m = 0;

// Escribí tu código acá abajo:
do {
	if (frutas[m] === 'banana') {
		indiceBanana = m;
		break;
	}
	m++;
} while (m < frutas.length);

// Ejercicio 8: Utilizar un bucle do...while para sumar los elementos de un arreglo "numeros".

let numeros = [3, 6, 9, 12, 15];

let sumaNumeros = 0;

let n1 = 0;

// Escribí tu código acá abajo:
do {
	sumaNumeros += numeros[n1];
	n1++;
} while (n1 < numeros.length);

// Ejercicio 9: Utilizar un bucle do...while para imprimir los números del 10 al 1 en orden descendente.

let resultado9 = '';

let num3 = 10;

// Escribí tu código acá abajo:
do {
	resultado9 += `${num3} `;
	num3--;
} while (num3 > 0);

// Ejercicio 10: Utilizar un bucle do...while para calcular la potencia de 2 elevado a la n, donde n es un número.

let n = 4; // Cambia el valor de n según lo necesites

let potencia = 1;

let exponente = 1;

// Escribí tu código acá abajo:
do {
	potencia *= 2;
	exponente++;
} while (exponente <= n);

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
