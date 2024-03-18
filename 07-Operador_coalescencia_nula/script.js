// Operados de Coalescência Nula

/*O operador de coalescência nula (??) é um recurso introduzido no JavaScript para lidar com valores nulos ou indefinidos de uma maneira mais conveniente e concisa.
Basicamente, o operador de coalescência nula retorna o valor à direita do operador se o valor à esquerda for null ou undefined. Caso contrário, retorna o valor à esquerda do operador.*/


// Definindo três variáveis 'a', 'b' e 'c' com diferentes valores
const a = 0;       // 'a' recebe o valor 0
const b = null;    // 'b' recebe o valor null
const c = "Teste"; // 'c' recebe a string "Teste"

// Usando o operador de OU lógico (||) para obter o primeiro valor verdadeiro entre 'a', 'b' e 'c'
console.log(a || b || c); // Saída: "Teste" - porque 'c' é o primeiro valor verdadeiro encontrado

// Usando o operador de coalescência nula (??) para obter o primeiro valor não nulo ou não indefinido entre 'a', 'b' e 'c'
console.log(a ?? b ?? c); // Saída: 0 - porque 'a' é o primeiro valor que não é nulo ou indefinido encontrado
