/*
===============================================================================
                Professional JavaScript
===============================================================================

Chapter 8 - else if

Difficulty : ⭐⭐⭐⭐☆

===============================================================================
📘 Theory
===============================================================================

Sometimes one decision is not enough.

Example:
Marks can be

90+  → Grade A
75+  → Grade B
35+  → Grade C
Below 35 → Fail

JavaScript checks conditions from TOP to BOTTOM.

As soon as one condition becomes true,
it executes that block and skips the rest.

Syntax

if (condition1) {

}
else if (condition2) {

}
else if (condition3) {

}
else {

}

===============================================================================
🧠 Mental Model
===============================================================================

Condition 1 ?

     │
True ─────────► Execute

False
     │
Condition 2 ?

     │
True ─────────► Execute

False
     │
Condition 3 ?

     │
True ─────────► Execute

False
     │
else

Only ONE block executes.

===============================================================================
🏛 Engine Room
===============================================================================

Example
*/

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 35) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

/*

Engine Room

82 >= 90

↓

false

↓

82 >= 75

↓

true

↓

Print Grade B

↓

Skip remaining blocks

===============================================================================
💡 Important Rules
===============================================================================

1. Conditions are checked from top to bottom.

2. Execution stops after the FIRST true condition.

3. else has no condition.

4. Order matters.

===============================================================================
🟢 Quick Check
===============================================================================

Predict the output.

Q1
*/

let age = 15;

if (age >= 60) {
    console.log("Senior");
}
else if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}

// Output: Minor

//Q2

let number = 0;

if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

// Output: Zero


/*
Q3
*/

let score = 95;

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else {
    console.log("C");
}

// Output: A


/*
Q4
*/

let temperature = 34;

if (temperature >= 40) {
    console.log("Very Hot");
}
else if (temperature >= 30) {
    console.log("Hot");
}
else {
    console.log("Normal");
}

// Output: Hot


/*
===============================================================================
🟡 Reason
===============================================================================

Q1

marks = 50

if (marks >= 90)
else if (marks >= 75)
else if (marks >= 35)
else

Reason: 
50 is not greater than or equal to 90
↓
50 is not greater than or equal to 75
↓
50 is greater than 35
↓
execute third block


Q2

number = -2

if (number > 0)
else if (number < 0)
else

Reason:
-2 is not greater than 0
↓
-2 is less than 0
↓
execute second block


Q3

age = 70

if (age >= 60)
else if (age >= 18)
else

Reason:
age is greater than 60
↓
execute first block




===============================================================================
🔴 Engine Room
===============================================================================

Q1

let marks1 = 92;

if (marks1 >= 90) {
    console.log("A");
}
else if (marks1 >= 75) {
    console.log("B");
}
else {
    console.log("C");
}

Engine Room

92 >= 90

↓

true

↓

Print A


↓

Skip remaining blocks



Q2

let value = 20;

if (value < 10) {
    console.log("Small");
}
else if (value < 30) {
    console.log("Medium");
}
else {
    console.log("Large");
}

Engine Room
20 < 10

↓

false

↓

20 < 30

↓

true

↓

Print Medium

↓

Skip remaining blocks



===============================================================================
⚫ Debug Me
===============================================================================

A junior developer writes:
let marks= 95;
if (marks >= 35)
    console.log("Pass");

if (marks >= 75)
    console.log("Good");

if (marks >= 90)
    console.log("Excellent");

He expects only ONE message.

Explain why multiple messages may print.
Ans- Because he wrote 3 separate if conditions, all the three are true hence all will execute independently.



===============================================================================
💻 Coding Lab
===============================================================================

Lab 1

Print the grade.

90+ → A
75+ → B
35+ → C
Else → Fail
*/

let studentMarks = 81;

// Write your code below
if (studentMarks >= 90){
    console.log("A");
} else if(studentMarks >= 75){
    console.log("B");
} else if(studentMarks >= 35){
    console.log("C");
} else{
    console.log("Fail");
}


/*
--------------------------------------------------------------------------

Lab 2

Classify age.

60+ → Senior

18+ → Adult

Else → Minor
*/

let personAge = 65;

// Write your code below

if (personAge >= 60){
    console.log("Senior");
} else if(personAge >= 18){
    console.log("Adult");
} else{
    console.log("Minor");
}


/*
--------------------------------------------------------------------------

Lab 3

Weather.

40+ → Very Hot

30+ → Hot

20+ → Pleasant

Else → Cold
*/

let weather = 18;

// Write your code below

if (weather >= 40){
    console.log("Very Hot");
} else if(weather >=30){
    console.log("Hot");
} else if(weather >= 20){
    console.log("Pleasant");
} else{
    console.log("Cold");
}



/*
--------------------------------------------------------------------------

Lab 4

Discount.

5000+ → 20%

2000+ → 10%

Else → No Discount
*/

let purchaseAmount = 3200;

// Write your code below

if (purchaseAmount >= 5000){
    console.log("20%");
} else if(purchaseAmount >= 2000){
    console.log("10%");
} else{
    console.log("No Discount");
}



/*
--------------------------------------------------------------------------

Lab 5

Login Attempts.

0 → Locked

1 → Last Attempt

Else → Try Again
*/

let attemptsLeft = 1;

// Write your code below
if (attemptsLeft === 0){
    console.log("Locked");
} else if(attemptsLeft === 1){
    console.log("Last Attempt");
} else{
    console.log("Try Again");
}




/*
===============================================================================
🧪 Real QA Example
===============================================================================

Survey Status

0 → Not Started

1 → In Progress

2 → Completed

Else → Invalid Status
*/

let surveyStatus = 1;

if (surveyStatus === 0) {
    console.log("Not Started");
}
else if (surveyStatus === 1) {
    console.log("In Progress");
}
else if (surveyStatus === 2) {
    console.log("Completed");
}
else {
    console.log("Invalid Status");
}

/*

Question:

Why is else if better than writing four separate if statements?

Answer: If we write 4 separate if statements, each if block will be executed even if the condition satisfied in any of the if statement.
This will unnecessarily execute the next blocks which are not required.
else if is also better in memory optamization.



===============================================================================
💼 Senior Tip
===============================================================================

Order matters.

Bad

if (marks >= 35)
else if (marks >= 90)

Good

if (marks >= 90)
else if (marks >= 75)
else if (marks >= 35)

Always write the MOST SPECIFIC condition first.

===============================================================================
🎯 Key Takeaway
===============================================================================

Condition 1

↓

False

↓

Condition 2

↓

False

↓

Condition 3

↓

True

↓

Execute

↓

Stop checking

Next Chapter

Logical Operators
(&&, ||, !)

===============================================================================