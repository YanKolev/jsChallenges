'use strict';

// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0'); // using # when we are using ID, and dot is for classes
const score1Element = document.getElementById ('score--1'); // you can use getelementby ID
const current0Element = document.getElementById( 'current--0');
const current1Element = document.getElementById ('current--1');



const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector ('.btn--new');
const btnRoll = document.querySelector ('.btn--roll');
const btnHold = document.querySelector ('.btn--hold');


//starting status
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const score = [0, 0];
let currentScore = 0; //can not be inside a function, otherwise it will be always set to zero, hence its outside
let activePlayer = 0;


//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    //1. generating random dice roll
    const dice = Math.trunc(Math.random()* 6)+1;
    console.log(dice);

    //2.display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `pics/dice-${dice}.png`;


    //3.Check for rolled 1, if true switch to next player
    if (dice !== 1) {
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =currentScore; // selecting the score element dynamically based on which is the active player right now
    } else {
        //Swith to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0; //making the score back to zero before the switch with ternary operator below
        activePlayer = activePlayer === 0 ? 1: 0; //allowing us to switch players(from player 0 to player 1 )
        currentScore = 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');

    }
})
