const questions = [
  {
    question: "Do you know where is this famous castle located?",
    image: "assets/images/q1.jpg",
    answers: [
      { text: "Prague, Czech Republic", correct: true },
      { text: "Madrid, Spain", correct: false },
      { text: "Paris, France", correct: false },
      { text: "London, England", correct: false },
    ],
  },

  {
    question: "This is a night view of a famous european city, do you know it?",
    image: "assets/images/q2.jpg",
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
    image: "assets/images/q3.jpg",
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
    image: "assets/images/q4.jpg",
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
    image: "assets/images/q5.jpg",
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
    image: "assets/images/q6.jpg",
    answers: [
      { text: "Ganges, Asia", correct: false },
      { text: "Congo River, Africa", correct: false },
      { text: "Tigris, Turkey", correct: false },
      { text: "Nile River, Egypt", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");

let currentQuestionIndex = 0;
let score = 0;
let message =
`Welcome to this awesome Trivia. If you have general knowledge about geography and historial sites, 
this game is for you. Even if you don't, you will get knowledge here. 
All you need to do, is press the start game button and select the right answer. The passing score is 60%!`;

// this function will display a welcome message and hide the next button
const willStart = () => {
  questionElement.innerHTML = message;
  nextBtn.style.display = "none";
};

// this event will trigger the startQuiz Function which will start the game, also it will hide the start game button.
startBtn.addEventListener("click", () => {
  if (startBtn) {
    startBtn.style.display = "none";
    startQuiz();
  }
});

// this function will reset score and question index and start the quiz.
const startQuiz = () => {
  reset();
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
};

const showQuestion = () => {
  reset();
  let currentQuestion = questions[currentQuestionIndex]; //this will get us the question index, like questions[0] = questions{object}
  // console.log(currentQuestion);
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // to display our question inside the h2 html element.
  nextBtn.innerHTML = "Next";

  if (currentQuestion.image) {
    const image = document.createElement("img");
    image.src = currentQuestion.image; // Set the image source
    image.alt = "image showing the location!"; // Optional: Set alternative text for accessibility
    answerBtn.appendChild(image); // Append the image to the answer-buttons div
  }

  currentQuestion.answers.forEach((answer) => {
    // this will go through the answers array using forEach method.
    const button = document.createElement("button"); //create button tag and store it in button const
    button.innerHTML = answer.text; //we will write the text from our answers array using the answer variable from the forEach method.
    button.classList.add("btn"); //add a class to the new button
    answerBtn.appendChild(button); //display const button inside our answer-buttons div

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer); //an event listener that will execute a function whenever button clicked.
  });
};

// will hide the next btn until a answer is clicked.
const reset = () => {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};

// this function will check whether the answer is true or false and will add a css class to the button depending on the state.
const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // this will verify the state of the button and assign a class accordingly, and disabled the other buttons when event is triggered.
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
};

// this function will show the score in the end, and display a play again button.
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

// this will handle our next question, once nextbtn is pressed.
const handleNextBtn = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

//When nextBtn is clicked it will check if index is less than the current questions length, and if it is it will call handleNextBtn.
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

willStart();
