'use strict';

//About me 5 yes or no questiosn
//use toLowercase and toUpperCase for user reply
//console.log for useer imput
//var user
//use if else

var user = prompt('Hi, What is your name?');

alert('Hi, ' + user + '!');

var question1 = prompt('Shall we play a game? Y/N').toLowerCase();

console.log(question1);

if (question1 === 'yes' || question1 === 'y') {
    //if answer is correct alert
    var question1 = alert('Great! Let\'s play! Press Ok!');
} else {
    //if answer is no alert with movie quote
    alert('The only winning move is not to play.');
}

var question2 = prompt('Bonus Round! What movie was the previous question from?');

console.log(question2);

if (question2 === 'War Games' || question2 === 'war games') {
    var question2 = alert('Congrats cult movie buff!') 
} else {
    alert('Ruh roh...wrong answer. Click OK and keep going to get to know more About Me!');
}

var question3 = prompt('Does Jamilah love to travel? Y/N').toLowerCase();

console.log(question3);

if (question3 === 'yes' || question3 === 'y') {
    var question3 = alert('Yes! Will travel for FOOD and other cool stuff too.')
} else {
    alert('Are you crazy?! I LOVE to travel!');
}

var question4 = prompt('Do Jamilah love to cook? Y/N').toLowerCase();

console.log(question4);

if (question4 === 'yes' || question4 === 'y') {
    var question4 = alert('I love to eat and I Love to cook. Fun fact...I am a culinary school grad.')
} else {
    alert('NO FOOD FOR YOU!')
}

var question5 = prompt('Do Jamilah love to workout?').toLowerCase();

console.log(question5);

if (question5 === 'yes' || question5 === 'y') {
    var question5 = alert('I wouldn\'t say LOVE but I do when I have time.')
} else {
    alert('You are right! I do not LOVE it but I like to eat so...')
}
