/*
===============================================================================
                Professional JavaScript
===============================================================================

Chapter 6 - if Statement

Difficulty : ⭐⭐⭐☆☆

===============================================================================
📘 Theory
===============================================================================

Until now, JavaScript executed every line from top to bottom.

Example:

console.log("A");
console.log("B");
console.log("C");

Output:
A
B
C

But what if we only want to execute code when a condition is true?

That's where if comes in.

Syntax:

if (condition) {
    // code
}

The code inside {} executes ONLY when the condition is true.

===============================================================================
🧠 Mental Model
===============================================================================

Think of an automatic door.

Person arrives
        │
        ▼
Check condition
        │
   ┌────┴────┐
   │         │
 True      False
   │         │
 Door      Stay Closed
 Opens

JavaScript behaves the same way.

===============================================================================
🏛 Engine Room
===============================================================================

Example

*/

let age = 20;

if (age >= 18) {
    console.log("Eligible");
}

/*

Engine Room

age >= 18
20 >= 18
true

↓

Enter block

↓

console.log()

===============================================================================
Example 2
===============================================================================
*/

let marks = 30;

if (marks >= 35) {
    console.log("Pass");
}

/*

Engine Room

30 >= 35

↓

false

↓

Skip block

↓

Program continues

===============================================================================
💡 Important Rule
===============================================================================

if does NOT check numbers.

It checks the RESULT of an expression.

Good:

if (age >= 18)

if (marks > 50)

if (isLoggedIn === true)

if (username != "")

Every condition eventually becomes either

true

or

false.

===============================================================================
🟢 Quick Check
===============================================================================

Predict the output.

Q1
*/

let temperature = 40;

if (temperature > 35) {
    console.log("Hot");
}


// Output: "Hot"

/*
Q2
*/

let battery = 20;

if (battery > 50) {
    console.log("Enough Battery");
}

// Output: No Output


/*
Q3
*/

let isAdmin = true;

if (isAdmin) {
    console.log("Access Granted");
}

// Output: "Access Granted"


/*
Q4
*/

let score = 70;

if (score < 35) {
    console.log("Fail");
}

console.log("Exam Finished");
// Output: "Exam Finished"


/*
===============================================================================
🟡 Reason
===============================================================================

Explain the Engine Room.

Q1. if (15 > 10)
Reason:
15 > 10
true → Enter block

Q2. if (100 == "100")
Reason:
100 == Number("100")
true → Enter block

Q3. if (true !== false)
Reason:
true !==false > true → Enter block

===============================================================================
🔴 Engine Room
===============================================================================

Write complete execution.

Q1.
if ("5" == 5) {
    console.log("Equal");
}

Engine Room:
Number("5") → 5 
5==5
Print: "Equal"


Q2.
if (false) {
    console.log("Hello");
}

console.log("Done");

Engine Room: 
Boolean("Hello") → true
false != true → skip the block
Print: "Done"

===============================================================================
⚫ Debug Me
===============================================================================

A junior developer says:

"If the condition is false,
JavaScript stops executing the program."

Explain why this is wrong.
Ans: If the condition is false, javascript does not stop the execution, 
It simply skips the code block for which the condition is false.

===============================================================================
💻 Coding Lab
===============================================================================

Lab 1

Print "Adult" if age is 18 or above.
*/

let age1 = 22;

// Write your code below

if (age1 >= 18){
    console.log("adult");
}

/*
--------------------------------------------------------------------------

Lab 2

Print "Negative Number" if number is below zero.
*/

let number = -12;

// Write your code below

if (number < 0){
    console.log("Negative Number");
}


/*
--------------------------------------------------------------------------

Lab 3

Print "Even" if number is divisible by 2.
*/

let num = 11;

// Write your code below

if (num % 2 == 0){
    console.log("Even");
}


/*
--------------------------------------------------------------------------

Lab 4

Print "Logged In" if loginSuccess is true.
*/

let loginSuccess = true;

// Write your code below

if (loginSuccess){
    console.log("Logged In");
}

/*
--------------------------------------------------------------------------

Lab 5

Print "Password Accepted"
only if password matches "OpenAI123"
*/

let password = "OpenAI123";

// Write your code below
if (password === "OpenAI123"){
    console.log("Password Accepted");
}



/*
===============================================================================
🧪 Real QA Example
===============================================================================

A test should continue only if login succeeds.

*/

let loginSuccessful = true;

if (loginSuccessful) {
    console.log("Navigate to Dashboard");
}

/*

Question:

What happens if loginSuccessful becomes false?

Answer: If loginSuccessful becomes false, the if block will be skipped



===============================================================================
💼 Senior Tip
===============================================================================

Professional developers avoid writing:

if (isLoggedIn == true)

Instead they write:

if (isLoggedIn)

Because isLoggedIn already contains true or false.

===============================================================================
🎯 Key Takeaway
===============================================================================

Expression

↓

Produces true / false

↓

if checks that result

↓

Execute block OR Skip block

Next Chapter:

if...else
===============================================================================