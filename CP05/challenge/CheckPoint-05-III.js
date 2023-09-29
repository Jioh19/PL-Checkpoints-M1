// Ejercicio 1: Definir una función que calcule el enésimo término de la secuencia de Fibonacci.
function fibonacci1(n) {
	// Escribí tu código acá abajo:
	if (n === 0) return 0;
	if (n === 1) return 1;
	else return fibonacci1(n - 1) + fibonacci1(n - 2);
}

// Ejercicio 2: Definir una función que devuelva un objeto con las estadísticas de una lista de números.
function estadisticas2(lista) {
	// Escribí tu código acá abajo:
	let suma = 0;
	for (let i = 0; i < lista.length; i++) {
		suma += lista[i];
	}

	return {
		minimo: Math.min(...lista),
		maximo: Math.max(...lista),
		suma: suma,
		promedio: suma / lista.length,
	};
}

// Ejercicio 3: Definir una función que simule el lanzamiento de un dado n veces y devuelva los resultados.
function lanzarDado3(n) {
	// Escribí tu código acá abajo:
	result = [];
	for (let i = 0; i < n; i++) {
		result.push(Math.floor(Math.random() * 6 + 1));
	}
	return result;
}

// Ejercicio 4: Definir una función que determine si una cadena de texto contiene todas las vocales.
function contieneTodasLasVocales4(cadena) {
	// Escribí tu código acá abajo:
	const vocales = ['a', 'e', 'i', 'o', 'u'];
	const set = new Set();
	cadena = cadena.toLowerCase();
	for (let i = 0; i < cadena.length; i++) {
		if (vocales.includes(cadena[i])) set.add(cadena[i]);
	}
	if (set.size === 5) return true;
	else return false;
}

// Ejercicio 5: Definir una función que encuentre la subcadena más larga de una cadena de texto sin caracteres repetidos.
function subcadenaSinRepetir5(cadena) {
	// Escribí tu código acá abajo:
	let max = { index: 0, length: 0 };

	cadena = cadena.toLowerCase();
	for (let i = 0; i < cadena.length; i++) {
		let set = new Set();
		for (let j = i; j < cadena.length; j++) {
			if (set.has(cadena[j])) {
				break;
			} else {
				set.add(cadena[j]);
			}
		}
		if (max.length < set.size) {
			max.index = i;
			max.length = set.size;
		}
	}
	return cadena.substring(max.index, max.index + max.length);
}

// Ejercicio 6: Definir una función que devuelva la suma de los números primos menores o iguales a n.
function sumaPrimosMenoresOIguales6(n) {
	// Escribí tu código acá abajo:
}

// Función auxiliar para verificar si un número es primo (usada en el Ejercicio 6).
function esPrimo(numero) {
	// Escribí tu código acá abajo:
}

// Ejercicio 7: Definir una función que devuelva el número de formas en que se puede subir una escalera de n escalones
// si solo se puede subir 1 o 2 escalones a la vez.
function formasDeSubirEscalera7(n) {
	// Escribí tu código acá abajo:
}

// Ejercicio 8: Definir una función que determine si un número es un cuadrado perfecto.
function esCuadradoPerfecto8(numero) {
	// Escribí tu código acá abajo:
}

// Ejercicio 9: Definir una función que encuentre el número k en la secuencia de Fibonacci que tenga n dígitos.
function encontrarFibonacciConNDigitos9(n) {
	// Escribí tu código acá abajo:
}

// Ejercicio 10: Definir una función que devuelva la suma de los dígitos de 2^n (potencia de 2).
function sumaDigitosPotenciaDeDos10(n) {
	// Escribí tu código acá abajo:
}

// Exporta las funciones para que estén disponibles para otros módulos
module.exports = {
	fibonacci1,
	estadisticas2,
	lanzarDado3,
	contieneTodasLasVocales4,
	subcadenaSinRepetir5,
	sumaPrimosMenoresOIguales6,
	formasDeSubirEscalera7,
	esCuadradoPerfecto8,
	encontrarFibonacciConNDigitos9,
	sumaDigitosPotenciaDeDos10,
};
