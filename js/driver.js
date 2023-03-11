'use strict';

// Have user input their name

let userName = prompt('What is your name?');
alert('Hello ' + userName + '! Please answer a few questions for me.')
// console.log(userName + 'is the user name');

let answer1;
let answer2;
let answer3;
let answer4;
let answer5;
let guessedCorrectly;
let response;
// Question 1
function questionOne(){
answer1 = prompt('Do you like fish?').toLowerCase();
let correctAnswer1 = 'yes';
if (answer1 === correctAnswer1 || answer1 === 'y') {
    alert('That is awesome ' + userName + '!  Me too!!');
} else {
    alert("That's ok, " + userName + ", fish is not for everyone. That said, I do like fish."); // My hope is that this is enough for the requirement to include the correct answer.
}
// console.log('Question 1 answer: ' + answer1);
}
//calling question one
questionOne();
// Question 2
function questionTwo(){
answer2 = prompt('Are you from the United States of America?').toLowerCase();
let correctAnswer2 = 'yes';
if (answer2 === correctAnswer2 || answer2 === 'y') {
    alert('I am too, ' + userName + '!'); 
} else {
    alert("That's interesting " + userName + " , I would like to know more about where you are from then. I am from the United States of America."); // My hope is that this is enough for the requirement to include the correct answer.
}
// console.log('Question 2 answer: ' + answer2);
}
// call function 
questionTwo();
// Question 3

function questionThree(){
answer3 = prompt('Have you ever traveled to Japan?').toLowerCase();
let correctAnswer3 = 'yes';
if (answer3 === correctAnswer3 || answer3 === 'y') {
    alert('I have also traveled to Japan ' + userName + '!');
} else {
    alert(userName + ", I would definitely recommend visiting at least once. Personally, I lived in Japan for several years."); // My hope is that this is enough for the requirement to include the correct answer.
}
// console.log('Question 3 answer: ' + answer3);
}
// Question 4

function questionFour(){
answer4 = prompt('Have you ever ridden a motorcycle?').toLowerCase();
let correctAnswer4 = 'yes';
if (answer4 === correctAnswer4 || answer4 === 'y') {
    alert(userName + ' so did I! I ride a scooter now, though.');
} else {
    alert('Motorcycles are definitely not for everyone, ' + userName + '. I did ride for several years.'); // My hope is that this is enough for the requirement to include the correct answer.
}
// console.log('Question 4 answer: ' + answer4);
}
// calling question four
questionFour();

// Question 5

function questionFive(){
answer5 = prompt('Is the answer 42?').toLowerCase();
let correctAnswer5 = 'yes';
if (answer5 === correctAnswer5 || answer5 === 'y') {
    alert(userName + ' of course it is, you are correct!  Those books are amazing.');
} else {
    alert(userName + " may I recommend Hitchhiker's Guide to the Galaxy? There you will find why the answer is always 42."); // My hope is that this is enough for the requirement to include the correct answer.
}
// console.log('Question 5 answer: ' + answer5);
}
//call question 5
questionFive();
// Question 6

function questionSix(){
let numericAnswer = Math.floor(Math.random() * 100) + 1;
let attempts = 4;
guessedCorrectly = false; // Add a guessedCorrectly variable to track if the user guessed correctly

while (attempts >= 1 && !guessedCorrectly) { // Add a check for guessedCorrectly in the loop condition
  let numericGuess = parseInt(prompt('Guess a number between 1 and 100. You have ' + attempts + ' attempts remaining.'));

  if (numericGuess === numericAnswer) {
    alert('Congratulations! You guessed correctly!');
    guessedCorrectly = true; // Set guessedCorrectly to true if the user guessed correctly
  } else if (numericGuess < numericAnswer) {
    alert('Your guess is too low. Try again.');
  } else {
    alert('Your guess is too high. Try again.');
    if (attempts === 1) {
      alert('You have run out of guesses.');
    }
  }

  attempts--;
}

let answer6 = guessedCorrectly ? 'yes' : 'no'; // Set answer6 to 'yes' or 'no' based on guessedCorrectly
}

//call question6
questionSix();

// Question 7
function questionSeven() {
  let multipleChoiceQuestion = 'Which of the Anime listed below are my absolute favorites?  There are two answers from the following: \nOverlord, That Time I got Reincarnated as a Slime, Sword Art Online, Death March to the Parallel World Rhapsody, Re:Zero - Starting Life in Another World. ';
  let correctAnswers = ['overlord', 'that time i got reincarnated as a slime', 'sword art online', 're:zero - starting life in another world'];
  let response = null;
  let answer7 = 'no';
  let attempts = 6;

  while (attempts > 0) {
    let question = multipleChoiceQuestion + '\n\nAttempt ' + (7 - attempts) + ':';
    response = prompt(question).toLowerCase();

    if (correctAnswers.includes(response)) {
      alert('Congratulations! You guessed one of my favorite Anime correctly!');
      let index = correctAnswers.indexOf(response);
      correctAnswers.splice(index, 1);

      answer7 = 'yes';

      if (correctAnswers.length === 1) {
        alert('The other possible correct answer was: ' + correctAnswers[0]);
      }

      break;
    } else {
      attempts--;

      if (attempts > 0) {
        alert('I\'m sorry, that is not one of my favorite Anime. You have ' + attempts + ' attempts remaining.');
      }
    }
  }

  if (attempts < 1) {
    alert('I\'m sorry, you did not guess any of my favorite Anime correctly. The correct answers were: ' + correctAnswers.join(', '));
  }
}
questionSeven();



function displayResults(){
let responseSection = document.querySelector('section:nth-of-type(5) p'); 
responseSection.innerHTML = 'Question 1 answer: ' + answer1 + '<br>' +
                            'Question 2 answer: ' + answer2 + '<br>' +
                            'Question 3 answer: ' + answer3 + '<br>' +
                            'Question 4 answer: ' + answer4 + '<br>' +
                            'Question 5 answer: ' + answer5 + '<br>' +
                            'Question 6 answer: ' + guessedCorrectly + '<br>' +
                            'Question 7 answer: ' + response + '<br>' +
                            'Thank you again for visiting today ' + userName + ' !';
// Final thank you

alert(userName + ', I appreciate you visiting my site. It is definitely a work in progress. Take care!');
}

displayResults();
