// Importa as funções somar, subtrair, multiplicar e dividir do arquivo "functions.js"
import {somar, subtrair, multiplicar, dividir} from "./functions.js"

// Solicita ao usuário o primeiro número inteiro
const numero1 = parseInt(prompt(`CALC. QUARTO OPERAÇÕES

Informe o primeiro número inteiro:`));

// Solicita ao usuário o segundo número inteiro
const numero2 = parseInt(prompt(`CALC. QUARTO OPERAÇÕES

Informe o segundo número inteiro:`))

// Exibe um alerta com os resultados das operações matemáticas
alert(`CALC. QUARTO OPERAÇÕES

A soma entre ${numero1} e ${numero2} é ${somar(numero1, numero2)}
A subtração de ${numero1} por ${numero2} é ${subtrair(numero1, numero2)}
O produto da multiplicação entre ${numero1} e ${numero2} é ${multiplicar(numero1, numero2)}
A divisão entre  ${numero1} e ${numero2} é ${dividir(numero1, numero2)}`)
