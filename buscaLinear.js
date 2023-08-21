function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;
    while (inicio <= fim) {
      let meio = Math.floor((inicio + fim) / 2);
      if (array[meio] === alvo) {
        return meio; // encontrou o alvo
      } else if (array[meio] < alvo) {
        inicio = meio + 1; // procura na metade direita
      } else {
        fim = meio - 1; // procura na metade esquerda
      }
    }
    return -1; // não encontrou o alvo
  }
  
  // ordena o array
  let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7].sort((a, b) => a - b);
  
  // busca o número 20
  let indice = buscaBinaria(array, 20);
  
  // mostra o resultado
  if (indice !== -1) {
    console.log("O número 20 está na posição " + indice + " do array.");
  } else {
    console.log("O número 20 não está no array.");
  }