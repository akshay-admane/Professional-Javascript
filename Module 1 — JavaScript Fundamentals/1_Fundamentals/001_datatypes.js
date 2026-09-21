/*
===============================================================================
                    Professional JavaScript
===============================================================================

Chapter 1 - Data Types

Difficulty : ⭐☆☆☆☆
Estimated Time : 1.5 - 2 Hours

-------------------------------------------------------------------------------
Learning Objectives
-------------------------------------------------------------------------------

By the end of this chapter you will be able to:

✓ Explain what a Data Type is.
✓ Identify JavaScript's primitive data types.
✓ Use typeof confidently.
✓ Predict the output of typeof.
✓ Understand why JavaScript needs data types.
✓ Avoid common beginner mistakes.

===============================================================================
1. Before We Start
===============================================================================

Let's ask a simple question.

Imagine I ask you to store:

25

Easy.

Now I ask you to store:

"Akshay"

Also easy.

Now I ask you to store:


true

Still easy.

But here's the question...

How does the computer know whether

25

means a Number,

or "25"

means Text,

or true

means a Boolean?

It has to know.

Otherwise imagine this:

25 + 10

Should become

35

or

2510 ?

The computer cannot guess.

That's why every value has a DATA TYPE.

===============================================================================
2. What is a Data Type?
===============================================================================

A Data Type tells JavaScript:

"What kind of value is stored here?"

Think of a courier company.

Every parcel has a label.

Fragile

Food

Electronics

Documents

The delivery person handles each parcel differently.

JavaScript does exactly the same.

Every value carries a label.

Examples

25            → Number

"Akshay"      → String

true          → Boolean

null          → Null

undefined     → Undefined

===============================================================================
3. Primitive vs Non-Primitive
===============================================================================

JavaScript has many data types.

But don't try to memorize them.

Instead divide them into two groups.

Primitive Types

- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Non-Primitive Types

- Object

That's it.

Arrays

Functions

Dates

Maps

Sets

are all Objects internally.

We'll learn why later.

For now, just remember this classification.

===============================================================================
4. Number
===============================================================================

Numbers represent numeric values.

Examples

25

-100

3.14

999999

0

Examples

*/

let age = 25;

console.log(typeof age);
console.log(age);

let temperature = -10;
const pi = 3.14159;

console.log(age);
console.log(temperature);
console.log(pi);

/*

JavaScript has only ONE Number type.

There is no separate int, float or double like Java or C#.

25 and 25.75 are both Number.

===============================================================================
5. String
===============================================================================

A String is simply text.

Strings can use

Single Quotes

Double Quotes

Backticks (We'll learn later)

Examples

*/

let firstName = "Akshay";
let city = 'Pune';

console.log(firstName);
console.log(city);

/*

Important

25

is NOT the same as

"25"

One is Number.

One is String.

===============================================================================
6. Boolean
===============================================================================

Boolean has only two values.

true

false

Nothing else.

Example

*/

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(isAdmin);

/*

Later we'll use Booleans inside conditions.

===============================================================================
7. Undefined
===============================================================================

Suppose you create a variable.

*/

let salary;

/*

Did we store anything?

No.

JavaScript automatically gives it

undefined

Think of it as

"I created the box.

Nothing has been placed inside it yet."

*/

console.log(salary);

/*

Output

undefined

===============================================================================
8. Null
===============================================================================

Null is different.

*/

let manager = null;
console.log(manager);

/*

Null means

"I intentionally want this variable to contain nothing."

Undefined means

"No value has been assigned."

Null means

"I deliberately assigned an empty value."

We'll spend an entire chapter on the difference later.

For now just understand the intention.

===============================================================================
9. typeof Operator
===============================================================================

JavaScript gives us a very useful operator.

typeof

It tells us the type of a value.

Examples

*/

console.log(typeof 25);

console.log(typeof "Akshay");

console.log(typeof true);

console.log(typeof undefined);

console.log(typeof null);

/*

Expected Output

number

string

boolean

undefined

object   <-- Strange!

Wait...

Why is null an object?

Because of a historical bug in JavaScript.

This bug cannot be fixed today because millions of existing websites
depend on the current behavior.

So remember this interview question:

typeof null

returns

"object"

even though null is NOT actually an object.

===============================================================================
10. Common Mistakes
===============================================================================

Mistake 1

25

and

"25"

are NOT the same.

-------------------------------------------------------------------------------

Mistake 2

true

is NOT

"true"

One is Boolean.

One is String.

-------------------------------------------------------------------------------

Mistake 3

undefined

and

null

are NOT the same.

===============================================================================
11. Programming Mindset
===============================================================================

Variables answer the question

"Where is the data stored?"

Data Types answer the question

"What kind of data is stored?"

These are two completely different ideas.

Don't mix them.

===============================================================================
12. Exercises
===============================================================================

Predict WITHOUT running.

Exercise 1

console.log(typeof 100); //number

Exercise 2

console.log(typeof "100");  //string

Exercise 3

console.log(typeof false);  //boolean

Exercise 4

let company;

console.log(typeof company); //undefined

Exercise 5

let manager = null;

console.log(typeof manager);  //object

Exercise 6

let price = 999;

console.log(price); //999

console.log(typeof price);  //number

Exercise 7

let isStudent = true;

console.log(isStudent); //true

console.log(typeof isStudent);  //boolean

===============================================================================
13. Challenge
===============================================================================

Without using VS Code.

Tell me the type of each.

42  //number

"Hello"  //string

false  //boolean

undefined  //undefined

null  //object

"false"  //string

"42"  //string

0  //number

true  //boolean

""  //string

===============================================================================
*/
