/*
===========================================================
Professional JavaScript
Module 3 - Functions & Scope
Chapter 14 - Why Functions Exist + Function Basics
Difficulty: ⭐⭐⭐☆☆
Estimated Time: 25-30 minutes
===========================================================

⚡ VS Code Productivity

function + Tab     -> Function snippet
clg + Tab          -> console.log()
Ctrl + D           -> Select next occurrence
F2                 -> Rename symbol
Alt + Shift + F    -> Format document
Ctrl + /           -> Comment / uncomment
Ctrl + Space       -> IntelliSense

===========================================================
🎯 The Problem
===========================================================

Look at this code:

console.log("Login Started");
console.log("Login Successful");

console.log("Login Started");
console.log("Login Successful");

console.log("Login Started");
console.log("Login Successful");

What problems do you see?

1. Repeated code
2. Hard to maintain
3. If the login message changes,
   we must change it in multiple places
4. Easy to introduce inconsistencies

We want to define the logic ONCE
and execute it whenever we need it.

This is why functions exist.

===========================================================
📘 Function Concept
===========================================================

A function is a reusable block of code.

Think:

Define once

↓

Call whenever needed

Syntax:

function functionName() {
    // code
}

Then call it:

functionName();

===========================================================
Example
===========================================================
*/

function login() {
    console.log("Login Started");
    console.log("Login Successful");
}

login();
login();
login();

/*
===========================================================
Important Distinction
===========================================================

Defining a function:

function login() {
    console.log("Login");
}

Nothing executes yet.

Calling a function:

login();

Now JavaScript executes the code inside it.

===========================================================
Exercise 1 - Predict the Output
===========================================================
*/

// Q1

function greet() {
    console.log("Hello");
}

greet();

// Output: Hello


//----------------------------------------------------------

// Q2

function test() {
    console.log("Start");
    console.log("End");
}

console.log("Before");
test();
console.log("After");

// Output:
/*
Before
Start
End
After
*/

//----------------------------------------------------------

// Q3

function message() {
    console.log("Inside");
}

console.log("A");
console.log("B");

// Output:
/*
A
Inside
B
*/

/*
===========================================================
Exercise 2 - Debug the Code
===========================================================
*/

// Bug 1

function login() {
    console.log("Login Successful");
}

// Requirement:
// Print "Login Successful"

// What's missing? >> function is not called




//----------------------------------------------------------

// Bug 2

function calculate() {
    console.log("Calculating");
}

calculate;
calculate;

// What's wrong? >> function is not called properly, expected calculate();

//----------------------------------------------------------

// Bug 3

function logout() {
    console.log("Logout");
}


// Requirement:
// Print Logout only once.

// Fix it.
logout();





/*
===========================================================
Exercise 3 - Complete the Code
===========================================================
*/

// Q1
// Create a function named startTest
// It should print:
// "Test Started"

function startTest() {
    console.log("Test Started");
}

startTest();



//----------------------------------------------------------

// Q2
// Create a function named endTest
// It should print:
// "Test Completed"
// Then call it.
function endTest() {
    console.log("Test Completed");
}

endTest();



//----------------------------------------------------------

// Q3
// Create a function named runTest
// It should print:
// Test Started
// Test Running
// Test Completed
//
// Call the function twice.
function runTest() {
    console.log("Test Started");
    console.log("Test Running");
    console.log("Test Completed");
}

runTest();




/*
===========================================================
Exercise 4 - Refactoring
===========================================================
*/

/*
The developer wrote:

console.log("Connecting to Database");
console.log("Database Connected");

console.log("Connecting to Database");
console.log("Database Connected");

console.log("Connecting to Database");
console.log("Database Connected");

Refactor this using a function.

Goal:

Write the database logic ONLY ONCE.
Then call the function three times.
*/
function connectToDatabase() {
    console.log("Connecting to Database");
    console.log("Database Connected");
}

connectToDatabase();
connectToDatabase();
connectToDatabase();




/*
===========================================================
Exercise 5 - Business Rule
===========================================================
*/

/*
Create these functions:

validateUser()
    prints "User Validated"

createSession()
    prints "Session Created"

logoutUser()
    prints "User Logged Out"

Then execute them in this order:

User Validated
Session Created
User Logged Out
*/

function validateUser() {
    console.log("User Validated");
}

function createSession() {
    console.log("Session Created");
}

function logOutUser() {
    console.log("User Logged Out");
}

validateUser();
createSession();
logOutUser();



/*
===========================================================
💼 Real Software Scenario
===========================================================
*/

/*
Imagine your application has this repeated code:

console.log("Opening Connection");
console.log("Executing Query");
console.log("Closing Connection");

You need this operation in 5 different places.

Create:

executeDatabaseOperation()

Then call it 5 times.

Important:

The database operation itself should be written
ONLY ONCE.
*/
function executeDatabaseOperation() {
    console.log("Opening Connection");
    console.log("Executing Query");
    console.log("Closing Connection");
}

executeDatabaseOperation();
executeDatabaseOperation();
executeDatabaseOperation();
executeDatabaseOperation();
executeDatabaseOperation();

/*
===========================================================
🏆 Challenge
===========================================================
*/

/*
Create a function:

runLoginTest()

Inside it:

1. Print "Opening Login Page"
2. Print "Entering Username"
3. Print "Entering Password"
4. Print "Clicking Login"
5. Print "Login Successful"

Then call the function 3 times.

Think:

What code would have existed WITHOUT a function?

What problem did the function solve?
*/
function runLoginTest(){
    console.log("Opening Login Page");
    console.log("Entering Username");
    console.log("Entering Password");
    console.log("Clicking Login");
    console.log("Login Successful");
}

runLoginTest();
runLoginTest();
runLoginTest();


/*
===========================================================
🧠 Think Like an Engineer
===========================================================

Answer briefly:

1. Does defining a function execute it? 
Ans: No, defining a function itself does not execute the function until it is called.

2. What is the difference between:

   function login() {}

   and

   login();

Ans: function login() is the actual method to tell the system how to login. login() is calling a function.

3. Why is repeated code a problem?
Ans: It is hard to maintain. When any variable or message is changed, it needs to be changed at multiple times.

4. Why is a function useful?
Ans: Function is useful because we don't need to write the repeated code.
Instead just create one fuction for a particular code (i.e task) and call the function multiple times wherever required.

===========================================================
🎯 Module 3 Mental Model
===========================================================

Until now:

Write code

↓

Execute code

With functions:

Define logic

↓

Give it a name

↓

Call it whenever needed

↓

Reuse the logic

===========================================================
NEXT CHAPTER
===========================================================

Parameters & Arguments

We'll move from:

login();

to:

login("Akshay");

Then:

login(username);

And eventually:

calculateTotal(price, quantity);

This is where functions become genuinely powerful.
===========================================================
*/