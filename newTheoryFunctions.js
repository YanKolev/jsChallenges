let ourFirstFunction = function (){
    console.log("Hello, world!");
};

ourFirstFunction(); //calling our function and ti will print hello world.

//Function arguments allow us to pass values into a function
//in order to change the function's behaviour.
//Arguments always go between the function patentheses, both when you create a function and when you call it

let sayHelloTo = function(name){
    console.log("Hello "+ name +"!");
};//the function uses and argument-name to say helo to someone you specify

function (argument) { //on this row is the arument name
    console.log("My argument was:"+ argument); //this function body can use the argument
};

// to call a function that takes and argument place the value you like to use
//between patentheses following the function name.

sayHelloTo("Nick");

//function that an draw cat faces

let drawCats = function(howManyTimes){
    for (let i = 0; i < howManyTimes; i++){
        console.log( i + "=^.^=");
    }
};
/* the body of the function is for loop that loops as many times
as the howManyTimes arguments tells it to:
since the variable i starts at 0 and repeats until it increments to howmanytimes minus 1
Each time through the loop the functin logs the string i +"=^.^="
*/ 
drawCats(5);

//You can use more than one argument, to add it separate it via comma

function (argument1, argument2){
    console.log("My first argument was: "+ argument1);
    console.log("My second argument was: "+ argument2);
}

/* following function printMultipleTimes, is like 
drawCats except that is has a second agrument called whatToDraw. */

let printMultipleTimes = function (howManyTimes, whatToDraw){
    for (let i = 0; i < howManyTimes; i++){
        console.log(i + " "+ whatToDraw);
    }
}
/* printMultipleTimes function prints the string you enger for whatToDraw as many times as you
specify with the argument howManyTimes. The second argument tells the function what to pring, 
the first argment tells the function how many times to print it. */
// remember that the function index starts from 0

printMultipleTimes( 5, "^_^");

// Returnign values from functions
// the output of a function is called a return value
//u can save a return value in a variable, pass it to another function
// or combine it with another code- ex this line adds 5 to the return value of call to math.floor (1.2345)
5 + Math.floor(1.2345);
// equals to 6
/* Mathe floor is a function that returns a number u pass, rounded to the nearest whole number. 
imagine replacing it with the return of a function call, which is number one */

let double = function (number){
    return number * 2;
};

double(3); // 3 * 2 = 6
//functions can return only one value- if u dont tell the function to return anything
// it will return undefined.

/* Upon calling a function from larger piece of code, the function's value can be used whever
that call was placed.
ex: 

double(5) + double (6); // function calls 10+12
result->22

You can also call a function into another function as argument
and the function call will be substituted with its return value

ex: 

double(double(3));
12
- First is executed the function call inside the call double(3)= 3 * 2= 6
double(6) => 6 * 2 = 12
*/

//expanding on the previous insult generator, originam function:
randomWords[Math.floor(Math.random() * randomWords.length)];

//we can turn it into a function , reuse it to pick a random word from an aray without havint to enter the same code

let pickRandomWord = function (words){
    return words [Math.floor(Math.random() * words.length)];
};

//creating randomWords array 

let randomWords = ["Planet", "Worm", "Flower", "Computer"];

pickRandomWord(randomWords); //caling the function

// Re-creating random insult generator

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = [ "Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//Pick a random body part from the array:
let randomBodyPart = randomBodyParts [Math.floor(Math.random() * 3)];

//pick a random adjective from the array: 
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

//pick a random word from the words array: 
let randomWord = randomWords[Math.floor(math.random() * 5];

//combine all the strings into a sentence

let randomString = "Your" + randomBodyPart + " is like a " +
randomAdjective + " " + randomWord + "!!!";

randomString;

//in order to NOT repeat ourselves  we can make it into a function

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = [ "Smelly", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//Join allthe random strings into: 

let randomString =  "Your" + pickRandomWord(randomBodyParts)+
" is like a " + pickRandomWord(randomAdjectives) +
" " + pickRandomWord(randomWords) + "!!!";

randomString; //calling the function here

//Making random insult generator into a function 

generateRandomInsult = function (){

    let randomBodyParts = ["Face", "Nose", "Hair"];
    let randomAdjectives = [ "Smelly", "Boring", "Stupid"];
    let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];


    let randomString =  "Your" + pickRandomWord(randomBodyParts)+
    " is like a " + pickRandomWord(randomAdjectives) +
    " " + pickRandomWord(randomWords) + "!!!";

    return randomString // only the addition of a return 
};

generateRandomInsult();

/* common way to use return is to leave a function early if any of the arguments of the functions are invalid,
but only if they are not the kinf of arguments that the function needs to run properly.*/

let fifthLetter = function (name){
    if (name.length < 5){
        return;
    }
};

return "The fifth letter of your name is "+ name[4] +".";


fifthLetter("NIcholas");

fifthLetter("Nick"); // it will return undefined as the function knows that the nae isnt long enough

/* we can use multiple return keywords inside a different if statements in a function body
to have a return a different value depending on the input.

Small sample game to award medals: */

let medalForScore = function (score){
    if (score < 3){
        return "Bronze"; // the functions ends if the score is less than 3
    }

    if (score < 7){ // we know that score must be at least 3,
        return "Silver";
    }
    return "Gold";
};
