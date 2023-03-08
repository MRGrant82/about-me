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

// Final thank you
alert(userName + ', I appreciate you visiting my site.  It is definitely a work in progress.  Take care!')
