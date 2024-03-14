
//PARÂMETROS REST

/*Rest parameters (parâmetros rest) são uma característica do JavaScript que permite que uma função aceite um número indefinido de argumentos como um array.

Sintaxe de declaração: (...parametros)=>{}
*/


// Definindo uma função chamada soma que aceita um número variável de argumentos
function soma(...numeros) {
    // Utilizando o método reduce para somar todos os números passados como argumentos
    // O parâmetro 'acumulador' é usado para acumular o resultado da soma
    // 'numero' representa cada número do array 'numeros' que está sendo somado ao acumulador
    // O valor inicial do acumulador é 0
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Chamando a função 'soma' com diferentes conjuntos de números como argumentos e imprimindo os resultados no console
console.log(soma(1, 1)); // Saída: 2 (1 + 1)
console.log(soma(1, 1, 2)); // Saída: 4 (1 + 1 + 2)
console.log(soma(1, 1, 2, 4)); // Saída: 8 (1 + 1 + 2 + 4)
console.log(soma(1, 1, 2, 4, 5)); // Saída: 13 (1 + 1 + 2 + 4 + 5)