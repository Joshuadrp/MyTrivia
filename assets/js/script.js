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
  resetState();
  currentQuestionIndex;
  score;
  showQuestion();
};

const showQuestion = () => {
  let currentQuestion = questions[currentQuestionIndex]; //this will get us the question index, like questions[0] = questions[Q1]
  // console.log(currentQuestion);
  let questionNo = currentQuestionIndex + 1; 
  questionElement.innerHTML = questionNo + ". "+ currentQuestion.question; // to display our question inside the h2 html element.

  currentQuestion.answers.forEach((answer) => {     // this will go through the answers array using forEach method. 
    const button = document.createElement("button"); //create button tag and store it in button const
    button.innerHTML = answer.text;  //we will write the text from our answers array using the answer variable from the forEach method.
    button.classList.add("btn"); //add a class to the new button
    answerBtn.appendChild(button); //display const button inside our answer-buttons div
  });
};

//we will use this fnc to remove the html original btns and to set the next button display to none as we dont want it to be shown until a button is clicked.
const resetState = () =>{ 
    nextBtn.style.display = "none";
    while(answerBtn.firstChild);
    answerBtn.removeChild(answerBtn.firstChild);
}

startQuiz();
