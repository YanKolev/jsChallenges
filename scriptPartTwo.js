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

console.log(jonh.getSummary();)