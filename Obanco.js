const input= require("readline-sync");
let carta1= input.questionInt("digite sua carta");
let carta2= input.questionInt(" digite sua carta ");
let soma = carta1 + carta2;
if( soma >21){
    console.log(" jogador perdeu !!")
}else{ 
    console.log( "voce ganhou !!");
} 
console.log(" seus pontos saõ :", soma);
let c1= (Math.round(Math.random()*10));
let c2 = (Math.round(Math.random()*10));
let c3 = (Math.round(Math.random()*10));
let c4 = (Math.round(Math.random()*10));
let somaBanco = c1 + c2 + c3 + c4;
console.log("a soma das cartaz do banco são : ",somaBanco);
