let nomes =[ "douglas","paloma","ze","lana","saimon","nizia","maria","joana", "joao","vitor"];
let idades =[37 , 30, 14, 17 , 17  ,19 , 20, 30, 26 , 18 ];
let cores=[ "amarelo","vermalho","preto","azul","rosa","branco","laranja",];
console.log(nomes, idades ,cores);

let remove = nomes.splice(2,1);
let removecor = cores.splice(2,1);
console.log(nomes , cores);
let adicionar = nomes.push("heleno");
let adicionar1 = cores.push("pink")
console.log(nomes , cores);