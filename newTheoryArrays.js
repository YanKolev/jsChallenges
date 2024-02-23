/*let randomWolrds = ["Explosion","Cave", "Princess", "Pen"];
let randomIndex = Math.floor(Math.random()*4);
randomWolrds[randomindex];*/

/*
let phrases = ["That sounds good",
"Yes, you should definetely do that",
"I'm not sure thats a good idea",
"Maybe not today?","Computer says no."];
phrases[Math.floor(Math.random() * 5)];
*/


//Making random insult generator with Math functions and arrays 

const randomBodyParts = ["Face","Nose","Hair"];
const randomAdjectives = ["Smelly","Boring","Stupid"];
const randomWords = ["Fly","Marmot","Stick","Monkey","Rat"];

//Pick a random body part from the randombodyparts array: 
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];

let randomInsult = "Your " + randomBodyPart + " is like a "+ randomAdjective +" "+ randomWord +" !!!";

console.log(randomInsult);