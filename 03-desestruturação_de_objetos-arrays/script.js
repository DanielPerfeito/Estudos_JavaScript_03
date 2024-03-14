//DESESTRUTURAÇÃO DE OBJETOS E ARRAYS

/*A desestruturação de arrays é uma característica do JavaScript que permite extrair valores de arrays e atribuí-los a variáveis de forma concisa.*/


// Desestruturação de Objetos:
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Perfeito',
    idade: 27,
    trabalho: 'Desenvolvedor',
    areas: ['front-end', 'UX']
};

// Desestruturação dos campos do objeto pessoa
const { nome, sobrenome, trabalho, areas } = pessoa;

// Imprimindo os valores desestruturados
console.log({ nome, sobrenome, trabalho, areas });

// Desestruturação de Arrays:
const [skill1, skill2] = areas;

// Imprimindo as habilidades extraídas do array "areas"
console.log(skill1, skill2);