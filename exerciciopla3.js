const input = require("readline-sync");
let quantidadeDeRodas = parseInt(input.question("digite a quantiadde de rodas que tem seu veiculo"));
let pesoBruto =parseFloat(input.question("digite o peso bruto que tem seu veiculo  em kg : "));
let quantidadeDePessoas = parseInt(input.question("digite a quantidade de pessoas no veiculo : "));

if(quantidadeDeRodas === 2 && quantidadeDeRodas <= 3){
    console.log("melhor categoria pra você seria , (A) ")
}else if(quantidadeDeRodas === 4 && quantidadeDePessoas <=8 && pesoBruto <= 3500 ){
    console.log("melhor categoria pra você é (B) : ")
}else if(quantidadeDeRodas >= 4 && pesoBruto > 3500 && pesoBruto< 6000){
    console.log(" melhor categoria pra você é (c) : ")
}else if(quantidadeDeRodas === 4 || quantidadeDePessoas > 8 ){
    console.log("melhor categoria pra você é (D) : ")
}else if(quantidadeDeRodas === 4 || pesoBruto > 6000){
    console.log("melhor categoria pra você é (E) : ")
}else {
    console.log(" não existe categoria definida pra você.")
}







//A: Veículos com duas ou três rodas;
//B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
//C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
//D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
//E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
