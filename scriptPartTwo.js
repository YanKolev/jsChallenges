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
 
//Funtion Declaration
 function calcAge1('birthYear'){
    return 2037 - birthYear;
 }

 const age1 = calcAge1(1991);
 console.log(age1);

 //function expression (Expression produces value)

 const calcAge2 = function(birthYear){ //function without a name- an expression
    return 2037 - birthYear; //this function stores the value in calcage2
 }

 const age2 = calcAge2(1991);
 console.log(age1, age2);

 //you can call function declaration before they are defined in the code


 //Arrow functions (Added in ES6)

//Re-using the function to compare it with arrow function
 const calcAge2 = function(birthYear){ 
    return 2037 - birthYear; 
 }

 const calcAge3 = birthYear => 2037 - birthYear; //Variant of function expression
 const age3 = calcAge3(1991); // you can ommit return ONLY if you have 1 line function
 console.log(age3);

 const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; // here you have more than 1 line function, hence you need to use return
 }

console.log(yearsUntilRetirement(1991)); //if oyou have only 1 paramenter

//if you want to have more than one paramenter, you need to wrap birthYear in parentesis
// example below: 
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
    }
console.log(yearsUntilRetirement(1991), 'John');
console.log(yearsUntilRetirement(1980), 'Bob');  

//Functions calling out from other functions

// re-using function for explanation: 

function cutFruitPieces(fruit){
    return fruit * 4;
}





function fruitProcessor(apples, oranges){ 
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and 
    ${orangePieces} pieces of orange.`;
    return juice;
}

fruitProcessor(2, 3);