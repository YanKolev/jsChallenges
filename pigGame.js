'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0'); // using # when we are using ID, and dot is for classes
const score1Element = document.getElementById ('score--1'); // you can use getelementby ID
const diceElement = document.querySelector('.dice');

//starting status
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
