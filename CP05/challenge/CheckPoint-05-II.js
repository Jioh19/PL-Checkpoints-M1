// Ejercicio 1: Definir una función que determine si un número es primo.
function esPrimo1(numero) {
	// Escribí tu código acá abajo:
	if (numero === 0 || numero === 1 || numero === 4) return false;
	if (numero === 2 || numero === 3) return true;
	for (let i = 2; i < Math.sqrt(numero); i++) {
		if (numero % i === 0) return false;
	}
	return true;
}

// Ejercicio 2: Definir una función que encuentre el máximo común divisor (MCD) de dos números.
function calcularMCD2(a, b) {
	// Escribí tu código acá abajo:
	const divisor = a < b ? a : b;
	for (let i = divisor; i > 0; i--) {
		if (a % i === 0 && b % i === 0) {
			return i;
		}
	}
}

// Ejercicio 3: Definir una función que genere un número aleatorio en un rango dado.
function numeroAleatorio3(min, max) {
	// Escribí tu código acá abajo:
	return Math.random() * (max - min) + min;
}

// Ejercicio 4: Definir una función que cuente la cantidad de palabras en una cadena de texto.
function contarPalabras4(cadena) {
	// Escribí tu código acá abajo:
	const palabras = cadena.split(' ');
	return palabras.length;
}

// Ejercicio 5: Definir una función que invierta una cadena de texto.
function invertirCadena5(cadena) {
	// Escribí tu código acá abajo:
	palabras = '';
	for (let i = cadena.length - 1; i >= 0; i--) {
		palabras += cadena[i];
	}
	return palabras;
}

// Ejercicio 6: Definir una función que encuentre el número mayor en un array de números.
function encontrarNumeroMayor6(arr) {
	// Escribí tu código acá abajo:
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (max < arr[i]) max = arr[i];
	}
	return max;
}

// Ejercicio 7: Definir una función que elimine los elementos duplicados de un array.
function eliminarDuplicados7(arr) {
	// Escribí tu código acá abajo:
	let set = new Set();
	for (let i = 0; i < arr.length; i++) {
		set.add(arr[i]);
	}
	return Array.from(set);
}

// Ejercicio 8: Definir una función que ordene un array de números de forma ascendente.
function ordenarAscendente8(arr) {
	// Escribí tu código acá abajo:
	if (arr.length <= 1) return arr;
	let pivot = arr[0];
	let leftArr = [];
	let rightArr = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) leftArr.push(arr[i]);
		else rightArr.push(arr[i]);
	}

	return [
		...ordenarAscendente8(leftArr),
		pivot,
		...ordenarAscendente8(rightArr),
	];
}

// Ejercicio 9: Definir una función que calcule la suma de los dígitos de un número.
function sumaDigitos9(numero) {
	// Escribí tu código acá abajo:
	let numeros = numero.toString().split('');
	let suma = 0;
	for (let i = 0; i < numeros.length; i++) {
		suma += Number(numeros[i]);
	}
	return suma;
}

// Ejercicio 10: Definir una función que determine si una cadena de texto es un palíndromo.
function esPalindromo10(cadena) {
	// Escribí tu código acá abajo:
	if (cadena.length <= 1) return true;
	cadena = cadena.replaceAll(' ', '').toLowerCase();
	for (let i = 0; i < Math.floor(cadena.length) / 2; i++) {
		if (cadena[i] != cadena[cadena.length - 1 - i]) return false;
	}
	return true;
}

// Exporta las funciones para que estén disponibles para otros módulos
module.exports = {
	esPrimo1,
	calcularMCD2,
	numeroAleatorio3,
	contarPalabras4,
	invertirCadena5,
	encontrarNumeroMayor6,
	eliminarDuplicados7,
	ordenarAscendente8,
	sumaDigitos9,
	esPalindromo10,
};
