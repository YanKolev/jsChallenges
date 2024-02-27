//Creating object to keep ''track of who owes us money"
const owedMoney = {}; //creates empty object
owedMoney ["Jimmy"] = 5; //we assign value of 5 to key jimmy
owedMoney ["Anna"] = 7; // same for anna as for jimmy
// if we call the key jimmy, like: owedMoney ["Jimmy"]; ->the result will be 5
owedMoney ["Jien"] // it will return undeintified because we did not set such key-value pair in the first place.

//if jimmy borrows more money, 3 more we can add the the ammound and update the object:
owedMoney ["Jimmy"] +=3;
//when called owedMoney ["Jimmy"] will be 8

//Object to track movie collection: 
//every key is a movie title and every value is another object containing information about hte movie.
//Values in objects can be objects themselves

let movies = {
    "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
    }
    };


    //if you want to find information about the movie: 
    let findingNemo = movies["Finding Nemo"];
    findingNemo.duration;
    100
    findingNemo.format;
    "DVD"
//you usestrings to access elements in an object and you use numbers to access elements in an array
//arrays are orderred and the objects are not ordered.