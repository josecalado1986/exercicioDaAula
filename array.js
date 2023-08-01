//salvando os elementos do array numa variavel.

const  meuArray = [10, 20, 30, 40 , 50 ];
let elemento = meuArray[1];
console.log(elemento);

//contando o tamnho do array

console.log(meuArray.length);
 
//adicionando um elemento no array

const fruta =["maça","banana","laranja","manga"]
 fruta.push("pera");
 console.log(fruta);

 //excluindo elemento do array.
 fruta.splice(0 ,1);
 console.log(fruta)

 //verifica se o numero esta no array

 const numeros =[10 ,20 ,30 ,40,50]
 if(numeros.includes(25)){
    console.log(" numero foi encontrado;")

 }else{
    console.log("numero nao foi encontaro;")
 }


 console.log(numeros);