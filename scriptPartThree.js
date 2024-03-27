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
