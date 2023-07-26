const input= require("readline-sync");
let carta1= input.questionInt("digite sua carta : ");
let carta2= input.questionInt(" digite sua carta : ");
let soma = carta1 + carta2;
let c1= (Math.round(Math.random()*10));
let c2 = (Math.round(Math.random()*10));
let c3 = (Math.round(Math.random()*10));
let c4 = (Math.round(Math.random()*10));
let somaBanco = c1 + c2 + c3 + c4;
while(true){
    if(somaBanco >21 || soma <= 21 && soma > somaBanco){
        console.log("jogador venceu!!");
        break;
    }
    }
        
    console.log("você perdeu !!!");
    console.log("tente novamente, seus pontos :" , soma);
    console.log(" pontos do banco :",somaBanco)





