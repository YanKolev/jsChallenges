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

//const age = 15;
//const isOldEnough = age >=18; //instead of the vabile, we just paste the condition

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

// Type Conversion and Type Coercion
// Type conversion is when you manually convert from 1 type to another.
// Type Coercion is when JS automatically converts.

// type conversion
const inputYear = '1991';
console.log (Number(inputYear)+18);//by using Number we convert the string into a number.
console.log (Number('George'))// it will throw error NaN- not a number since can not be converted.

console.log (String(23)); //Conversion to string.

//type coercion
console.log ('I am' + 23 + 'years old'); // plus operator converts numbers to string
console.log ('23'- '10'- 3); //minus operator triggers string to number conversion 
//if we use + it will be concatenation
// multiply and devide- converts strings ->numbers

let n = '1' + 1; //11 string '11'
n = n - 1; //string 11->converted to number, 11-1=10
console.log(n);

//Truthy and Falsy

// 5 falsy values: 0, ' '-empty string, undefined, null, NaN
console.log (Boolean(0));
console.log (Boolean(undefined));
console.log (Boolean(Marco));
console.log (Boolean(''));

const money = 0;
if(money){ //JS will convert no matter what we put as a boolean- if 0> converted to false.
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!')
}

let height;
if(height){
    console.log('Yay height is defined');
} else {
    console.log('Height is Undefined')
}

// == VS === Equality operators

 /*const age = 18;
if (age === 18) console.log('You just became an adult'); */

// === strict equality operator, does not perform typecoercio- only returns where (have to be same type)
// == loose equality operator, it does type coercion,(can compate string to a number)

// === always default to tripple equal operator

/*const favourite = prompt("what is your favorite number?");
console.log (favourite); // it will pring a string since the value of the prompt is stored in favourite

if(favourite == 23){ //loose equality- will create type coercion '23'== 23
    console.log('Cool! 23 is an amazing number!')
}*/
// if we want to use strict operator in the version(as is best practice)
// we need to wrap the function in the number function, otherwise it will throw string.

const favourite = Number(prompt("what is your favorite number?"));
console.log (favourite); 

if(favourite === 23){ //Using strict equality operator
    console.log('Cool! 23 is an amazing number!')
//if you put another number it will be False and only printout number
}else if(favourite === 7){
    console.log('7 is also a cool number')
}else if (favourite === 9){
    onsole.log('9 is also a cool number')
}else {
    console.log('Number is not 23 or 7 or 9')
}

//Different operator
// !== strict version / != loose version Always use strick version.

if (favourite !== 23) console.log('Why not 23?')


/* Boolean Logic- Not specifi for JS, used for all languaes:
 AND operator - &&: 
 when you use AND- (ex Driver's license(A) AND good vision(B))
 ONLY When A AND B statement are TRUE the result is true!
 IF any of the conditions are false => outcome will be false.
 TLDR- TRUE WHEN ALL ARE TRUE, no matter how many variables.
 
 OR operator - || :
 TRUE- when One of the conditions is true. regardless how many there are
 
 
 NOT operator- inverts true/false values
 NOT A, NOT B */

 const hasDriversLicense = true; // Varibable A
 const hasGoodVision = true; // B Variable

 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log (!hasDriversLicense);

 const shouldDrive = hasDriversLicense && hasGoodVision;

 if(hasDriversLicense && hasGoodVision){
    console.log('Sarah is able to drive!')
 } else {
    console.log ('Someone else should drive... ')
 }

 const isTired = true; //C variable
 console.log(hasDriversLicense || hasGoodVision || isTired);

// adding 3rd condition. using NOT operator for 'isTired' variable
 if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!')
 } else {
    console.log ('Someone else should drive... ')
 }

 //Switch statements

 const day = 'monday';

 switch(day){
    case 'monday': //compares day to monday of strict equality (day === 'monday')
        console.log('Plan course structure');
        console.log( 'Go to coding meetup');
        break;
    case 'tuesday':
        console.log ('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log ('Write code examples');
        break
    case 'friday':
        console.log ('Record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log ('Enjoy the weekend');
        break;
    default:
        console.log ('Not a valid day!')
 }

 if (day === 'monday'){
    console.log('Plan course structure');
    console.log( 'Go to coding meetup');
    
 } else if (day === 'tuesday'){
    console.log ('Prepare theory videos');
 } else if (day === 'wednesday'|| day === 'thursday'){
    console.log ('Write code examples');
 }
 //switch statement- write slightly more code but easily readable.

 //Statements and expressions: 
 //expressions produce values, statements are full sentences that are actions to be performed.

 //Conditional /Ternary Operator

 const age = 23;
 age >= 18 ?console.log ('I like to drink wine'): //first like is IF part
 console.log ('I like to drink water'); //second part is ELSE part

 const drink = age >= 18 ? 'wine' : 'water';
 console.log(drink);

 let drink2; // this is the statement that ternary operator shortens
 if (age >= 18) {
    drink2 = 'wine';
 } else {
    drink2 = 'water';
 }
 console.log (drink2);
 