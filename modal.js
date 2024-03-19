'use strict';

const modal = document.querySelector('.modal'); //we store in the variable
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//Whenever we are using queryselector with a selector which matches multiple elements
// only the first one will get selected. we need to put them in a nodelist with queryselectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//making a function to use for closing the popup
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


// for (let i = 0; i <btnsOpenModal.length; i++)
// console.log(btnsOpenModal[i].textContent);

/*
In order to respond to a click, we are going to place Eventhandler function
to the element. Being that eventhandler and event lister are almost the same 
we can use them interchangebly and make it so it can listens to the event 'click'. */

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click',closeModal); //NB- do not call the function as JS will execute the code and will not work
//we want the function closemodal only to be executed as the click event happens- hence no empty brackets after it.

//making the popup close by click anywhere on the screen
overlay.addEventListener('click', closeModal);