
const input = require("readline-sync");

let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;
let voto = 0;

while (voto !== "fim") {
    voto = input.question("Digite o número do seu candidato ou 'branco' para voto em branco. Digite 'fim' para encerrar a votação.");
    if (voto === "branco") {
        branco++;
    } else if (voto === "fim") {
        break;
    } else if (isNaN(voto)) {
        alert("Por favor, digite um número válido.");
    } else if (voto == 1) {
        candidato_X++;
    } else if (voto == 2) {
        candidato_Y++;
    } else if (voto == 3) {
        candidato_Z++;
    } else {
        alert("Voto nulo.");
    }
}

if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
    alert(`Candidato X venceu com ${candidato_X} votos.`);
} else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
    alert(`Candidato Y venceu com ${candidato_Y} votos.`);
} else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
    alert(`Candidato Z venceu com ${candidato_Z} votos.`);
} else {
    alert("Empate!");
}
alert(`Candidato X: ${candidato_X}\nCandidato Y: ${candidato_Y}\nCandidato Z: ${candidato_Z}\nBranco: ${branco}`);
    