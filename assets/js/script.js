const questions = [
  {
    question: "Do you know where is this famous castle located?",
    image: "assets/images/prague.jpg",
    answers: [
      { text: "Prague, Czech Republic", correct: true },
      { text: "Madrid, Spain", correct: false },
      { text: "Paris, France", correct: false },
      { text: "London, England", correct: false },
    ],
  },

  {
    question: "This is a night view of a famous european city, do you know it?",
    image: "assets/images/lisbon.jpg",
    answers: [
      { text: "Milan, Italy", correct: false },
      { text: "Zurich, Switzerland", correct: false },
      { text: "Lisboa, Portugal", correct: true },
      { text: "Barcelona, Spain", correct: false },
    ],
  },

  {
    question:
      "Have you ever climbed an ice diamond? Can you guess the location?",
    image: "assets/images/diamond.jpg",
    answers: [
      { text: "Oulo, Finland", correct: false },
      { text: "Jökulsárlón, Iceland", correct: true },
      { text: "Bergen, Norway", correct: false },
      { text: "Nuuk, Greenland", correct: false },
    ],
  },

  {
    question:
      "One of the modern architectural marvels of recent times... do you know the location?",
    image: "assets/images/barcelona.jpg",
    answers: [
      { text: "Warsaw, Poland", correct: false },
      { text: "Munich, Germany", correct: false },
      { text: "Barcelona, Spain", correct: true },
      { text: "Athens, Greece", correct: false },
    ],
  },

  {
    question:
      "This is a building... but it is considered an island. Its a church as well! Can you guess the location?",
    image: "assets/images/venice.jpg",
    answers: [
      { text: "Sicily, Italy", correct: false },
      { text: "Lucern, Switzerland", correct: false },
      { text: "Venice, Italy", correct: true },
      { text: "Naples, Italy", correct: false },
    ],
  },

  {
    question:
      "This is one of the most famous rivers in the world, do you know where it is?",
    image: "assets/images/nile.jpg",
    answers: [
      { text: "Ganges, Asia", correct: false },
      { text: "Congo River, Africa", correct: false },
      { text: "Tigris, Turkey", correct: false },
      { text: "Nile River, Egypt", correct: true },
    ],
  },
  {
    question: "This cliffs are located in Ireland.. do you know their name?",
    image: "assets/images/donegal.jpg",
    answers: [
      { text: "Slieve League", correct: true },
      { text: "Cliffs of Moher", correct: false },
      { text: "Cape Eniberg", correct: false },
      { text: "Croaghaun", correct: false },
    ],
  },
  {
    question:
      "This bridge looks like the entrance to heaven... but its not! Do you know where it is?",
    image: "assets/images/dolomiti.jpg",
    answers: [
      { text: "Dolomiti, Italy", correct: true },
      { text: "Tenerife, Spain", correct: false },
      { text: "Oslo, Norway", correct: false },
      { text: "Edinburgh, Scotland", correct: false },
    ],
  },
  {
    question: "Mt. Fuji is majestic as you can see, but you know the height?",
    image: "assets/images/fuji.jpg",
    answers: [
      { text: "3,015m", correct: false },
      { text: "4,015m", correct: false },
      { text: "3,776m", correct: true },
      { text: "2,300m", correct: false },
    ],
  },
  {
    question:
      "This building looks a bit destroyed... but something happened in that city! Do you know what?",
    image: "assets/images/hiroshima.jpg",
    answers: [
      { text: "explosives", correct: false },
      { text: "tsunami", correct: false },
      { text: "earthquake", correct: false },
      { text: "atomic bomb", correct: true },
    ],
  },
  {
    question:
      "These macaque species are special... because they come from a beautiful country! Do you know where?",
    image: "assets/images/macaque.jpg",
    answers: [
      { text: "Japan", correct: true },
      { text: "Tanzania", correct: false },
      { text: "Vietnam", correct: false },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "This is Nike, the goddess of...?",
    image: "assets/images/nike.jpg",
    answers: [
      { text: "War", correct: false },
      { text: "Victory", correct: true },
      { text: "Beauty", correct: false },
      { text: "Water", correct: false },
    ],
  },
  {
    question:
      "This monastery is high in the mountains... and its amazing! It is in...",
    image: "assets/images/montserrat.jpg",
    answers: [
      { text: "Montserrat, Spain", correct: true },
      { text: "Sicily, Italy", correct: false },
      { text: "Marrakesh, Morocco.", correct: false },
      { text: "Berlin, Germany", correct: false },
    ],
  },
  {
    question:
      "I know... it looks like a painting, but in reality its a real place in a real location around Ireland! In county...",
    image: "assets/images/kerry.jpg",
    answers: [
      { text: "Donegal", correct: false },
      { text: "Kerry", correct: true },
      { text: "Meath", correct: false },
      { text: "Kildare", correct: false },
    ],
  },
  {
    question:
      "Everyone knows about the swiss alps... but guess what, these are called something else!",
    image: "assets/images/american-alps.jpg",
    answers: [
      { text: "Italian Alps", correct: false },
      { text: "Austrian Alps", correct: false },
      { text: "American Alps", correct: true },
      { text: "Japanese Alps", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const message = document.getElementById("message");

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Hides nextBtn and when startBtn is clicked calls startQuiz.
const startGame = () => {
  nextBtn.style.display = "none";
};
startBtn.addEventListener("click", () => {
  if (startBtn) {
    startBtn.style.display = "none";
    startQuiz();
  }
});

// Initializes quiz, resets cuestion Index and score, slices the copy of new shuffled array to show x amount of questions.
const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = shuffleArray(questions);
  showQuestion();
};

// Displays the arrays of questions with their image and possible answers, assigns value to answer.
const showQuestion = () => {
  reset();

  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  nextBtn.innerHTML = "Next";
  message.style.display = "none";

  if (currentQuestion.image) {
    const image = document.createElement("img");
    image.src = currentQuestion.image;
    image.alt = "image showing the location!";
    answerBtn.appendChild(image);
  }

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
};

// Fisher-Yates shuffle algorithm, iterates backward through the array, swapping each element with a randomly selected element before it.
const shuffleArray = (array) => {
  const shuffled = array.slice(); // Copy of the original array

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Resets the answers and hides the next button whenever a new question is shown.
const reset = () => {
  nextBtn.style.display = "none";
  answerBtn.innerHTML = "";
};

// Manage users answers selections, enables nextBtn, updates score.
const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
};

// Applies a method to get the percentage based on the correct answers and number of questions, enables nextBtn to restart the game.
const showScore = () => {
  reset();
  let newScore = Math.floor((score / shuffledQuestions.length) * 100);
  if (newScore < 60) {
    questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}. That is ${newScore}%. Im sure you can do better than that!`;
  } else {
    questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}. That is ${newScore}%. Congratulations you rock!!`;
  }

  nextBtn.innerHTML = "Play again!!";
  nextBtn.style.display = "block";
};

// Displays next question. If all questions were displayed, shows Score.
const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startGame();
