//Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

//Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

const input = require("readline-sync");
function informacao() {
    let nome = input.question(" digite seu nome completo :  ");
    let ano = input.questionInt("digite seu ano de nascimento : ");
    let anoAtual = 2022;

    while (ano){
        if (ano >= 1922 && ano <= 2021){
           
            console.log( nome + " você têm "  + ( 2022 - ano ) + " anos .")
            return;

        }else{
            console.log( "  erro !!!  " +  nome  +  "  digite ano de nascimento  entre 1922 e 2021 : ");
            informacao();
            return;
        
        }

            }
            
       
}

informacao();