// Opções possíveis
const opcoes = ["pedra", "papel", "tesoura"];

// Escolha do usuário
let usuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

// Escolha aleatória do computador
let indiceComputador = Math.floor(Math.random() * 3);
let computador = opcoes[indiceComputador];

// Exibir escolhas
console.log("Você escolheu: " + usuario);
console.log("Computador escolheu: " + computador);

// Verificar vencedor
if (usuario === computador) {
    console.log("Empate!");
} else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "papel" && computador === "pedra") ||
    (usuario === "tesoura" && computador === "papel")
) {
    console.log("Você venceu!");
} else if (
    (usuario === "pedra" && computador === "papel") ||
    (usuario === "papel" && computador === "tesoura") ||
    (usuario === "tesoura" && computador === "pedra")
) {
    console.log("Computador venceu!");
} else {
    console.log("Opção inválida! Digite pedra, papel ou tesoura.");
}