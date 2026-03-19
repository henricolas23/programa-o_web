// Pede a quantidade de termos
let n = Number(prompt("Digite a quantidade de termos:"));

// Verifica se é válido
if (isNaN(n) || n <= 0) {
    console.log("Digite um número válido maior que zero.");
} else {
    let termo = 0;
    let soma = 0;
    let sequencia = "";

    for (let i = 1; i <= n; i++) {
        // Constrói o termo (1, 11, 111, ...)
        termo = termo * 10 + 1;

        // Soma os termos
        soma += termo;

        // Monta a string da sequência
        sequencia += termo;
        if (i < n) {
            sequencia += " + ";
        }
    }

    console.log(sequencia);
    console.log("A soma é: " + soma);
}