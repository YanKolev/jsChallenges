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


let secretNumber = Math.trunc(Math.random() *20)+1; //this is the seret number

let score = 20; //variable that holds date- State variable, its not loaded in the DOM.







document.querySelector('.check').addEventListener('click', function(){
   const guess =Number(document.querySelector('.guess').value);
   console.log(typeof guess);

   // When there is no input
   if(!guess){ //we are using !-not operator in order to revert the logic
    document.querySelector('.message').textContent = 
    'No number!'; // this will change the message field when thre is no input

    //When player wins
   } else if( guess === secretNumber) {
    document.querySelector('.message'). textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; //color needs to be specified in a string

    document.querySelector('.number').style.width = '30rem'; //modification need to be specified in a string.


    //When guess is too high
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
      //When guess is too low
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


if (score > highscore){
   highscore = score;
   document.querySelector('.highscore').textcontent = highscore;
}


document.querySelector('.again').addEventListener('click', function(){
   score = 20;
   secretNumber = Math.trunc(Math.random() *20)+1;

   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';

   document.querySelector('body').style.backgroundColor = '#222'; 

   document.querySelector('.number').style.width = '15rem'; 


});