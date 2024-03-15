//ENCADEAMENTO OPCIONAL

/*O encadeamento opcional, introduzido no ECMAScript 2020, é uma forma de simplificar o acesso a propriedades aninhadas de objetos, especialmente quando essas propriedades podem ser null ou undefined. Ele é definido pela seguinte sintaxe "?.".

Encadeamento tradicional: objeto.propriedade
Encadeamento opcional: objeto?.propriedade*/

// Definindo um objeto 'pessoa' com algumas propriedades
const pessoa = {
    nome: 'Daniel',
    idade: 27,
    familia: {
        conjuge: 'Ana' // Propriedade 'conjuge' dentro do objeto 'familia'
    }
}

// Acessando e imprimindo o nome do cônjuge da pessoa
console.log(pessoa.familia.conjuge); // Saída: Ana

// Usando encadeamento opcional para acessar os netos da propriedade 'filhos' do objeto 'familia'.
// Se 'filhos' for 'null' ou 'undefined', o JavaScript retornará 'undefined' em vez de gerar um erro.
console.log(pessoa.familia.filhos?.netos); // Saída: undefined