/*
===========================================================
Professional JavaScript
Module 2 - Control Flow
Chapter 12 - while Loop
===========================================================

⚡ VS Code Productivity

while + Tab        -> while loop
Ctrl + D           -> Select next occurrence
Ctrl + /           -> Toggle comment
Alt + Shift + F    -> Format document

===========================================================
🎯 The Problem
===========================================================

Use a for loop when you know
how many times to repeat.

Use a while loop when you DON'T know
how many times to repeat.

Syntax

while(condition){

}

JavaScript checks the condition
BEFORE every iteration.

===========================================================
Example
===========================================================
*/

let i = 1;

while(i <= 5){

    console.log(i);

    i++;

}

/*

Output

1
2
3
4
5

===========================================================
Quick Comparison
===========================================================

Known iterations? >> for

Unknown iterations? >> while

===========================================================
Exercise 1 - Predict the Output
===========================================================
*/

// Q1

let count = 1;

while(count <= 3){

    console.log(count);

    count++;

}

// Output:
/*
1
2
3
*/



//----------------------------------------------------------

// Q2

let number = 5;

while(number >= 1){

    console.log(number);

    number--;

}

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

let value = 10;

while(value < 10){

    console.log(value);

    value++;

}

// Output: No Output


/*
===========================================================
Exercise 2 - Debug the Code
===========================================================
*/

// Bug 1

let counter = 1;

while(counter <= 5){

    console.log(counter);

}

// What's wrong? >> This code will go in infinite loop as countr is not incremented hence the given condition will always keep satisfying.



//----------------------------------------------------------

// Bug 2

let x = 10;

while(x > 0){

    console.log(x);

    x++;

}

// What's wrong? >> This code will go in infinite loop as X is incremented hence the given condition will always keep satisfying. X actually needs to be deceremented. 




//----------------------------------------------------------

// Bug 3

let retry = 1;

while(retry <= 3){

    console.log("Retry");

    retry++;

}

// Requirement

/*
Retry 1
Retry 2
Retry 3

Fix it.
*/

let retry = 1;

while(retry <= 3){
    console.log("Retry "+ retry);
    retry++;
}




/*
===========================================================
Exercise 3 - Complete the Code
===========================================================
*/

// Q1

// Print 1 to 10 using while

let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

//----------------------------------------------------------

// Q2

// Print even numbers 2 to 20
let num = 2;
while(num <= 20){
    console.log(num);
    num += 2;

}




//----------------------------------------------------------

// Q3

// Print 10 to 1

let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}


/*
===========================================================
Exercise 4 - Business Rules
===========================================================
*/

/*
A file upload retries
until success.

Simulate 5 retries.

Expected

Uploading...

Retry 1

Retry 2

...

Retry 5

*/

let retryCount = 1;

console.log("Uploading...");

// Write code

while(retryCount <= 5){
    console.log("Retry "+ retryCount);
    retryCount++;
}


//----------------------------------------------------------

/*
Poll an API until
5 attempts are completed.

Print

Checking Status 1

...

Checking Status 5

*/

let attempt = 1;

// Write code

while(attempt <= 5){
    console.log("Checking Status "+ attempt);
    attempt++;
}


/*
===========================================================
Exercise 5 - Mini Challenge
===========================================================
*/

/*
Countdown

10

9

8

...

1

Blast Off!
*/

let count = 10;
console.log("Countdown");
while(count >= 1){
    console.log(count);
    count--;
}
console.log("Blast Off!");



/*
===========================================================
💼 Backend Scenario
===========================================================

Imagine a backend service waits until
all jobs are processed.

Simulate

Processing Job 1

...

Processing Job 20

*/

let job = 1;

// Write code

while(job <= 20){
    console.log("Processing Job "+ job);
    job++;
}


/*
===========================================================
🏆 Bonus Challenge
===========================================================

Print numbers 1 to 30.

If divisible by 3

Print Fizz

Otherwise print number.

Solve using while.

===========================================================
*/

let num = 1;

while (num <= 30){
    if (num % 3 ===0){
        console.log("Fizz");
    }else{
        console.log(num);
    }

    num++;
}