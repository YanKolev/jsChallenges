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

let scores, currentScore, activePlayer, playing;
//declaring empty variables in order to be used in the init function

//starting status
const init = function(){

 scores = [0, 0];
 currentScore = 0; //can not be inside a function, otherwise it will be always set to zero, hence its outside
 activePlayer = 0;
 playing = true;

score0Element.textContent = 0;
score1Element.textContent = 0;
current0Element.textContent = 0;
current1Element.textContent = 0;

diceElement.classList.add('hidden');
player0Element.classList.remove('player--winner');
player1Element.classList.remove('player--winner');
player0Element.classList.add('player--active');
player1Element.classList.remove('player--active');
};

init();



const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0; //making the score back to zero before the switch with ternary operator below
    activePlayer = activePlayer === 0 ? 1: 0; //allowing us to switch players(from player 0 to player 1 )
    currentScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
};


//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){

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
            switchPlayer();


        }
    }    
});

btnHold.addEventListener('click', function(){
    if(playing){

    
        //1. Add current score to active player's score
        scores[activePlayer]+= currentScore;
        //scores[1] = scores[1]+currentScore 

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2.Check if player's score is >= 100
        if (scores[activePlayer]>=20){
            //Finish the game
            playing = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove ('player--active');

        } else {
            //Switch to the next player
            switchPlayer(); 

        }
    }


});

btnNew.addEventListener('click', init);