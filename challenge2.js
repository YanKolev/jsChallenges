/* Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */

//Previous code: 
const markMasskg = 78;
const markheightcentimeter = 169;
const markheightmeter = markheightcentimeter/ 100;
const markBMI = markMasskg / (markheightmeter * markheightmeter);

const johnMasskg = 92;
const johnheightcentimeter = 195;
const johnheightmeter = johnheightcentimeter/ 100;
const johnBMI =johnMasskg /(johnheightmeter * johnheightmeter);

//const markHigherBMI = markBMI > johnBMI;
//console.log(markBMI, johnBMI, markHigherBMI);

if(markBMI > johnBMI){
    console.log (`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log (`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}