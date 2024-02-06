//Variable and Values exercise
let homeCountry = "Bulgaria";
let originContinent = "Europe";
let countryPopulation = "Six Million";
console.log(homeCountry);
console.log(originContinent);
console.log(countryPopulation);

//Two main datatypes in JS: Object or Primitive value
/* 7 different types:
1-Number: Floating point numbers- used for integers and floats
2-String: Sequence of charaters- used for text
3-Boolean: logical type true or false
4-Undefined- value taken by a variable that is not yet defined(empty value)
5-Null-Also means empty value
6-Symbol (ES2015): value that is unique and can not be change
7-BigInt (ES2020): larger integers the Nymber type can hold */

//When you declare a variable an use let (let javascriptIsFun = true,)
//you can assign new value to the already existing variable you can write it: javascriptIsFun = "Yes!"

//Variables:
//If you want to mutate variable, or assign some other value- use let
//Const- used for when the value will stay the same.=> leads to type error, you can not declate EMPTY Const variables.
//Best practice- const by default, ONLY if you are sure-let.
//AVOID VAR, knowledge for legacy reasons-works the same as let.


// Assignment operators
let x = 10 + 5;//15
x +=10;// x = x+10=25
x *=4; //x = x *4 = 100
x++; //x = x+1
x--; // x =x-1
console.log(x);

// ES6-Template literals- used with backticks ` `- you can write a sting with ${}
// Can be used directly in console-log. Using for irregular strings.
// Also used for multiple line strings- also used for multiline html elements

const age = 15;
const isOldEnough = age >=18; //instead of the vabile, we just paste the condition

//if()-condition that gets evaluated, if that condition is true, execute code in curly braces{}

if (age >=18){
    console.log('Sarah can start her driving liscense');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`)
}

const birthYear = 1991;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);