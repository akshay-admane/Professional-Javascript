/*
===========================================================
Professional JavaScript
Module 3 - Functions & Scope
Chapter 15 - Parameters & Arguments
===========================================================

Difficulty: ⭐⭐⭐☆☆
Estimated Time: 30-40 minutes

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

We already know:

function greet() {
    console.log("Hello");
}

greet();

But this function can only do one thing.

What if we want:

Hello Akshay
Hello Rahul
Hello Priya

Do we create three functions?

No.

We want ONE function that can work with DIFFERENT DATA.

That's where parameters and arguments come in.

===========================================================
📘 THEORY - WHAT IS A PARAMETER?
===========================================================

A parameter is a variable defined in the
function declaration.

Example:

function greet(name) {
    console.log("Hello " + name);
}

Here:

name = parameter

The parameter acts as a placeholder for data.

===========================================================
📘 THEORY - WHAT IS AN ARGUMENT?
===========================================================

An argument is the actual value passed to a function when the function is called.

Example:

greet("Akshay");

"Akshay" = argument

Therefore:

function greet(name) {
    console.log("Hello " + name);
}

greet("Akshay");

name       -> parameter
"Akshay"   -> argument

===========================================================
INTERVIEW QUESTION #1
===========================================================

What is the difference between a parameter
and an argument?

Interview-ready answer:

A parameter is a variable defined in the function declaration, while an argument is the actual value passed to the function
when it is called.

Example:

function add(a, b) {
    return a + b;
}

add(10, 20);

a and b   -> parameters
10 and 20 -> arguments

===========================================================
📘 MULTIPLE PARAMETERS
===========================================================
*/

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 25);

/*
===========================================================
Important

Parameters are positional.

Example:

function introduce(name, age) {
    console.log(name);
    console.log(age);
}

introduce("Akshay", 30);

name -> "Akshay"
age  -> 30

The first argument goes to the first parameter.

The second argument goes to the second parameter.

===========================================================
INTERVIEW QUESTION #2
===========================================================

Are JavaScript function parameters type-safe?

Answer: 
No.

JavaScript is dynamically typed.

A parameter can receive different types
of values.

Example:
*/

function display(value) {
    console.log(value);
}

display(100);
display("Hello");
display(true);

/*
===========================================================
INTERVIEW QUESTION #3
===========================================================

Can a JavaScript function have multiple parameters?

Yes.

Example:
*/

function calculateTotal(price, quantity, discount) {
    console.log(price * quantity - discount);
}

calculateTotal(100, 5, 50);

/*
===========================================================
📘 ARGUMENT COUNT
===========================================================

What happens if we provide FEWER arguments?
*/

function test(a, b) {
    console.log(a);
    console.log(b);
}

test(10);

/*
Output:

10
undefined

JavaScript does NOT automatically throw an error just because an argument is missing.
The missing parameter receives undefined.

===========================================================
What if we provide MORE arguments?
===========================================================
*/

function showName(name) {
    console.log(name);
}

showName(30, true, "Akshay");

/*
The function still executes.

The extra arguments are not assigned to
named parameters.

We will later learn how to access extra arguments
using rest parameters.

===========================================================
INTERVIEW QUESTION #4
===========================================================

What happens when fewer arguments are passed
than parameters?

Answer:

The missing parameters receive undefined.

===========================================================
INTERVIEW QUESTION #5
===========================================================

What happens when more arguments are passed
than parameters?

Answer:

The function can still execute.
The extra arguments are not assigned to
the declared parameters.

===========================================================
📘 DEFAULT PARAMETERS
===========================================================

JavaScript allows us to provide a default value.

Syntax:

function greet(name = "Guest") {
    console.log("Hello " + name);
}

If no argument is supplied,
the default value is used.
*/

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Akshay");
greet();

/*
Output:

Hello Akshay
Hello Guest

===========================================================
INTERVIEW QUESTION #6
===========================================================

What is a default parameter?

Answer:

A default parameter provides a fallback value
when an argument is not provided or is undefined.

===========================================================
⚠️ IMPORTANT
===========================================================

undefined triggers the default value.

null does NOT.

Example:
*/

function welcome(name = "Guest") {
    console.log(name);
}

welcome();
welcome(undefined);
welcome(null);

/*
Expected:

Guest
Guest
null

Why?

undefined means:

"No value was provided."

null means:

"The value was intentionally set to null."

===========================================================
EXERCISE 1 - PREDICT THE OUTPUT
===========================================================
*/

// Q1

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Akshay");

// Output: Hello Akshay



//----------------------------------------------------------

// Q2

function calculate(a, b) {
    console.log(a + b);
}

calculate(10, 20);

// Output: 30



//----------------------------------------------------------

// Q3

function test(a, b) {
    console.log(a);
    console.log(b);
}

test(10);

// Output:
//10
//undefined



//----------------------------------------------------------

// Q4

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Akshay");

// Output:
// Hello Guest
// Hello Akshay



//----------------------------------------------------------

// Q5

function show(value) {
    console.log(value);
}

show(100, 200, 300);

// Output: 100

/*
===========================================================
EXERCISE 2 - DEBUG THE CODE
===========================================================
*/

// Bug 1

function add(a, b) {
    console.log(a + b);
}

add();

// What's wrong? >> a non-default parametrized function is called without arguments. To fix the function, provided the default parameters
// Fix it.

function add(a=5, b=6) {
    console.log(a+b);
}

add();


//----------------------------------------------------------

// Bug 2

function greet(name) {
    console.log("Hello " + name);
}

greet;

// Requirement:
// Print "Hello Akshay"
greet("Akshay");



//----------------------------------------------------------

// Bug 3

function calculate(price, quantity) {
    console.log(price * quantity);
}

calculate(100);

// Requirement:
// Calculate the total for 100 x 5

// Fix it.
calculate(100, 5);



/*
===========================================================
EXERCISE 3 - COMPLETE THE CODE
===========================================================
*/

// Q1
// Create a function:

// greetUser(name)

// It should print:
//
// Hello <name>

// Then call it with your name.

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Akshay");



//----------------------------------------------------------

// Q2
// Create:

// calculateSquare(number)

// It should print the square
// of the supplied number.

// Example:
//
// calculateSquare(5)
// Output: 25

function calculateSquare(number) {
    console.log(number * number);
}

calculateSquare(5);



// Q3
// Create:

// calculateTotal(price, quantity)

// It should print:

// price * quantity

// Example:
//
// calculateTotal(500, 3)
// Output: 1500

function calculateTotal(price, quantity) {
    console.log(price * quantity);
}

calculateTotal(500, 3);



/*
===========================================================
EXERCISE 4 - DEFAULT PARAMETERS
===========================================================
*/

/*
Create:

createUser(name = "Guest", role = "User")

Expected:

createUser("Akshay", "Admin")

Name: Akshay
Role: Admin

createUser("Rahul")

Name: Rahul
Role: User

createUser()

Name: Guest
Role: User
*/

function createuser(name = "Guest", role = "User") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}

createuser("Akshay", "Admin");
createuser("Rahul");
createuser();

/*
===========================================================
EXERCISE 5 - REFACTORING
===========================================================
*/

/*
Current code:

console.log("Hello Akshay");
console.log("Hello Rahul");
console.log("Hello Priya");

Refactor it using ONE function.

Expected output must remain the same.
*/
function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Akshay");
greetUser("Rahul");
greetUser("Priya");


/*
===========================================================
💼 REAL SOFTWARE SCENARIO
===========================================================
*/

/*
Create:

calculateOrderTotal(price, quantity)

Example:

calculateOrderTotal(500, 3)

Expected:

1500

Use parameters.

Do NOT create separate variables
inside the function for the supplied values.
*/

function calculateOrderTotal(price, quantity){
    console.log(price * quantity);
}

calculateOrderTotal(500, 3);


/*
===========================================================
🏆 CHALLENGE
===========================================================
*/

/*
Create:

calculateEmployeeSalary(basicSalary, bonus, deduction)

Formula:

basicSalary + bonus - deduction

Example:

calculateEmployeeSalary(50000, 5000, 2000)

Expected:

53000

Test it with at least 3 different
sets of arguments.
*/
function calculateEmployeeSalary(basicSalary, bonus, deduction){
    console.log(basicSalary+bonus-deduction);
}

calculateEmployeeSalary(250000, 23000, 1800);
calculateEmployeeSalary(200000, 67500, 3600);
calculateEmployeeSalary(230000, 45000, 3600);


/*
===========================================================
🧠 INTERVIEW ROUND
===========================================================

Answer WITHOUT searching.

Q1. What is a parameter?
Ans- A parameter is a variable defined to a function at the time of its declaration.

Q2. What is an argument?
Ans- Actual value passed for the parameters when a function is passed.

Q3. What is the difference between them?
Ans- Parameter acts as a placeholder data, but argument is an actual value for the parameters

Q4. Can a JavaScript function have multiple parameters?
Ans- Yes

Q5. What happens if an argument is missing?
Ans- if argument is missing, fuction is executed with the default value provided for the parameters.
If there are no deafult parameters the missing arguments get undefined.


Q6. What happens if extra arguments are supplied?
Ans- Function still executed and extra arguments are not passed to the parameters

Q7. What is a default parameter?
Ans- This is a fallback value used when no argument is provided

Q8. What is the difference between: undefined and null
when used with default parameters?
Ans- When argument is undefined, it falls back to the default parameters. but null returns null as it is intentionally used to set null.

===========================================================
🎯 MENTAL MODEL
===========================================================

Function definition:

function greet(name) {

}

name
↓
Parameter
↓
Placeholder

Function call:

greet("Akshay");

"Akshay"
↓
Argument
↓
Actual value

===========================================================
NEXT CHAPTER
===========================================================

Return Values

We'll move from:

function calculate(a, b) {
    console.log(a + b);
}

to:

function calculate(a, b) {
    return a + b;
}

Then:

let result = calculate(10, 20);

This introduces one of the most important
concepts in programming:

A function can PRODUCE a value.

===========================================================
*/