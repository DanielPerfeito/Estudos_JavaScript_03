//OPERADOR SPREAD

/*Operador que permite espalhar (do inglês, spread) ou separar os elementos de um objeto iterável, como um array ou uma string.

Sintaxe: ...objetoInterável*/

//Operando sobre uma string: 
let string = "Olá, Mundo!";
console.log(...string); // Imprimirá no console "O l á ,   M u n d o !"

//Operando sobre um array:
let array = [1, 2, 3, 4, 5];
console.log(...array); // Imprimirá  no console "1 2 3 4 5"

//Transformando uma string em array:
let stringArray = "Jesus";
console.log([...stringArray]) // Imprimirá no console ['J', 'e', 's', 'u', 's']
