// Jogo de adivinhação de número
// O computador gera um número aleatório de 1 a 20
// O usuário tenta adivinhar, recebendo dicas se maior ou menor

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function playGame() {
  // Gera um número aleatório de 1 a 20
  const secretNumber = Math.floor(Math.random() * 20) + 1;
  let attempts = 0;

  console.log("Bem-vindo ao jogo de adivinhação!");
  console.log("Tente adivinhar o número secreto entre 1 e 20.");

  while (true) {
    const guessStr = await askQuestion("Digite seu palpite: ");
    const guess = parseInt(guessStr);

    if (isNaN(guess)) {
      console.log("Por favor, digite um número válido.");
      continue;
    }

    attempts++;

    if (guess < secretNumber) {
      console.log("Muito baixo! Tente novamente.");
    } else if (guess > secretNumber) {
      console.log("Muito alto! Tente novamente.");
    } else {
      console.log(`Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativas.`);
      break;
    }
  }

  rl.close();
}

playGame();