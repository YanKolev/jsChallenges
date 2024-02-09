'use strict'; //This is how you acticate strict mode for the entire script.
//has to be the first statement and no code on top of that.

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');


const interface = 'Audio';

//FUNTIONS

//Logger function: 

function logger(){ //code within curly braces is called function body and it will be executred.
    console.log('My name is Bruce');
}

//invoking function, calling or running -all interchable
// you can call it as many times as you want: example below:
logger();
logger();
logger();
//Function can pass or return data, it can re-use piece of code, and data manipulation.

function fruitProcessor(apples, oranges){ //apples and oranges- are the empty spaces/placeholders which later are replaced.
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and $
    {oranges} oranges`;
    return juice; //this will be the result of the function
}
 //the result of calling the function is the juice value that has been return, then you need to save it/ capture it by putting into a variable.

 const appleJuice = fruitProcessor(5, 0); // - called arguments (actual values)this will be inputs of the function
 console.log(appleJuice);

 const appleOrangeJuice = fruitProcessor(2,4);
 console.log(appleOrangeJuice);
 