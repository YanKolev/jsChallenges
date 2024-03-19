'use strict';

const modal = document.querySelector('.modal'); //we store in the variable
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//Whenever we are using queryselector with a selector which matches multiple elements
// only the first one will get selected. we need to put them in a nodelist with queryselectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// for (let i = 0; i <btnsOpenModal.length; i++)
// console.log(btnsOpenModal[i].textContent);

/*
In order to respond to a click, we are going to place Eventhandler function
to the element. Being that eventhandler and event lister are almost the same 
we can use them interchangebly and make it so it can listens to the event 'click'. */

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
});