/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§Data 1: [17, 21, 23]
§Data 2: [12, 5, -5, 0, 4] */


/*

1) Understanding the problem:
-Array transformed to string, separated by ...
-What is the X days?- Since its forecast its the
index + 1 




2) Breaking into sub-problems:
- transform the array into string
- transfor each element to string with C
- stings needs to contain day- index+1
-add ... between elements and start end of string
*/

const  data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

`... ${data[0]}oC ...${data[0]}oC...${data[0]}oC...${data[0]}oC...`


const printForecast = function (arr){
    let str = ' ';
    for (let i =0; i< arr.length;i++){
        str = str + `${arr[i]}oC} in ${i + 1} days ... `;
    }
    console.log('...'+ str);
};

printForecast(data1);