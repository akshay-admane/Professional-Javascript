/*
===========================================================
Professional JavaScript
Module 2 - Control Flow
Chapter 11 - for Loop
===========================================================

⚡ VS Code Productivity

for + Tab           -> for loop
forof + Tab         -> for...of loop (later)
forin + Tab         -> for...in loop (later)
Shift + Alt + ↓     -> Duplicate line
Alt + ↑ / ↓         -> Move line
Ctrl + D            -> Select next occurrence
Ctrl + Shift + K    -> Delete line
Alt + Shift + F     -> Format document

===========================================================
📘 Quick Concept

Until now...

JavaScript executed a statement once.

Example:

console.log("Login Test");

What if there are 1000 tests?

Should we write

console.log("Login Test 1");
console.log("Login Test 2");
...
console.log("Login Test 1000");

No.

A loop tells JavaScript

"Repeat this work."

Syntax

for(initialization; condition; increment){

}

===========================================================
Understanding the 3 Parts
===========================================================

Example

for(let i = 1; i <= 5; i++){

    console.log(i);

}

Part 1

let i = 1

Runs ONLY once.

Creates the loop variable.

----------------------------------

Part 2

i <= 5

Checked BEFORE every iteration.

If true

→ execute loop

If false

→ exit loop

----------------------------------

Part 3

i++

Runs AFTER every iteration.

Increases i by 1.

===========================================================
Example
===========================================================
*/

for(let i = 1; i <= 5; i++){

    console.log(i);

}

/*

Output

1
2
3
4
5

===========================================================
Exercise 1 - Predict the Output
===========================================================
*/

// Q1

for(let i = 1; i <= 3; i++){

    console.log(i);

}

/* Output:
1
2
3
*/


//----------------------------------------------------------

// Q2

for(let i = 5; i >= 1; i--){

    console.log(i);

}

/*Output:
5
4
3
2
1
*/


//----------------------------------------------------------

// Q3

for(let i = 2; i <= 10; i += 2){

    console.log(i);

}

/* Output:
2
4
6
8
10
*/




//----------------------------------------------------------

// Q4

for(let i = 10; i < 10; i++){

    console.log(i);

}

// Output: <No Output>





/*
===========================================================
Exercise 2 - Debug the Code
===========================================================
*/
// Bug 1

for(let i = 1; i <= 5; i--){

    console.log(i);

}

// What's wrong?
//This will be an infinite loop, as i <= 5 will always satisfy because i will keep decrementing.



//----------------------------------------------------------

// Bug 2

for(let i = 1; i <= 5; i++){
    

}
console.log(i);

// What's wrong?
//i in console.log(i) remains undefined as it is not initialized outside the loop.



//----------------------------------------------------------

// Bug 3

// for(let i = 1; i <= 5; i++){

//     console.log("Iteration");

// }

// Requirement:

// Print

// Iteration 1
// Iteration 2
// Iteration 3...

// Fix it.

for (let i = 1; i <= 5; i++){
    console.log("Iteration "+ i);

}




/*
===========================================================
Exercise 3 - Complete the Code
===========================================================
*/

// Q1

// Print numbers 1 to 20

for ( let i = 1; i <= 20; i++){
    console.log(i);
}

//----------------------------------------------------------

// Q2

// Print even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2){
    console.log(i);
}


//----------------------------------------------------------

// Q3

// Print odd numbers from 1 to 19

for (let i = 1; i <= 19; i += 2){
    console.log(i);
}


/*
===========================================================
Exercise 4 - Business Rules
===========================================================
*/

/*

A survey contains 5 assets.

Print

Inspecting Asset 1

Inspecting Asset 2

...

Inspecting Asset 5

*/

for (let asset = 1; asset <= 5; asset++){
    console.log("Inspecting Asset "+ asset);
}

//----------------------------------------------------------

/*

Execute 10 API validations.

Print

Running API Validation 1

...

Running API Validation 10

*/

for (let apiNumber = 1; apiNumber <= 10; apiNumber++){
    console.log("Running API Validation "+ apiNumber);
}


/*
===========================================================
Exercise 5 - Mini Challenge
===========================================================
*/

/*

Print the multiplication table of 7.

Expected

7 x 1 = 7

7 x 2 = 14

...

7 x 10 = 70

*/

for (let i = 1; i <= 10; i++){
    console.log("7 X " + i +" = " + 7*i);
}


/*
===========================================================
💼 Backend Scenario
===========================================================

100 users must receive a welcome email.

Don't create 100 console.log statements.

Use a loop.

Print

Sending email to User 1

...

Sending email to User 100

*/

for (let user = 1; user <= 100; user++){
    console.log("Sending email to user "+ user);

}


/*
===========================================================
🏆 Bonus Challenge
===========================================================

Print numbers from 1 to 30.

If the number is divisible by 3

print

Fizz

Otherwise print the number.

Example

1
2
Fizz
4
5
Fizz

...

(Hint:
Use what you've already learned:
for + if + %)

===========================================================
*/

for (let num = 1; num <= 30; num++){
    if (num % 3===0){
        console.log("Fizz");
    }else{
        console.log(num);
    }
}