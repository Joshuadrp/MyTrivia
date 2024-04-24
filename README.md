# My Trivia.

This website is for those who want knowledge, but that also want some fun. 

This trivia has a bank of 15 questions. But every time you play, only nine of them are displayed, and in a random order! And of course its not going to be easy, because they won't be the same questions either! (Some of them might be). Either way, you can always check the instructions if you get lost. And try again if you didn't win!

![Many mini me's!!](/assets/images/responsive.jpg)

[Do you want to see my project? Check it out!](https://joshuadrp.github.io/MyTrivia/)

---

## Table of Contents


### [User Experience (UX)](#user-experience-ux-1)
* [User Stories](#user-stories)
### [Design](#design-1)
### [Features](#features)
* [Existing Features](#existing-features)
### [Features Left to Implement](#features-left-to-implement-1)
### [Testing](#testing-1)
### [Fixed Bugs](#fixed-bugs-1)
### [Technologies Used](#technologies-used-1)
### [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used-1)
### [Deployment and local development](#deployment-and-local-development-1)
### [Credits](#credits-1)
### [Acknowledgements](#acknowledgements-1)
---

## User Experience (UX)

This website is meant for people that want to learn and have fun, and also challenge themselves!

Playability is easy, there is a welcome message at the start with recommendations on what to do. If user gets lost while playing, there is a button that displays a modal with instructions.

Users win the trivia if they get a score of 70% or more. If they don't, there is a play again button. It will display another nine questions in a random order. There is a bank of 15 questions, so the nine questions wont be the same everytime!  

### User Stories

 * First-time visitor goals
    * Get familiarized with the web app.
    * Get a feel for the user interface and the questions.
    * Play at least once and challenge themselves.
 * Returning visitor goals
    * Win the trivia.
    * Share game with friends and challenge each other.

 * Frequent user goals
    * Full knowledge of the questions and answers, inspiring users to learn more about the world.
- - -

## Design

* Site structure:
    * Content is made up of a main section with an app ID. Its divided by segments.

 * Typography
    * Raleway is the main font use for this project as its clear to read and its designed to create a comfortable and frictionless experience.

 * Wireframes
    * Notes taken in notebook.

 * Imagery used:
    * All the images in this website were taken by its author, Joshua Rodriguez. The camera used is a Canon EOS RP, mirrorless camera with a 105mm lens and a 300mm lens. The photos were taken in several countries.
 * Color scheme:
    * The colors used were chosen by the developer. The idea was to give a clean and easy to the eye look.    
  
---
## Features

* This website is for people that want to learn, challenge themselves and have fun.
* Images help to get the right answer.
* Based on the right answers, you get the score in percentage. 
* Instructions accesible through a button that will display a modal when clicked through the game.
* Random order and different questions are guaranteed, to challenge the user every time! 

### Existing Features
 
* Welcome message and information regarding the trivia.
  
![Welcome Message](/assets/images/welcome.jpg)

* Questions and Help button.
  
![Questions and Help button](/assets/images/questions-help.jpg)
  
* Score and congratulation or you can do better message!
  
![Score](/assets/images/score.jpg)

* Modal with instructions and information!
  
![Score](/assets/images/modal.jpg)

---

## Features Left to Implement

* Save multiple scores
* Increase the bank of questions.
---

## Testing

The W3C Markup Validator, W3C CSS Validator and JS Hint services were used to validate the project.

 * [W3C Markup Validtor](https://validator.w3.org/)
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 * [JS HINT](https://jshint.com/)

### Validation Results

<details>
<summary>index.html
</summary>

![Home Page](/assets/images/html-val.jpg)
</details>

<details>
<summary>style.css
</summary>

![CSS Page](/assets/images/css-val.jpg)
</details>

<details>
<summary>script.js
</summary>

![Home Page](/assets/images/js-val.jpg)
</details>

### Manual Testing

| Feature Tested                                                        | Expected Outcome                                 | Actual Outcome                                   |
| --------------------------------------------------------------------- | ------------------------------------ | --------------------------------- |                             
| Welcome message and start button displayed without pressing anything. | Message and start game button shown.             | Message and start game button shown.             |
| Click on Start Game button. | Question, image and answers displayed            | Question, image and answers displayed            |
| Click on Do You Need Help button. | Modal displayed with content in a fixed position | Modal displayed with content in a fixed position |
| Click on the X button in the modal. | Modal closes and app remains unchanged           | Modal closes and app remains unchanged           |
| If in Desktop: Hover over the questions. | Expect them to grey out before pressing the answer. | Expect them to grey out before pressing the answer. |
| Click on an answer. | If correct: Background color green. If incorrect: Background color red. | If correct: Background color green. If incorrect: Background color red. |
| When answer was pressed (incorrect or correct) | No other answer can be clickable and next button is displayed. | No other answer can be clickable and next button is displayed. |
| Next button is pressed. | Different question, image and answers displayed, next button is hidden and Do You Need Help button still visible. | Different question, image and answers displayed, next button is hidden and Do You Need Help button still visible. |
| Repeat for the rest of the questions. (Click on Answer, once clicked, after click) | Next question shown until last one is answered | Next question shown until last one is answered |
| Press next in last question | Score displayed and win/loss message shown. Play again button visible and Do You Need help button hidden. | Score displayed and win/loss message shown. Play again button visible and Do You Need help button hidden. |
| Click on Play Again button | Quiz starts again with a different set of questions in a different order and Do You Need Help button visible | Quiz starts again with a different set of questions in a different order and Do You Need Help button visible | 
| Tested on different browsers (Chrome, Opera, Safari and Microsoft Edge). | All the above tests behave the same. | All the above tests behave the same. |
| Tested on different screen sizes (phones, tablets and laptops). |  The site has a responsive design. The layout changes appropriately and maintains the page's structural integrity across device screen sizes.  |  The site has a responsive design. The layout changes appropriately and maintains the page's structural integrity across device screen sizes.  |

### Lighthouse Report

#### Mobile analysis
<details>
<summary>Application Page
</summary>

![Home Page](/assets/images/app-pg-mobile.jpg)
</details>

#### Desktop analysis
<details>
<summary>Application Page
</summary>

![Home Page](/assets/images/app-pg-desktop)
</details>

---

## Fixed Bugs

| Bugs | Fix | 
| ----------------| ----------------------|                            
| When Next button was pressed, the previous answers from the previous questions were shown as well. | Created a reset function and called it on showQuestion function and set the answerBtn to empty strings using innerHTML. | 
| When added shuffleArray function, the questions were displaying randomly as desired, but they kept repeating themselves. | Created a shuffledQuestions empty array, and created a shuffleArray function using the Fisher-Yates algorithm, and assigned the new copy of the questions array created in shuffleArray to the empty array.  | 
| When shuffledQuestions array was sliced, whenever the nextBtn was pressed in the last question the console in dev tools showed uncaught exception: undefined | In the showScore function instead of using questions.length(the original array), shuffledQuestions.length was used(the new array, which is a copy of the original)  |
| The Do You Need Help button was showing whenever the quiz started, but once the Play again button was pressed in the end, when quiz restarted, this button was not visible anymore. | Was using an If statement in the showScore function to hide/display the button, which was creating conflict with the logic. So I only hid the Do You Need help button in the showScore function, and set the display to block in the showQuestion function |


## Technologies Used

 * [HTML5](https://en.wikipedia.org/wiki/HTML5)
 * [CSS3](https://en.wikipedia.org/wiki/CSS)
 * [ES6](https://www.w3schools.com/Js/js_es6.asp)

---

## Frameworks, Libraries & Programs Used

 * [Gitpod](https://www.gitpod.io/)
    * To write the code.
 * [Git](https://git-scm.com/)
    * for vesion control.
 * [Github](https://github.com/)
    * Deployment and storage of website.
 * [Google Fonts](https://fonts.google.com/)
    * Import main font the website.
 * [Am I Responsive](https://ui.dev/amiresponsive)
    * Mockup used for displaying device frames.
---

## Deployment and local development

### GitHub Pages

***Github was used for website deployment***

1. Log in to repository, in this case we are going to use this website as an example (https://github.com/Joshuadrp/MyTrivia.git).
2. Once there, go to the top center right, and click ***settings***.
3. Locate column on the left center side, and click on ***pages***.
4. In Source dropdown menu select ***Deploy from a branch***.
5. In Branch dropdown menu select ***main*** instead of none and click save.
6. Wait for a few minutes and on the top center of the page the website link will appear, and a button saying: ***Visit site***

### Gitpod

Gitpod workspace was used. Workspace was created using Github's repository. To get this link: 

1. Go to the desired repository. On the top right center click the ***Code*** button. 
2. Press Local and select HTTPS. 
3. Copy link and create workspace in Gitpod.
4. Happy coding!

---


## Credits

### Content

 * All photos were taken by the developer.
 * Code was written by the developer with inspiration from various sources such as stackOverflow, W3Schools and Youtube. 

---

## Acknowledgements

 * Thanks to Amy Richardson and Mitko Bachvarov for always been active and helpful providing important feedback.