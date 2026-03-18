// Pede o número ao usuário
let numero = Number(prompt("Digite um número para ver a tabuada:"));

// Verifica se é um número válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log("Tabuada do " + numero + ":");

    // Laço de repetição de 1 até 10
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}