/*
===========================================================
Professional JavaScript
Module 3 - Functions & Scope
Chapter 16 - Return Values
===========================================================

Difficulty: ⭐⭐⭐⭐☆
Estimated Time: 35-45 minutes

===========================================================
⚡ VS CODE PRODUCTIVITY
===========================================================

function + Tab     -> Function snippet
clg + Tab          -> console.log()
F2                 -> Rename symbol
Ctrl + D           -> Select next occurrence
Alt + Shift + F    -> Format document
Ctrl + /           -> Comment / uncomment
Ctrl + Space       -> IntelliSense

===========================================================
🎯 THE PROBLEM
===========================================================

So far we've written functions like:

function calculateTotal(price, quantity) {
    console.log(price * quantity);
}

calculateTotal(500, 3);

This displays:

1500

But what if another part of our program needs
to USE that 1500?

For example:

let total = calculateTotal(500, 3);

We want:

total
↓
1500

console.log() only displays a value.

We need a way for a function to SEND a value
back to the code that called it.

That's what return does.

===========================================================
📘 THEORY - WHAT IS return?
===========================================================

The return statement sends a value from a function
back to the caller.

Example:

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

result contains:

30

Mental model:

Function
   ↓
calculates something
   ↓
return
   ↓
value goes back to caller

===========================================================
console.log() vs return
===========================================================

console.log():

Displays something.

return:

Sends a value back.

Example:
*/

function add(a, b) {
    console.log(a + b);
}

let result = add(10, 20);

console.log(result);

/*
Output:

30
undefined

Why?

The function printed 30,
but it did NOT return 30.

===========================================================
Now compare:
===========================================================
*/

function addNumbers(a, b) {
    return a + b;
}

let total = addNumbers(10, 20);

console.log(total);

/*
Output:

30

Now the value can be stored,
used, compared, passed to another function,
or returned from another function.

===========================================================
INTERVIEW QUESTION #1
===========================================================

What is the purpose of the return statement?

Interview-ready answer:

The return statement sends a value from a function
back to the code that called the function.

===========================================================
INTERVIEW QUESTION #2
===========================================================

What is the difference between console.log()
and return?

Interview-ready answer:

console.log() displays a value in the console,
while return sends a value back to the caller
so that the value can be stored or used elsewhere
in the program.

===========================================================
📘 RETURN STOPS FUNCTION EXECUTION
===========================================================

When JavaScript reaches return,
the function immediately stops executing.

Example:
*/

function test() {
    console.log("Before");
    return "Done";
    console.log("After");
}

console.log(test());

/*
Output:

Before
Done

"After" never executes.

Mental model:

Code before return
       ↓
     executes
       ↓
     return
       ↓
function stops

===========================================================
INTERVIEW QUESTION #3
===========================================================

What happens when JavaScript encounters return?

Answer:

The function immediately stops executing and
the specified value is returned to the caller.

===========================================================
📘 return WITHOUT A VALUE
===========================================================

A function can also use:

return;

In that case, the function returns undefined.

Example:
*/

function stopProcess() {
    console.log("Stopping...");
    return;
    console.log("This will not run");
}

let processResult = stopProcess();

console.log(processResult);

/*
Output:

Stopping...
undefined

===========================================================
📘 FUNCTION WITHOUT return
===========================================================

If a function doesn't explicitly return a value,
JavaScript returns undefined.

Example:
*/

function greet() {
    console.log("Hello");
}

let greeting = greet();

console.log(greeting);

/*
Output:

Hello
undefined

This is an important interview concept.

===========================================================
INTERVIEW QUESTION #4
===========================================================

What does a JavaScript function return if there
is no explicit return statement?

Answer:

It returns undefined.

===========================================================
📘 RETURNING DIFFERENT TYPES
===========================================================

A function can return:

number
string
boolean
object
array
another function
undefined
etc.

Example:
*/

function getNumber() {
    return 100;
}

function getMessage() {
    return "Hello";
}

function isActive() {
    return true;
}

console.log(getNumber());
console.log(getMessage());
console.log(isActive());

/*
===========================================================
📘 RETURNING AN EXPRESSION
===========================================================

You don't need to calculate first.

This:

function add(a, b) {
    return a + b;
}

is valid.

JavaScript evaluates:

a + b

then returns the result.

===========================================================
📘 RETURN VALUE CAN BE USED
===========================================================
*/

function multiply(a, b) {
    return a * b;
}

let answer = multiply(5, 10);

console.log(answer);
console.log(answer + 50);
console.log(answer > 40);

/*
Output:

50
100
true

This is the major difference from console.log().

The returned value can participate
in further operations.

===========================================================
INTERVIEW QUESTION #5
===========================================================

Can a returned value be stored in a variable?

Yes.

Example:

let result = add(10, 20);

===========================================================
📘 RETURN VALUE CAN BE PASSED TO ANOTHER FUNCTION
===========================================================
*/

function calculatePrice(price, quantity) {
    return price * quantity;
}

function applyTax(amount) {
    return amount * 1.18;
}

let price = calculatePrice(500, 3);
let finalPrice = applyTax(price);

console.log(finalPrice);

/*
This creates a chain:

calculatePrice()
       ↓
     1500
       ↓
applyTax()
       ↓
     1770

This pattern is extremely common
in professional software.

===========================================================
📘 MULTIPLE return STATEMENTS
===========================================================

A function can contain multiple return statements.

But only ONE return path executes for a
single function call.

Example:
*/

function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(25));
console.log(checkAge(15));

/*
===========================================================
INTERVIEW QUESTION #6
===========================================================

Can a function have multiple return statements?

Yes.

However, once one return statement executes,
the function stops immediately.

===========================================================
EXERCISE 1 - PREDICT THE OUTPUT
===========================================================
*/

// Q1

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// Output:



//----------------------------------------------------------

// Q2

function test() {
    return 100;
    console.log("Hello");
}

console.log(test());

// Output:



//----------------------------------------------------------

// Q3

function greet() {
    console.log("Hello");
}

let result = greet();

console.log(result);

// Output:



//----------------------------------------------------------

// Q4

function calculate(a, b) {
    return a * b;
}

let value = calculate(5, 4);

console.log(value + 10);

// Output:



//----------------------------------------------------------

// Q5

function checkNumber(number) {

    if (number > 0) {
        return "Positive";
    }

    return "Not Positive";
}

console.log(checkNumber(10));
console.log(checkNumber(-5));

// Output:



/*
===========================================================
EXERCISE 2 - DEBUG THE CODE
===========================================================
*/

// Bug 1

function add(a, b) {
    console.log(a + b);
}

let result = add(10, 20);

console.log(result);

// Requirement:
// result should contain 30.

// Fix it.





//----------------------------------------------------------

// Bug 2

function calculate(price, quantity) {
    return price * quantity;
    console.log("Calculation Complete");
}

// Requirement:
// Print "Calculation Complete"
// after calculating.

// Fix it.


//----------------------------------------------------------

// Bug 3

function getDiscount(price) {

    if (price > 1000) {
        "10%";
    }

    return "No Discount";
}

console.log(getDiscount(2000));

// Requirement:
// 2000 should return "10%"

// Fix it.





/*
===========================================================
EXERCISE 3 - COMPLETE THE CODE
===========================================================
*/

// Q1
// Create:
//
// calculateSquare(number)
//
// It should RETURN the square.
//
// Do not use console.log() inside the function.
//
// Example:
//
// let result = calculateSquare(5);
//
// result should contain 25.





//----------------------------------------------------------

// Q2
// Create:
//
// calculateTotal(price, quantity)
//
// RETURN the total.
//
// Example:
//
// calculateTotal(500, 3)
//
// should return 1500.





//----------------------------------------------------------

// Q3
// Create:
//
// isAdult(age)
//
// Return true if age >= 18.
// Otherwise return false.





/*
===========================================================
EXERCISE 4 - console.log vs return
===========================================================
*/

/*
Rewrite this function so that it returns
the calculated value instead of printing it.

Current:

function calculateTotal(price, quantity) {
    console.log(price * quantity);
}

Then:

let total = calculateTotal(500, 3);

console.log(total);

Expected:

1500
*/





/*
===========================================================
EXERCISE 5 - BUSINESS RULE
===========================================================
*/

/*
Create:

getGrade(marks)

Rules:

marks >= 90
return "A"

marks >= 75
return "B"

marks >= 60
return "C"

marks >= 35
return "D"

otherwise
return "F"

Test at least 5 different values.

Do NOT console.log() inside getGrade().
Return the result instead.
*/





/*
===========================================================
💼 REAL SOFTWARE SCENARIO
===========================================================
*/

/*
Create:

calculateFinalPrice(price, discount)

Formula:

price - discount

Example:

calculateFinalPrice(1000, 200)

should return:

800

Then:

let finalPrice = calculateFinalPrice(1000, 200);

Use finalPrice in another console.log().
*/





/*
===========================================================
🏆 CHALLENGE - FUNCTION COMPOSITION
===========================================================
*/

/*
Create:

calculateSubtotal(price, quantity)

Return:

price * quantity


Create:

calculateDiscount(subtotal)

If subtotal >= 5000
return 500

Otherwise
return 0


Then:

1. Calculate subtotal
2. Calculate discount
3. Calculate final price

Example:

price = 2000
quantity = 3

Subtotal = 6000
Discount = 500
Final Price = 5500

Important:

Each function should have ONE responsibility.
Do not put everything into one function.
*/





/*
===========================================================
🧠 INTERVIEW ROUND
===========================================================

Answer WITHOUT searching.

Q1.
What is the purpose of return?

Q2.
What is the difference between return and console.log()?

Q3.
What happens when return executes?

Q4.
What does a function return when there is
no explicit return statement?

Q5.
Can a function have multiple return statements?

Q6.
Can a returned value be stored in a variable?

Q7.
Can the return value of one function be passed
to another function?

Q8.
What happens to code written after return?

===========================================================
🎯 MENTAL MODEL
===========================================================

console.log()

Function
   ↓
Display value


return

Function
   ↓
Send value back
   ↓
Caller receives value
   ↓
Can store/use it

===========================================================
🔥 IMPORTANT DISTINCTION
===========================================================

This:

function add(a, b) {
    console.log(a + b);
}

is mainly performing an action.

This:

function add(a, b) {
    return a + b;
}

produces a value that other code can use.

This distinction becomes extremely important
when we start writing larger applications.

===========================================================
NEXT CHAPTER
===========================================================

SCOPE

We will answer:

Where does a variable exist?

Where can I access it?

What happens when a variable is created
inside a function?

What is:

Global Scope?

Function Scope?

Block Scope?

Why do let and const behave differently
from var?

And most importantly:

Why does scope matter in real applications?

===========================================================
*/