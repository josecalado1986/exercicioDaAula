//Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

//Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

const input = require("readline-sync");
let nome = input.question(" digite seu nome completo :");
let ano = input.questionInt("digite seu ano de nascimento entre 1922 e 2021: ");
let anoAtual = 2022;
function idade(nome, ano) {
    if (ano > 1922 && ano <= 2021) {
        return anoAtual - ano;
        console.log(nome + idade)


    } else if (ano < 1922 || ano > 2021 || ano === isNaN) {
        console.log(" erro");
    
    }
}
console.log(nome + idade(nome, ano) + " anos");
