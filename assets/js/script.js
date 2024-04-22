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
    question: "Do you know where is this famous castle located?",
    image: "assets/images/prague.jpg",
    answers: [
      { text: "Prague, Czech Republic", correct: true },
      { text: "Madrid, Spain", correct: false },
      { text: "Paris, France", correct: false },
      { text: "London, England", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const message = document.getElementById("message")

let currentQuestionIndex = 0;
let score = 0;

// Hides Next btn and if clicked startQuiz is called.
const startGame = () => {
  nextBtn.style.display = "none";
};
startBtn.addEventListener("click", () => {
  if (startBtn) {
    startBtn.style.display = "none";
    startQuiz();
  }
});


const startQuiz = () => {
  reset();
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
};

const showQuestion = () => {
  reset();
  let currentQuestion = questions[currentQuestionIndex]; 
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 
  nextBtn.innerHTML = "Next";
  message.style.display="none";

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

const reset = () => {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};


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


const showScore = () => {
  reset();
  let newScore = Math.floor((score / questions.length) * 100);
  if (newScore < 60) {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}. That is ${newScore}%. Im sure you can do better than that!`;
  } else {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}. That is ${newScore}%. Congratulations you rock!!`;
  }

  nextBtn.innerHTML = "Play again!!";
  nextBtn.style.display = "block";
};


const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};


nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startGame();
