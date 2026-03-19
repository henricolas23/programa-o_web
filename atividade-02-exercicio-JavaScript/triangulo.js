// Pede o número de linhas ao usuário
let linhas = Number(prompt("Digite o número de linhas:"));

// Verifica se é válido
if (isNaN(linhas) || linhas <= 0) {
    console.log("Por favor, digite um número válido maior que zero.");
} else {
    // Loop para cada linha
    for (let i = 1; i <= linhas; i++) {
        let linha = "";

        // Loop para adicionar os asteriscos
        for (let j = 1; j <= i; j++) {
            linha += "*";
        }

        console.log(linha);
    }
}