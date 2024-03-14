//TEMPLATE LITERALS

/*Template literals são uma característica do ECMAScript 2015 (também conhecido como ES6) que permite a interpolação de variáveis e a criação de strings de forma mais expressiva e legível. Aqui estão alguns exemplos simples de como usar template literals:*/

// 1-Interpolação de variáveis:
const nome = "Daniel";
const sobrenome = "Perfeito"
const idade = 27;

const frase = `Olá, meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

console.log(frase);

// 2-Expressões embutidas:
const a = 10;
const b = 5;

const resultado = `A soma de ${a} e ${b} é igual a ${a + b}.`;

console.log(resultado);

// 3-Multilinhas:
const textoMultilinha = `
Esta é uma string
que se estende por
múltiplas linhas.

    E aqui é um parágrafo
que possui recuo inicial
de linha.
`;

console.log(textoMultilinha);

