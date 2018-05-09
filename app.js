'use strict';

//About me 5 yes or no questiosn
//use toLowercase and toUpperCase for user reply
//console.log for useer imput
//var user
//use if else
//use 'Hellow World' to test if JS file link works

var user = prompt('Hi, What is your name?');

alert('Hi ' + user);

var answer = prompt('Shall we play a game? Yes/No').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if answer is correct alert
    var answer = prompt('Great! Let\'s play!');
} else {
    //if no alert
    alert('The only winning move is not to play.');
}
