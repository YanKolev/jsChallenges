//Basic if-else structure
/*
if (condition) {
    console.log("Do something");
    } else {
    console.log("Do something else!");
    }
//Variant 2:
if (condition1) {
    console.log("Do this if condition 1 is true");
    } else if (condition2) {
    console.log("Do this if condition 2 is true");
    } else if (condition3) {
    console.log("Do this if condition 3 is true");
    } else {
    console.log("Do this otherwise");
    }


*/

//Wile loops -Keep doing this while this
//condition is true. Stop when the condition becomes false.

/*
while (condition) { //the condition here is checked each time loop repeats
    console.log("Do something");
    i++;
    }

*/


/*

//Counting sheep with a while loop

let sheepCounted = 0;
 while (sheepCounted < 10) {
 console.log("I have counted " + sheepCounted + " sheep!");
sheepCounted++;
}
console.log("Zzzzzzzzzzz");

*/

/* This repeats until sheepCounted becomes 10, at which point the
condition becomes false (10 is not less than 10), and the program
moves on to whatever comes after the loop. In this case, it prints
Zzzzzzzzzzz.
*/

//For loops
/* you create
a variable, specify the condition, and say how the variable should
change after each cycle—all before you reach the body of the loop. */

/*
for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted " + sheepCounted + " sheep!");
    }
    console.log("Zzzzzzzzzzz");

// basic for loop structure
    for (setup; condition; increment) {
    console.log("Do something");
    }

// Using for loops with arrays and strings

let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (let i = 0; i < animals.length; i++) {
console.log("This zoo contains a " + animals[i] + ".");
}
*/

/*In this loop, i starts at 0 and goes up to one less than
animals.length, which in this case is 3. The numbers 0, 1, 2,
and 3 are the indexes of the animals in the animals array.
every time around the loop, i is a different index,
and animals[i] is another animal from the animals array. When i is 0, animals[i] is "Lion". When i is 1,
animals[i] is "Flamingo", and so on. */


for (let x = 3; x < 10000; x= x *3){
    console.log(x);
}
/*
We set x to 2 and increment the value of x using x = x * 2;,
which will double the value of x each time the loop runs. */