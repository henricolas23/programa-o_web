document.addEventListener("DOMContentLoaded", () => {
  class Character {
    constructor(name, description, image) {
      this.name = name;
      this.description = description;
      this.image = image;
      this.score = 0;
    }

    addPoints(points) {
      this.score += points;
    }

    resetScore() {
      this.score = 0;
    }
  }

  class Quiz {
    constructor(characters, questions) {
      this.characters = characters;
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.answers = new Array(questions.length).fill(null);
    }

    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }

    selectAnswer(optionIndex) {
      this.answers[this.currentQuestionIndex] = optionIndex;
    }

    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    }

    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    }

    isComplete() {
      return this.answers.every(answer => answer !== null);
    }

    calculateResult() {
      this.characters.forEach(character => character.resetScore());

      for (let i = 0; i < this.questions.length; i++) {
        const selectedOptionIndex = this.answers[i];

        if (selectedOptionIndex === null) continue;

        const selectedOption = this.questions[i].options[selectedOptionIndex];

        for (const characterName in selectedOption.points) {
          const character = this.characters.find(c => c.name === characterName);
          if (character) {
            character.addPoints(selectedOption.points[characterName]);
          }
        }
      }

      let winner = this.characters[0];

      for (let i = 1; i < this.characters.length; i++) {
        if (this.characters[i].score > winner.score) {
          winner = this.characters[i];
        }
      }

      return winner;
    }

    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.answers = new Array(this.questions.length).fill(null);
      this.characters.forEach(character => character.resetScore());
    }
  }

  const characters = [
    new Character(
      "Homem de Ferro",
      "Você é estratégico, racional e gosta de resolver problemas com inteligência, inovação e iniciativa.",
      "https://upload.wikimedia.org/wikipedia/pt/5/59/Iron_Man_%282020%29.png"
    ),
    new Character(
      "Capitão América",
      "Você tem forte senso de justiça, disciplina e lealdade. Inspira confiança e mantém seus valores.",
      "https://imgix.bustle.com/inverse/11/91/65/66/aa08/4ef6/be12/964b648601b6/captain-america-the-winter-soldier.jpeg?w=400&h=300&fit=crop&crop=faces&dpr=2"
    ),
    new Character(
      "Thor",
      "Você é intenso, confiante e movido por coragem. Tem presença forte e enfrenta desafios sem recuar.",
      "https://www.einerd.com/wp-content/uploads/2019/06/thor-gordo-ultimato-e1560438055720.jpg"
    )
  ];

  const questions = [
    {
      question: "1. Em um desafio difícil, qual é sua primeira reação?",
      options: [
        {
          text: "Pensar em uma solução inteligente e eficiente",
          points: { "Homem de Ferro": 3, "Capitão América": 2, "Thor": 1 }
        },
        {
          text: "Organizar as pessoas e liderar com calma",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "Ir para cima sem medo e resolver na ação",
          points: { "Homem de Ferro": 1, "Capitão América": 2, "Thor": 3 }
        }
      ]
    },
    {
      question: "2. Qual qualidade mais combina com você?",
      options: [
        {
          text: "Inteligência",
          points: { "Homem de Ferro": 3, "Capitão América": 1, "Thor": 1 }
        },
        {
          text: "Honra",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "Coragem",
          points: { "Homem de Ferro": 1, "Capitão América": 2, "Thor": 3 }
        }
      ]
    },
    {
      question: "3. Em uma equipe, qual papel você assume?",
      options: [
        {
          text: "O cérebro por trás do plano",
          points: { "Homem de Ferro": 3, "Capitão América": 2, "Thor": 1 }
        },
        {
          text: "O líder que mantém todos unidos",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "A força que muda o rumo da situação",
          points: { "Homem de Ferro": 1, "Capitão América": 1, "Thor": 3 }
        }
      ]
    },
    {
      question: "4. Qual ambiente parece mais natural para você?",
      options: [
        {
          text: "Laboratório cheio de tecnologia",
          points: { "Homem de Ferro": 3, "Capitão América": 1, "Thor": 1 }
        },
        {
          text: "Centro de comando e estratégia",
          points: { "Homem de Ferro": 2, "Capitão América": 3, "Thor": 1 }
        },
        {
          text: "Campo de batalha aberto",
          points: { "Homem de Ferro": 1, "Capitão América": 2, "Thor": 3 }
        }
      ]
    },
    {
      question: "5. O que mais te motiva?",
      options: [
        {
          text: "Superar limites e criar algo grandioso",
          points: { "Homem de Ferro": 3, "Capitão América": 1, "Thor": 2 }
        },
        {
          text: "Fazer o que é certo",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "Proteger os seus com todas as forças",
          points: { "Homem de Ferro": 1, "Capitão América": 2, "Thor": 3 }
        }
      ]
    },
    {
      question: "6. Como você lida com pressão?",
      options: [
        {
          text: "Analiso tudo rapidamente e improviso",
          points: { "Homem de Ferro": 3, "Capitão América": 2, "Thor": 1 }
        },
        {
          text: "Mantenho a postura e sigo o plano",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "Uso energia e determinação para vencer",
          points: { "Homem de Ferro": 1, "Capitão América": 1, "Thor": 3 }
        }
      ]
    },
    {
      question: "7. Qual dessas frases mais combina com você?",
      options: [
        {
          text: "Sempre existe uma solução melhor",
          points: { "Homem de Ferro": 3, "Capitão América": 1, "Thor": 1 }
        },
        {
          text: "Nenhum valor deve ser abandonado",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "Grandeza exige atitude",
          points: { "Homem de Ferro": 1, "Capitão América": 2, "Thor": 3 }
        }
      ]
    },
    {
      question: "8. Em uma crise, o que os outros esperam de você?",
      options: [
        {
          text: "Uma ideia genial",
          points: { "Homem de Ferro": 3, "Capitão América": 1, "Thor": 1 }
        },
        {
          text: "Segurança e direção",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "Ação imediata",
          points: { "Homem de Ferro": 1, "Capitão América": 2, "Thor": 3 }
        }
      ]
    },
    {
      question: "9. Qual defeito mais se aproxima de você?",
      options: [
        {
          text: "Arrogância ocasional",
          points: { "Homem de Ferro": 3, "Capitão América": 1, "Thor": 2 }
        },
        {
          text: "Excesso de responsabilidade",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 1 }
        },
        {
          text: "Impulsividade",
          points: { "Homem de Ferro": 1, "Capitão América": 1, "Thor": 3 }
        }
      ]
    },
    {
      question: "10. Se você tivesse um grande poder, como usaria?",
      options: [
        {
          text: "Para desenvolver soluções que mudem o mundo",
          points: { "Homem de Ferro": 3, "Capitão América": 2, "Thor": 1 }
        },
        {
          text: "Para defender as pessoas e inspirar esperança",
          points: { "Homem de Ferro": 1, "Capitão América": 3, "Thor": 2 }
        },
        {
          text: "Para derrotar ameaças de forma implacável",
          points: { "Homem de Ferro": 1, "Capitão América": 1, "Thor": 3 }
        }
      ]
    }
  ];

  const quiz = new Quiz(characters, questions);

  const homeScreen = document.getElementById("home-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  const startBtn = document.getElementById("start-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  const progress = document.getElementById("progress");
  const questionTitle = document.getElementById("question-title");
  const optionsContainer = document.getElementById("options-container");

  const resultName = document.getElementById("result-name");
  const resultDescription = document.getElementById("result-description");
  const resultScore = document.getElementById("result-score");
  const resultImage = document.getElementById("result-image");
  const scoreList = document.getElementById("score-list");

  function showScreen(screen) {
    homeScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    screen.classList.remove("hidden");
  }

  function renderQuestion() {
    const currentQuestion = quiz.getCurrentQuestion();

    progress.textContent = `Pergunta ${quiz.currentQuestionIndex + 1} de ${quiz.questions.length}`;
    questionTitle.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option.text;

      if (quiz.answers[quiz.currentQuestionIndex] === index) {
        optionElement.classList.add("selected");
      }

      optionElement.addEventListener("click", () => {
        quiz.selectAnswer(index);
        renderQuestion();
      });

      optionsContainer.appendChild(optionElement);
    });

    prevBtn.style.display = quiz.currentQuestionIndex === 0 ? "none" : "inline-block";
    nextBtn.textContent = quiz.currentQuestionIndex === quiz.questions.length - 1
      ? "Finalizar"
      : "Próxima";
  }

  function renderResult() {
    const winner = quiz.calculateResult();

    resultName.textContent = winner.name;
    resultDescription.textContent = winner.description;
    resultScore.textContent = `${winner.score} pontos`;
    resultImage.src = winner.image;
    resultImage.alt = winner.name;

    scoreList.innerHTML = "";

    quiz.characters.forEach(character => {
      const li = document.createElement("li");
      li.textContent = `${character.name}: ${character.score} pontos`;
      scoreList.appendChild(li);
    });
  }

  startBtn.addEventListener("click", () => {
    showScreen(quizScreen);
    renderQuestion();
  });

  prevBtn.addEventListener("click", () => {
    quiz.previousQuestion();
    renderQuestion();
  });

  nextBtn.addEventListener("click", () => {
    if (quiz.answers[quiz.currentQuestionIndex] === null) {
      alert("Selecione uma opção antes de continuar.");
      return;
    }

    if (quiz.currentQuestionIndex === quiz.questions.length - 1) {
      renderResult();
      showScreen(resultScreen);
    } else {
      quiz.nextQuestion();
      renderQuestion();
    }
  });

  restartBtn.addEventListener("click", () => {
    quiz.resetQuiz();
    showScreen(homeScreen);
  });
});