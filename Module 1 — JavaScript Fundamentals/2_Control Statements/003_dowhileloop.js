/*
===========================================================
Professional JavaScript
Module 2 - Control Flow
Chapter 13 - do...while
===========================================================

⚡ VS Code Productivity

dowhile + Tab      -> do...while
Ctrl + /           -> Toggle comment
Shift + Alt + ↓    -> Duplicate line
Alt + Shift + F    -> Format document

===========================================================
🎯 The Problem
===========================================================

A while loop checks the condition FIRST.

Sometimes we want the code to execute AT LEAST ONCE,
even if the condition is false.

Example:

Display a menu once.

Ask user for input once.

Attempt login once.

For these situations JavaScript provides

do...while

===========================================================
📘 Quick Concept
===========================================================

while

Check

↓

Execute

-------------------------

do...while

Execute

↓

Check

===========================================================
Example
===========================================================
*/

let i = 1;

do {

    console.log(i);

    i++;

} while (i <= 5);

/*

Output

1
2
3
4
5

===========================================================
Important Difference
===========================================================

while

Condition

↓

Execute

------------------------

do...while

Execute

↓

Condition

===========================================================
Exercise 1 - Predict the Output
===========================================================
*/

// Q1

let count = 1;

do {

    console.log(count);

    count++;

} while (count <= 3);

// Output:
/*
1
2
3
*/


//----------------------------------------------------------

// Q2

let value = 5;

do {

    console.log(value);

    value--;

} while (value >= 1);

// Output:
/*
5
4
3
2
1
*/


//----------------------------------------------------------

// Q3

let number = 10;

do {

    console.log(number);

} while (number < 10);

// Output:
/*
10
*/



/*
===========================================================
Exercise 2 - Debug the Code
===========================================================
*/

// Bug 1

let retry = 1;

do {

    console.log("Retry " + retry);

} while (retry <= 3);

// What's wrong? >> This will go in infinite loop as retry is never updated, therefore the condition retry <= 3 always remains true, causing an infinite loop.


//----------------------------------------------------------

// Bug 2

let x = 1;

do {

    console.log(x);

    x++;

}

while(x < 1);

// What's wrong? >> While condition will never be met.

/*
===========================================================
Exercise 3 - Complete the Code
===========================================================
*/

// Q1

// Print 1 to 5 using do...while

let i = 1;
do{
    console.log(i);
    i++;
}
while(i <= 5);



//----------------------------------------------------------

// Q2

// Print 10 to 1

let num = 10;
do{
    console.log(num);
    num--;
}
while(num >=1);

/*
===========================================================
Exercise 4 - Business Rule
===========================================================
*/

/*

Attempt login at least once.

Print

Trying Login...

Attempt 1

Attempt 2

Attempt 3

*/

let attempt = 1;

console.log("Trying Login...");

// Write code
do{
    console.log("Attempt "+ attempt);
    attempt++;
}
while(attempt <= 3);


/*
===========================================================
Exercise 5 - Mini Challenge
===========================================================
*/

/*

Print

Welcome 5 times

using do...while

*/

let welcomeCount = 1;
do{
    console.log("Welcome");
    welcomeCount++;
} 
while(welcomeCount <= 5)


/*
===========================================================
💼 Backend Scenario
===========================================================

A payment gateway always attempts
the first payment.

If it fails,

retry until 3 attempts.

Print

Payment Attempt 1

...

Payment Attempt 3

*/

let paymentAttempt = 1;

// Write code

do{
    console.log("Payment Attempt "+ paymentAttempt);
    paymentAttempt++;
}
while(paymentAttempt <= 3);






/*
===========================================================
🏆 Think Like an Engineer
===========================================================

Answer in one sentence.

When would you choose

while

instead of

do...while

And vice versa?

Answer- 
While- when I don't know how many times to repeat. 
Do while- when I want code to execute at least once even if the condition is false.


===========================================================
*/