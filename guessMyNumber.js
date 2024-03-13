'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message'). textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Handling on click events

//event is something that happens on the page, with a listener u can wait for a certain event and act on it

//this is will select the button check, as we have 2 btn general elements, we need to specify it


const secretNumber = Math.trunc(Math.random() *20)+1; //this is the seret number

let score = 20; //variable that holds date- State variable, its not loaded in the DOM.




document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function(){
   const guess =Number(document.querySelector('.guess').value);
   console.log(typeof guess);

   if(!guess){ //we are using !-not operator in order to revert the logic
    document.querySelector('.message').textContent = 
    'No number!'; // this will change the message field when thre is no input
   } else if( guess === secretNumber) {
    document.querySelector('.message'). textContent = 'Correct Number!';
   } else if(guess > secretNumber){
     if(score > 1){
        document.querySelector('.message').textContent = 'Too high!';
        score--; //decreasing the score with the wrong guess, by 1 
        document.querySelector('.score').textContent = score;
     } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
     }
   } else if (guess < secretNumber) {

    if(score > 1){
        document.querySelector('.message').textContent = 'Too low!';
        score--; //decreasing the score with the wrong guess, by 1 
        document.querySelector('.score').textContent = score;
     } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
     }
   }
});