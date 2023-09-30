// Ejercicio 1: Definir una función que sume dos números.
function suma1(a, b) {
	// Escribí tu código acá abajo:
	return a + b;
}

// Ejercicio 2: Definir una función que reste dos números.
function resta2(a, b) {
	// Escribí tu código acá abajo:
	return a - b;
}

// Ejercicio 3: Definir una función que multiplique dos números.
function multiplica3(a, b) {
	// Escribí tu código acá abajo:
	return a * b;
}

// Ejercicio 4: Definir una función que divida dos números (excepto 0).
function divide4(a, b) {
	// Escribí tu código acá abajo:
	return a / b;
}

// Ejercicio 5: Definir una función que calcule el área de un triángulo.
function areaTriangulo5(base, altura) {
	// Escribí tu código acá abajo:
	return base * altura * 0.5;
}

// Ejercicio 6: Definir una función que calcule el área de un círculo.
function areaCirculo6(radio) {
	// Escribí tu código acá abajo:
	return radio ** 2 * Math.PI;
}

// Ejercicio 7: Definir una función que determine si un número es par.
function esPar7(numero) {
	// Escribí tu código acá abajo:
	return numero % 2 === 0;
}

// Ejercicio 8: Definir una función que determine si un número es positivo, negativo o cero.
function determinarSigno8(numero) {
	// Escribí tu código acá abajo:
	let resultado = numero > 0 ? 'Positivo' : 'Negativo';
	if (numero === 0) resultado = 'Zero';
	return resultado;
}

// Ejercicio 9: Definir una función que concatene dos cadenas de texto.
function concatenar9(cadena1, cadena2) {
	// Escribí tu código acá abajo:
	return cadena1.concat(' ', cadena2);
}

// Ejercicio 10: Definir una función que calcule el factorial de un número.
function factorial10(numero) {
	// Escribí tu código acá abajo:
	let factorial = 1;
	for (let i = 2; i <= numero; i++) {
		factorial *= i;
	}
	return factorial;
}

// Exporta las funciones para que estén disponibles para otros módulos
module.exports = {
	suma1,
	resta2,
	multiplica3,
	divide4,
	areaTriangulo5,
	areaCirculo6,
	esPar7,
	determinarSigno8,
	concatenar9,
	factorial10,
};
