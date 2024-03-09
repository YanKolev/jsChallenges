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

function (argument){ //on this row is the arument name
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

