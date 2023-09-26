// Ejercicio 1: Sumar dos números y asignar el resultado a una variable "suma" (usando las variables num1 y num2).

let num1 = 10;
let num2 = 5;

// Escribí tu código acá abajo:
let suma = num1 + num2;

// Ejercicio 2: Restar dos números y asignar el resultado a una variable "resta" (usando las variables num1 y num2).

// Escribí tu código acá abajo:
let resta = num1 - num2;

// Ejercicio 3: Multiplicar dos números y asignar el resultado a una variable "multiplicacion" (usando las variables num1 y num2).

// Escribí tu código acá abajo:
let multiplicacion = num1 * num2;

// Ejercicio 4: Dividir dos números y asignar el resultado a una variable "division" (usando las variables num1 y num2).

// Escribí tu código acá abajo:
let division = num1 / num2;

// Ejercicio 5: Calcular el módulo de dos números y asignar el resultado a una variable "modulo" (usando las variables num1 y num2).

// Escribí tu código acá abajo:
let modulo = num1 % num2;

// Ejercicio 6: Incrementar en 1 el valor de una variable "contador1" utilizando el operador de incremento.

let contador1 = 0;

// Escribí tu código acá abajo:
contador1++;

// Ejercicio 7: Decrementar en 1 el valor de una variable "contador2" utilizando el operador de decremento.

let contador2 = 1;

// Escribí tu código acá abajo:
contador2--;

// Ejercicio 8: Concatenar dos strings y asignar el resultado a una variable "concatenacion".

// Escribí tu código acá abajo:
let concatenacion = "Hola, " + "Mundo!";

// Ejercicio 9: Calcular el resultado de una expresión booleana y asignar el resultado a una variable "esVerdadero".

// Escribí tu código acá abajo:
let esVerdadero = 1 === 1;


// Ejercicio 10: Utilizar un operador ternario para asignar el valor "Aprobado" o "Reprobado" a una variable "resultado" según un puntaje.

let puntaje = 80;

// Escribí tu código acá abajo:
let resultado = puntaje > 70 ? "Aprobado" : "Reprobado";

// Exporta las variables para que estén disponibles para otros módulos
module.exports = {
  suma,
  resta,
  multiplicacion,
  division,
  modulo,
  contador1,
  contador2,
  concatenacion,
  esVerdadero,
  resultado,
};
