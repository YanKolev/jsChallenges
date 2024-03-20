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




//adding ESC keyboard event.- need still to used the event listenener, its a global event
//we usually listen on the whole document

/* In order to know which key was pressed will be stored in the event
that is gonna occur as soon as the key is pressed-> our handler function is waiting to happen
when it occurs- JS creates an object, it contains all the information about the event itself and can be accessed in the handler
function. In order to figure out which key is pressed- we need to give the function a paramenter- e 'which stands for event'
then as the even occurs, JS will call this function with the event object as an argument.
we can only define the function, we do not call it JS does. */

document.addEventListener('keydown',function(e){
    console.log(e.key);

    // if (e.key === 'Escape') { //if the pressed key is Escape and if the the modal does NOT contain the hidden class-> then execute this function to close the modal
    //     if (!modal.classList.contains('hidden')){ //using ! to make it that is NOT hidden->call the function
    //         closeModal();
    //     }
    // }

    //we can optimize it like that - optimizing nad using AND operator

    if (e.key === 'Escape'&& !modal.classList.contains('hidden')){
        closeModal();
    }
});