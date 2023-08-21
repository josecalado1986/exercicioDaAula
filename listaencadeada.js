// Criar um objeto pessoa
function Pessoa(nome, idade, filho) {
    this.nome = nome;
    this.idade = idade;
    this.filho = filho;
  }
  
  // Criar alguns objetos pessoa
  var ana = new Pessoa("Ana", 35, null);
  var bruno = new Pessoa("Bruno", 40, ana);
  var carla = new Pessoa("Carla", 45, bruno);
  
  // Criar uma lista encadeada com os objetos pessoa
  var lista = carla; // O primeiro nó da lista é carla
  // Percorrer a lista encadeada
var atual = lista; // O nó atual é o primeiro da lista
while (atual != null) {
  // Imprimir as informações da pessoa atual
  console.log("Nome: " + atual.nome);
  console.log("Idade: " + atual.idade);
  console.log("Filho: " + (atual.filho ? atual.filho.nome : "Nenhum"));
  console.log("--------------------");
  // Avançar para o próximo nó da lista
  atual = atual.filho;
}
