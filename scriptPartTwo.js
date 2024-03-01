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

//Function review

//making this function outside in order to call it by yearsofretirement
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement}`)
        return retirement; //return -exits the function
    } else {
        console.log (`${firstName} has already retiredd`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1970, 'Mike'));


// Introduction into Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
//array is a big container of variable in which we can refrence


const friends = ['Michael', 'Steven', 'Peter']; 
console.log(friends);//first way of how we use arrays// literal syntax

//second way of writing arrays

const years = new Array(1991, 1992, 2008, 2020)//An array can hold as many values as we want and any values of type.
//using array function, used parenthesis and the keyword new

// If you want to target specific from the array to the console, use it as follows: 
console.log (friends[0]);
console.log (friends[2]);

//number of elements in the array.
console.log (friends.length); //it will log all the elements- will print 3
// how to count an array
console.log(friends[friends.length - 1]); // inside the brackets we can put any expression, 
//expression can produce a value. example above- frends.length (3)- 1= 2 it will print position 2
//you can not put statement inside the square brackets- JS expect expression


//you can also add elements to the array/ to change it and mutate it
friends[2]= 'Jay';
console.log(friends);//it will replace peter->jay with square brackets syntax
//Array is not a primitive value, hence we can always mutate it even if its CONST
//you can not replace the whole array.

//array can hold many types of information

const jon = ['Jon', 'Smith', 2037- 1991, 'teacher', friends];
console.log(jon);

//Exercise

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const years = [ 1998, 1967, 2002, 2010, 2018];

cont age1 = calcAge (years[0]);
cont age2 = calcAge (years[1]);
cont age1 = calcAge (years[years.length -1]); // we use -1 to account that the index of the array is 0 based

const ages = [calcAge (years[0]), calcAge (years[1]) ] //we can place function calls in an array as they will produce a value. 
// first the function code will be ran by JS and then placed into the arrays

// Basic Array Operations

//Methods are array operations


// --ADDING ELEMENTS--
const friends = ['Michael', 'Steven', 'Peter']; 
//push method- adds elements to the end of the array

const newLength = friends.push('Jay');
//push is basically a function that directly modifies the array

//-- Method that adds elents to the beginning of the array

friends.unshift ('John');
// also returns the length of the new array 

// --REMOVING ELEMENTS-- 

// pop- opposite of push - removes last element of the array
friends.pop(); // you do not need to pass an argument, just type the function
// it does NOT length of new array- removes the removed element
const popped = friends.pop();
console.log(popped);

//shift- remove the first element, returns the removed element as well
friends.shift();
console.log(friends);

//method that returns the index of 
console.log(friends.indexOf('Steven'));


//Modern version of indexof (ES6)
// instead of returnning the index of the element but return True/False if the element is in the array
console.log (friends.includes('Steven')); //this method uses strict equality ( DOES NOT DO TYPE COERCION)
console.log (friends includes('Bob')); 

// you can write conditionals with it

if (friends.includes('Peter')) {
    console.log('You have a friend caled Peter');
}
//using it with IF statement, hence if its true-the console prints it


// -------OBJECTS----

// So far we used arrays to store multiple related values in the same variable.

const johnArray = [
    'John',
    'Smith',
    2037- 1991,
    'teaher',
    ['Michael', 'Peter', 'Steven'] // friends array inside of an array
];
//this is a data structure which combines multiple values that all belong to this john entity.
//in array there is no way we can give them a name, we can only refrence them by the order number in which they appear in the array.

//in Objects we define key value pairs (basically giving each of the values a name)
// we define it with {}- curly bracket syntax

//key value pairs- the key is the variable name + the value

const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 2037-1991,
    job: 'teacher',
    friends:['Michael', 'Peter', 'Steven']
};
//this is an object that contains 5 key-value pairs also named properties.
//Objects are the most fundamental concept in JS, simply writing object in the code is the simplest way to create.
//its called Object literal syntax- as we are literally writing the syntax.
//in Objects the order does not matter when we want to retrieve them. In arrays the ORDER MATTERS.

// DOT VS BRAKET NOTATION

const john = {
    firstName: 'John',
    lastName: 'Smith',
    age: 2037-1991,
    job: 'teacher',
    friends:['Michael', 'Peter', 'Steven']
};

// dot notation- way to extract the property from the object: 
console.log(john.lastName); //the dot is operator that retrieves the property

//bracket notation - in the bracket we can put any expression that we like, we can compute it from some operation
//operation = expression - aka something that produces value
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);
//only works with the bracket not with dot


const interestedIn = prompt ('What do you want to know about John? Choose between firstName, lastName, age, job, and friends');
console.log(john[interestedIn]); // putting any expression- hence it will look up the value of the john object
//Using the prompt function we will request the user to select and then with the
// bracket notation we will provide the info in the console

if(john[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! ");
}

// HOW TO ADD NEW PROPERTIES TO THE OBJECT

john.location = 'Portugal';
john['twitter'] = '@johnsmint123';
console.log(john);

//Challege
//"John has 3 friends, and his best friends is called Michael"

console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends [0]}`);


// OBJECT METHODS

const john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'teacher',
    friends:['Michael', 'Peter', 'Steven']
    hasDriversLicense: true,

   // calcAge: function(birthYear){
    //    return 2037-birthYear;
   // }
    //calcaAge is a property of the john - any function that is attached to a object is called
    // a method. hence you need columns after calcage

    // calcAge: function(){
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }

//in the method -this- keyword points to jonas.
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    }

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} - year old
        ${john.job} and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license.`

    }
};
console.log(john.calcAge());


// you can also access it as bracket notation
console.log(john['calcAge'](1991));

//challenge 
//"John is a 46-year old teacher, and he has a driver's license"
// adding get Summary- function 

console.log(jonh.getSummary());

// ------ Looooops------------

// for loops: 
//keeps runnging while condition is TRUE (rep <=10)
// for(let-using let as its going to change,)
//loop statement has 3 parts- first part-initial value- ex.counter
//second part- logical condition whih is checked each time before the code is exeuted
//third part- which is increase the counter after each adoration
for(let rep = 1;rep <= 10;rep = rep + 1); //basic structure 
for (let rep =1; rep <=10; rep++){ //second way which is more cleaner
    console.log(`Lifting weights repetion ${rep}`); // by using template literal u can access the updated variable.
}
//One of the most useful example of the for loop is tool through arrays: 

const johnArray = [
    'John',
    'Smith',
    2037- 1991,
    'teaher',
    ['Michael', 'Peter', 'Steven']
];
//if you want to log all 5 elements of the array to thre console.
// traditional counter variable is "i"
//we need to start it at 0, as the array is 0 based when reading elements

/* we need to achieve printing on the console all the elements of the array:
 console.log(johnarray[0]);
 console.log(johnarray[1]);
 .....
 conole.log(johnarray[4]);

 But we are using he for loop */

for(let i = 0; i < 5 ;i++){ //condition in the middle is the most tricky part-
    console.log(johnArray(i)); // we need to use the counter variable i
}
//Since Johnas array at postion 5 does not exist, 
// which means that the i counter variable should always stay below 5
// issue is that we hardcoded the array to 5 elements. 
//if we add adition element e need to change it-> compute it

for(let i = 0; i < johnArray.length ;i++){ // by using lenght we can add elements and JS will calculate them and the loop can be executed.
    console.log(johnArray(i), typeof johnArray(i));
}

//create array with types of variables

const types = [];

for(let i = 0; i < johnArray.length ;i++){ 
    //reading from john Array
    console.log(johnArray(i), typeof johnArray(i));

    //Filling types array 
    types [i] = typeof johnArray[1]; //basically making an empty array but we fill it with the exact same type as the johnarray

    // how to add element to the array // We use push as we add it to the beginning of the array
    types.push(typeof johnArray(i));
}

// practical example

const years = [1991, 2007,1969,2020];
const ages = [];

//we are going to loop years and fill the ages array

for(let i = 0; i < years.length; i++){
   ages.push(2037- years[i]);
}

// CONTINUE AND BREAK STATEMENTS 

//CONTINUE - to exit the current adoration of the loop / Break- completely terminate the loop


//If we want to use the loop to print elements that are strings- Use Continue
for(let i = 0; i < johnArray.length ;i++){ 
    if(typeof johnArray(i) !== 'string') continue;

    console.log(johnArray(i), typeof johnArray(i));
}


// Using Break statement, below is loop that will break once it reaches a number

for(let i = 0; i < johnArray.length ;i++){ 
    if(typeof johnArray(i) === 'number') break;

    console.log(johnArray(i), typeof johnArray(i));
}

// --Loop over an array backwards and Loops in loops--

const johnArray = [
    'John',
    'Smith',
    2037- 1991,
    'teaher',
    ['Michael', 'Peter', 'Steven']
];

// now we need to start at index 4, 3, 2, 1, 0

for(let i = johnArray.length - 1; i >= 0; i--){
    console.log(i, johnArray(i));
}

// Loop inside of a loop

for( let exercise = 1; exercise <4; exercise++){ //in this code we are using <4 which is a different way of expressing >=3, since 4>3 the loop does not exceed it
    console.log(`Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6 ; rep++){
        console.log(`Exercise ${exercise}:lifting weight repetion ${rep}`);
    }
}

//While Loop

//Copy the for loop from earlier to have it as comparisson

for(let rep = 1 ; rep <= 10 ; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

// Implementing the same with while loop
// still counter, condition and a way to increase the couter
// for the while loop we can only specifiy a condtion.

let rep = 1; // defining outside
while (rep <= 10){ //it will run While the condition in the brackets is true
    console.log(`Lifting weights repetition ${rep}`);
    rep++; //here we place the counter at the end of the codeblock that is repeating
}

//While loop is more versatile, it does not a counter, just a condition
// it can be any condition, even without a counter.

//simple example that does not depend on a counter

//Making dice loop

let dice = Math.trunc(Math.random() * 6) + 1 ;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1 ;
    if (dice === 6) console.log("Loop is about to end.");
}
// when dice is 6 at the begining, it will be empty value to the console,
//while loop does not depend on a counter, whenver you do not know how many adoration the loop will have

// pRactice Dev tools and issues: 

/* We work for a company building a smart home
thermometer. Our most recent task is this:  Give an array
 of temperatures of the day, calculate the temperature amplitude. Keep in mind
 that sometimes there might be a sensor error. */


const tempteratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1- understand the problem
//What is the amplitude? : Answear: difference between highest and lowest temp
//-how to compute max and min temperature
//-what is a sensor error and what do do when occurs?

//2- Breaking the problem into sub-problem
//- how to ignore errors?
//-find max value in temp array
//-find minimum value in temp array
//subtract min from max and return it-amplitude

//function for calculating the max value
const calcTempAmliture = function (temps){

    let max = temps[0];
    for(let i = 0; i <temps.length; i ++){
        if(temps[i]> max) max = temps[i];
    }
    console.log(max);
};
calcTempAmliture ([3,7,4]);
//max will be first element of the array. 

//repeating function to calc both minimum and maximum

const calcTempAmliture = function (temps){
    let max = temps[0];
    let min = temps[0];


    for(let i = 0; i <temps.length; i ++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;

    }
    console.log(max, min);
    return max = min;
};
const amplitude = calcTempAmliture (tempteratures);
console.log(amplitude);

//Problem 2: 
//Fucntion should now recieve 2 arrays of temperature
//1)- Understading he problem: With 2 arrays should we implement the functionality twice? 
//No- Just merge the 2 arrays

//Breaking the problem into sub-problems
//-how to merge 2 arrays? 

//copying the function from before as well as addind the concat funcion in order to merge the arrays

const calcTempAmlitudeNew = function (t1, t2){

    const temps = t1.concat(t2);// adding the concat functuion



    let max = temps[0];
    let min = temps[0];


    for(let i = 0; i <temps.length; i ++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;

    }
    console.log(max, min);
    return max = min;
};
const amplitudeNew = calcTempAmlitudeNew ([3, 5, 9], [9, 0 ,5]); // here we put the 2 arrays to concatinate and decipher
console.log(amplitudeNew);