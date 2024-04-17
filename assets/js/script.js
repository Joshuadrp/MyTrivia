const questions = [
  {
    question: "Q1",
    answers: [
      { text: "A1", correct: true },
      { text: "A2", correct: false },
      { text: "A3", correct: false },
      { text: "A4", correct: false },
    ],
  },

  {
    question: "Q2",
    answers: [
      { text: "A1", correct: true },
      { text: "A2", correct: false },
      { text: "A3", correct: false },
      { text: "A4", correct: false },
    ],
  },

  {
    question: "Q3",
    answers: [
      { text: "A1", correct: true },
      { text: "A2", correct: false },
      { text: "A3", correct: false },
      { text: "A4", correct: false },
    ],
  },

  {
    question: "Q4",
    answers: [
      { text: "A1", correct: true },
      { text: "A2", correct: false },
      { text: "A3", correct: false },
      { text: "A4", correct: false },
    ],
  },

  {
    question: "Q5",
    answers: [
      { text: "A1", correct: true },
      { text: "A2", correct: false },
      { text: "A3", correct: false },
      { text: "A4", correct: false },
    ],
  },

  {
    question: "Q6",
    answers: [
      { text: "A1", correct: true },
      { text: "A2", correct: false },
      { text: "A3", correct: false },
      { text: "A4", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  reset();
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
};

const showQuestion = () => {
  reset();
  let currentQuestion = questions[currentQuestionIndex]; //this will get us the question index, like questions[0] = questions[Q1]
  // console.log(currentQuestion);
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // to display our question inside the h2 html element.

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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
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

startQuiz();
