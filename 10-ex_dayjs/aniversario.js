//Importando a biblioteca dayjs
const dayjs = require('dayjs');

//Função para Aniversário
function aniversario(data){
    //Armazena a data de aniversário fornecida no parametro da função.
    const aniversario = dayjs(data);
    //Armazena a data atual.
    const hoje = dayjs();

    //Armazena a diferença entre a data de aniversário e a data atual em anos.
    const idadeEmAnos = hoje.diff(aniversario, 'year');
    //Adiciona 1 ano ao ano de aniversário fornecido.
    const proximoAniversario = aniversario.add(idadeEmAnos + 1, 'year');

    //Armazena a diferença em dias entre a data atual e o proximo aniversário
    const diasParaProximoAniversario = proximoAniversario.diff(hoje, 'day');

    //Exibe no console.
    console.log(`Idade: ${idadeEmAnos}`);
    console.log(`O próximo aniversário é em: ${proximoAniversario.format('DD/MM/YYYY')}`);
    console.log(`Faltam exatamente ${diasParaProximoAniversario} para o próximo aniversário`);
}

//Chamada da função com data em formato de string no parametro.
aniversario('1996-10-06');