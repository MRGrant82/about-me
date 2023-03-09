'use strict';

// Have user input their name
let userName = prompt('What is your name?');
alert('Hello ' + userName + '! Please answer a few questions for me.')
console.log(userName + 'is the user name');

// Question 1
let answer1 = prompt('Do you like fish?').toLowerCase();
let correctAnswer1 = 'yes';
if (answer1 === correctAnswer1 || answer1 === 'y') {
    alert('That is awesome ' + userName + '!  Me too!!');
} else {
    alert("That's ok, " + userName + ", fish is not for everyone. That said, I do like fish."); // My hope is that this is enough for the requirement to include the correct answer.
}
console.log('Question 1 answer: ' + answer1);

// Question 2
let answer2 = prompt('Are you from the United States of America?').toLowerCase();
let correctAnswer2 = 'yes';
if (answer2 === correctAnswer2 || answer2 === 'y') {
    alert('I am too, ' + userName + '!'); 
} else {
    alert("That's interesting " + userName + " , I would like to know more about where you are from then. I am from the United States of America."); // My hope is that this is enough for the requirement to include the correct answer.
}
console.log('Question 2 answer: ' + answer2);

// Question 3
let answer3 = prompt('Have you ever traveled to Japan?').toLowerCase();
let correctAnswer3 = 'yes';
if (answer3 === correctAnswer3 || answer3 === 'y') {
    alert('I have also traveled to Japan ' + userName + '!');
} else {
    alert(userName + ", I would definitely recommend visiting at least once. Personally, I lived in Japan for several years."); // My hope is that this is enough for the requirement to include the correct answer.
}
console.log('Question 3 answer: ' + answer3);

// Question 4
let answer4 = prompt('Have you ever ridden a motorcycle?').toLowerCase();
let correctAnswer4 = 'yes';
if (answer4 === correctAnswer4 || answer4 === 'y') {
    alert(userName + ' so did I! I ride a scooter now, though.');
} else {
    alert('Motorcycles are definitely not for everyone, ' + userName + '. I did ride for several years.'); // My hope is that this is enough for the requirement to include the correct answer.
}
console.log('Question 4 answer: ' + answer4);

// Question 5
let answer5 = prompt('Is the answer 42?').toLowerCase();
let correctAnswer5 = 'yes';
if (answer5 === correctAnswer5 || answer5 === 'y') {
    alert(userName + ' of course it is, you are correct!  Those books are amazing.');
} else {
    alert(userName + " may I recommend Hitchhiker's Guide to the Galaxy? There you will find why the answer is always 42."); // My hope is that this is enough for the requirement to include the correct answer.
}
console.log('Question 5 answer: ' + answer5);

// Question 6
//We want a random number between 1 to 100 by using the Math.random() This generates a number between 0-1 and can be a float.  We then add * 100 to give us our number that is between 1-100.  
//Math.floor rounds the number down to the nearest integer.  Finally we add a 1 to ensure we get a number between 1-100.  - Imagine a number less than 1 as the result before the 1 is added.  

let numericAnswer = Math.floor(Math.random() * 100) + 1;

// We assign the number of attempts to four
let attempts = 4;

while (attempts >= 1) {
  // Prompt the user to enter their guess
  let numericGuess = parseInt(prompt('Guess a number between 1 and 100. You have ' + attempts + ' attempts remaining.'));

  // Check if the guess is correct, too low, or too high
  if (numericGuess === numericAnswer) {
    alert('Congratulations! You guessed correctly!');
    break;
  } else if (numericGuess < numericAnswer) {
    alert('Your guess is too low. Try again.');
    
  } else {
    alert('Your guess is too high. Try again.');
    if (attempts === 1) {
      alert('You have run out of guesses.');
      break;
    }
  }

  // Decrement the number of attempts
  attempts--;
}

// Game over
if (attempts === 0) {
  alert('Sorry, you have run out of attempts. The correct answer was ' + numericAnswer + '.');
}

// Question 7
let multipleChoiceQuestion = 'Which of the Anime listed below are my absolute favorites?  There are two answers from the following: \nOverlord, That Time I got Reincarnated as a Slime, Sword Art Online, Death March to the Parallel World Rhapsody, Re:Zero - Starting Life in Another World. ';

// Set the array of possible answers with the correct answers included
let multipleChoiceAnswers = [['overlord', 'that time i got reincarnated as a slime'], ['sword art online', 're:zero - starting life in another world']];

// Set the initial response value to null as demonstrated
let response = null;

// Loop through the array of possible answers
for (let i = 0; i < multipleChoiceAnswers.length; i++) {

  // Set the current question to be asked with the current attempt number
  let question = multipleChoiceQuestion + '\n\nAttempt ' + (i + 1) + ':'; // the \n\n gives spacing

  // Set the correct answers for the current question to the first array of possible answers
  let correctAnswers = multipleChoiceAnswers[0];

  // Set the number of attempts to 6
  let attempts = 6;

  // Loop through the attempts while there are still attempts left
  while (attempts > 0) {

    // Get the user's response to the current question and convert it to lowercase
    response = prompt(question).toLowerCase();

    // If the response is in the array of correct answers
    if (correctAnswers.includes(response)) {

      // Tell the user that they have guessed correctly
      alert('Congratulations! You guessed one of my favorite Anime correctly!');

      // Remove the correct answer from the array of possible answers
      let index = correctAnswers.indexOf(response);
      correctAnswers.splice(index, 1);

      // Add another boolean to the break
      guessedCorrectly = true;

      // Break out of the current loop
      break;

    } else {

      // Decrease the number of attempts by 1
      attempts--;

      // If there are still attempts left
      if (attempts > 0) {

        // Tell the user that they have guessed incorrectly and how many attempts they have left
        alert('I\'m sorry, that is not one of my favorite Anime. You have ' + attempts + ' attempts remaining.');

      }

    }

  }

  // If the user guessed the correct answer
  if (guessedCorrectly) {

    // Display the remaining correct answer to the user
    alert('The other possible correct answer was: ' + correctAnswers[0]);

    // Break out of the outer loop
    break;

  } else {

    // If there are no attempts left
    if (attempts < 1) {

      // Tell the user that they did not guess any of the remaining correct answers and display the correct answers
      alert('I\'m sorry, you did not guess any of my remaining favorite Anime correctly. The correct answers were: ' + correctAnswers.join(', '));

    }

  }

}

let responseSection = document.querySelector('section:nth-of-type(5) p'); 
responseSection.innerHTML = 'Question 1 answer: ' + answer1 + '<br>' +
                            'Question 2 answer: ' + answer2 + '<br>' +
                            'Question 3 answer: ' + answer3 + '<br>' +
                            'Question 4 answer: ' + answer4 + '<br>' +
                            'Question 5 answer: ' + answer5 + '<br>' +
                            'Thank you again for visiting today ' + userName + ' !';
                            // Final thank you
alert(userName + ', I appreciate you visiting my site.  It is definitely a work in progress.  Take care!')