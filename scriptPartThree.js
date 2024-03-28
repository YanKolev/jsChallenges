/* Javascript is a high-level prototype-based object-oriented
multi-paradigm interpreted or just-in-time compiled
dynamic single-threaded, garbage-collected programming language
with first-class functions and non-blocking event-loop conncurency mode.
*/

/* Paradigm: An approach and mindset of structuring code, which will direct
your coding style and technique.
-procedural, just organizing the code in liniear way
-OOP- prototype based OOP, 
almost everyting in JS in an object, without some of the primitive types. 

-prototypal inheritance: 

-functional-


-functions are treated as variables (first- class functions)

- Non-blocking event loop:
what is concurency- how JS engine handles tasks at the same time.
JS runs in a single thread, if we need a long-running task(we want non-blocking behaviour- we need event loop- that
takes the running tasks, executes them in the 'background' and puts them back in the main thread once they are finished).
*/

// Compilation vs interpretation

/* Compilation: Entire source code is converted into machine code at once,
and written to a binary file that can be executed by coputer. 

Source code -->(step 1: compilation)-->Portable file(machine code)-->(step 2 Execution)-->Program running
*Execution can happen way after the compilation.

Interpretation: Interpreter runs through the source code and executes line by line:

Source code -------(step 1: Execution line by line)--------> Program running
*machine code convertion happens right before its executed.

Modern JS engine- uses mixture of both-> JIT Just in time compilation 

Source code -->(step 1: Compilation)-->Machine code(not a portable file)-->(step 2: exeution-immediately after compilation)-->Program running

how JS works: 
step 1- Parsing the code(reading), during that the code is parsed to a data structure named
Abstract-Syntax-Tree (AST)- splitting the code into pieces, saving the code into the tree, then it generates the machine code
It has nothing to do with DOM. */

/* 
JS CALLSTACK

Compilation-> Creation of global execution context( for top-level code)- code NOT INSIDE A FUNCTION.

Execution context: Environment in which a piece of JavaScript is executed. Stores all the 
necessary information for some code to be executed.

There is always one global exection context by default.

One exection context per function: For each function call a new execution context is created.

Inside a exection context: 
1- variable environment ( let, const and var declarations, functions, arguments object)
2- scope chain- refrences to variables that are located of the current function
3- this keyword

Arrow functions dont have argument object and this keyword, they can use it them from their closes regular function parent.

Call Stack- place where exection context get stacked on top of each other, to keep track of where we are in the execution. */

/* 
SCOPE AND SCOPE CHAIN 

What is scoping?
- Scoping controls how our programs are organized and accessed. 
'Where do variables live?' or 'Where can we access a certain variable, and where not? ''

-Lexical scoping- scoping is controleld by placement of functions and blocks in the code;
" Function that is written inside another function has access to the variables of the parent function"

-Scope is the space or enviourment in which a certain variable is declared (variable enviourment in case of function)
There is global scope, function scope and block scope;

Scope of a variable: Region of our code where a certain variable can be accessed.

3 TYPES OF SCOPE: 
-Global Scope: 
1.outside of any function or block.
2.Variables declared in a global scope are accessible everywhere.


-Function Scope:
1.Variables are only accessible only inside the function, NOT OUTSIDE. 
Also called local variables. 


-Block Scope (ES6): 
1.Variables are acccessle only inside block scope.
*everything between curly baces- like IF statement or for loop.
2. However this only applies to let and const variables.(only let and const are restricted to the block they are created)
*IF used VAR then that variable can be still accessible even if its in a block, scope to the current function or global scoped,
VAR- function scoped. they ignore blocks (only if you use strict mode- USE IT ANYWAY)
3. Functions are also block scoped (only in strict mode)

SCOPE CHAIN: If one scope wants to use certain variable, but can not find it in the current scope, 
it will look up the scope chain, looking for it into the parent function
this process is called Variable lookup in scope chain.

Variables are not copied from one scope to another, 
instead scope simply look for a variable in the scope chain and use it. 

It only works upwards from the inner to the outer, Outer scope can not have access to inner scope variables.
CAN ONLY LOOK UP ON THE SCOPE CHAIN.



====SCOPE CHAIN VS CALL STACK====

Scope chain has  nothing to do with the order
in which functions were called in the callstack. */

// ====== SCOPING PRACTICE ======

function calcAge (birthYear){
    const age = 2037 - birthYear;
    
    function printAge(){
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var milenial = true;
            // Creating NEW variable with same name as outer scope's variable.
            const firstName = 'Steen';
            //Reassigning outer scope's variable
            output = 'NEW OUTPUT';


            const str = `Oh, you are are a milenial, ${firstName}`;
            console.log(str);
        }
        //Const and Let variables are only available for the block they are created.
        //Var is a function scope and the JS engine will be able to find it.(they ignore the block,as they are function scope)

        //===== FUNCTIONS ARE ALSO BLOCKSCOPED STARTING ES6
        function add (a, b){
            return a+b;
        }//scope of the function that is defined within the block- ONLY IN STRICT MODE, IF REMOVED STRICT MODE  U CAN CALL IT.



    }
    printAge();

    return age;

}

const firstName = 'John';
calcAge(1991);
//in the global scope we do not have access to  any variables defined in any other scope
//as in order the scope can be only loop UP and since the global scope is on top in can not look down to check for variables.


// ------- HOISTING AND TDZ ----------

/* Looking into variable enviourment of the execution context 
and in particular how variables are actually created in JS.

Hoisting: Makes some types of variables accessible/usabl in the code before they are actually declared.
'Variables lifted to the top of their scope'

function declarations are hoisted - we can use them before the code starts executing.

var variables- hoisted, function scoped

let and const variables- not hoisted, blockscoped

function expressions and arrows- depends if useing var or let/const (behave exacly the same way with what are they created)


TDZ- temporal Dead Zone

Each and every let/const variable get their own temporal dead zone, 
that starts at he begining of the scope and stops until the line that is defined. 
and the variable is only safe to use only AFTER TDZ. 

What is the need for TDZ? Introduced in ES6-
Makes is easier to avoid and catch errors- accessing variables 
before declaration is bad practice and should be avoided. 

-Makes const variables  actually works, so const can not be re-assigned.

-Why hosting?
Using functions before actual declaration,
var hoisting is just a byproduct. */

