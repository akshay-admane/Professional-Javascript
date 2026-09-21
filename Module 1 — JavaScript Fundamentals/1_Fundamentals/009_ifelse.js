/*
===============================================================================
                Professional JavaScript
===============================================================================

Chapter 7 - if...else

Difficulty : ⭐⭐⭐☆☆

===============================================================================
📘 Theory
===============================================================================

if executes code only when a condition is true.

But what if we also want to execute different code when the condition is false?

That's why JavaScript provides else.

Syntax

if (condition) {
    // True block
}
else {
    // False block
}

Exactly ONE block executes.

===============================================================================
🧠 Mental Model
===============================================================================

Condition
      │
 ┌────┴────┐
 │         │
True     False
 │         │
Run A    Run B

===============================================================================
🏛 Engine Room
===============================================================================

Example 1
*/

let age = 16;

if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}

/*

Engine Room

age >= 18

↓

16 >= 18

↓

false

↓

Skip if block

↓

Enter else block

↓

Print "Minor"

===============================================================================
Example 2
*/

let score = 82;

if (score >= 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

/*

Engine Room

82 >= 35

↓

true

↓

Enter if block

↓

Skip else block

↓

Print "Pass"

===============================================================================
💡 Important Rules
===============================================================================

1. Only ONE block executes.

2. else never has a condition.

3. else executes only when if is false.

===============================================================================
🟢 Quick Check
===============================================================================

Predict the output.

Q1
*/

let temperature = 28;

if (temperature > 30) {
    console.log("Hot");
}
else {
    console.log("Normal");
}

// Output: Normal


/*
Q2
*/

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Dashboard");
}
else {
    console.log("Login Page");
}

// Output: Login Page


/*
Q3
*/

let number = 10;

if (number % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

// Output: Even


/*
Q4
*/

let marks = 35;

if (marks > 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

// Output: Fail


/*
===============================================================================
🟡 Reason
===============================================================================

Explain the Engine Room.

Q1.
if (5 > 2)
else

Reason:
5 > 2
↓
true
↓
enter if block

Q2.
if ("10" === 10)
else

Reason:
Is the type same ? No
↓
false
↓
skip if block
↓
enter else block



Q3.
if (false)
else

Reason:
false
↓
enter else block

===============================================================================
🔴 Engine Room
===============================================================================

Q1.
if ("5" == 5) {
    console.log("Equal");
}
else {
    console.log("Not Equal");
}

Engine Room:
Number("5") == 5
↓
true
↓
enter if block
↓
print ("Equal")

Q2.
let age1 = 15;

if (age1 >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}

Engine Room:
age1 >= 18
15 >= 18
↓
false
↓
enter else block
↓
print ("Minor")



===============================================================================
⚫ Debug Me
===============================================================================

A junior developer says:

"Both the if block and else block can execute in one run."

Explain why this is wrong.
Ans- This is wrong because JavaScript runs the block only when the condition becomes true.
If, if block becomes true it is executed and else is skipped.
If, if block becomes false, else block is executed.


===============================================================================
💻 Coding Lab
===============================================================================

Lab 1

Print "Eligible" if age is 18 or above,
otherwise print "Not Eligible".
*/

let age2 = 21;

// Write your code below

if (age2 >= 18){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
}

/*
--------------------------------------------------------------------------

Lab 2

Print "Positive" if number is greater than zero,
otherwise print "Zero or Negative".
*/

let number2 = -8;

// Write your code below

if (number2 > 0){
    console.log("Positive");
}else{
    console.log("Zero or Negative");
}


/*
--------------------------------------------------------------------------

Lab 3

Print "Pass" if marks are 35 or above,
otherwise print "Fail".
*/

let marks2 = 44;

// Write your code below

if (marks2 >= 35){
    console.log("Pass");
}else{
    console.log("Fail");
}


/*
--------------------------------------------------------------------------

Lab 4

Print "Correct Password"
otherwise print "Invalid Password".
*/

let password = "OpenAI123";

// Write your code below

if (password === "OpenAI123"){
    console.log("Correct Password");
}else{
    console.log("Invalid Passward");
}

/*
--------------------------------------------------------------------------

Lab 5

Print "Admin"
otherwise print "User".
*/

let isAdmin = false;

// Write your code below

if (isAdmin){
    console.log("Admin");
}else{
    console.log("User");
}


/*
===============================================================================
🧪 Real QA Example
===============================================================================

A test should stop if login fails.

*/

let loginSuccessful = false;

if (loginSuccessful) {
    console.log("Continue Test");
}
else {
    console.log("Stop Test");
}

/*

Question:

Why is this better than writing only an if statement?

Answer: If login fails, there is no use of continuing test, as test will also fail. Instead stop test



===============================================================================
💼 Senior Tip
===============================================================================

Good

if (isVisible) {
    ...
}
else {
    ...
}

Avoid

if (isVisible == true) {
    ...
}

===============================================================================
🎯 Key Takeaway
===============================================================================

Condition

↓

true / false

↓

Exactly ONE path executes

Next Chapter

else if (Multiple Decisions)

===============================================================================
*/