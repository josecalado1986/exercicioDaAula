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
