/*
===============================================================================
                     Professional JavaScript
===============================================================================

Chapter 2 - Type Conversion (Part 1)

Difficulty : ⭐⭐☆☆☆
Estimated Time : 1.5 Hours

-------------------------------------------------------------------------------
Learning Objectives
-------------------------------------------------------------------------------

By the end of this chapter you will be able to:

✓ Explain what Type Conversion is.
✓ Differentiate Implicit and Explicit Type Conversion.
✓ Predict JavaScript's behaviour.
✓ Use Number(), String() and Boolean().
✓ Understand why JavaScript converts values automatically.

===============================================================================
1. A Real Life Example
===============================================================================

Imagine you're filling a bank form.

Age:
25

Now imagine you submit:

"Twenty Five"

The bank employee has two choices.

Option 1:
Reject the form.

Option 2:
Convert it into the required format.

Programming languages face the same problem.

Sometimes values need to change from one type to another.

This process is called

TYPE CONVERSION.

===============================================================================
2. What is Type Conversion?
===============================================================================

Definition

Type Conversion means converting a value from one data type
to another.

Example

Number  ---> String

String  ---> Number

Boolean ---> Number

etc.

Example

*/

let age = 25;

let ageAsString = String(age);

console.log(ageAsString);          // "25"
console.log(typeof ageAsString);   // string

/*
The value didn't disappear.

Only its TYPE changed.

===============================================================================
3. Why Do We Need Type Conversion?
===============================================================================

Imagine an e-commerce website.

A user enters:

Age

25

But every HTML input field sends data as TEXT.

JavaScript receives:

"25"

Suppose we want to calculate:

age + 5

Should JavaScript produce

30

or

255 ?

It first needs to know:

"Should I treat this as text or as a number?"

That's why type conversion exists.

===============================================================================
4. Two Types of Conversion
===============================================================================

There are only two kinds.

1. Implicit Type Conversion
2. Explicit Type Conversion

We'll learn Explicit first because it's easier.

===============================================================================
5. Explicit Type Conversion
===============================================================================

Explicit means

YOU tell JavaScript to convert the value.

JavaScript doesn't decide.

You do.

There are three functions you'll use most often.

Number()

String()

Boolean()

===============================================================================
6. Number()
===============================================================================

Number() converts values into numbers.

Examples

*/

console.log(Number("25"));        // 25
console.log(Number("3.14"));      // 3.14
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number(null));        // 0
console.log(Number(""));          // 0
console.log(Number("   "));       // 0
console.log(Number("25abc"));     // NaN
console.log(Number(undefined));   // NaN

/*
----------------------------------------------------------------------------
Why does "25abc" become NaN?
----------------------------------------------------------------------------

JavaScript tries to convert the ENTIRE string.

It sees

25abc

The letters make it impossible to become a valid number.

So it returns

NaN

NaN means

Not a Number

Ironically,

typeof NaN

returns

number

We'll discuss why in a later chapter.

===============================================================================
7. String()
===============================================================================

String() converts everything into text.

Examples

*/

console.log(String(100));          // "100"
console.log(String(true));         // "true"
console.log(String(false));        // "false"
console.log(String(null));         // "null"
console.log(String(undefined));    // "undefined"
console.log(String([]));           // ""
console.log(String({}));           // "[object Object]"

/*
Notice

The VALUE changes into a string representation.

===============================================================================
8. Boolean()
===============================================================================

Boolean() converts values into either

true

or

false

Instead of memorizing dozens of cases,
remember ONE rule.

Everything is TRUE

except a few special values.

Falsy values

false

0

-0

0n

""          (empty string)

null

undefined

NaN

Everything else is Truthy.

Examples

*/

console.log(Boolean(100));          // true
console.log(Boolean(-5));           // true
console.log(Boolean("Akshay"));     // true
console.log(Boolean(" "));          // true
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true

console.log(Boolean(""));           // false
console.log(Boolean(0));            // false
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false

/*
===============================================================================
9. Important Observation
===============================================================================

Boolean(" ")

returns

true

because it is NOT empty.

It contains one space character.

Many beginners expect it to be false.

===============================================================================
10. Common Mistakes
===============================================================================

Wrong

Number("10abc")

Expected

10

Actual

NaN

----------------------------------------------------------------------------

Wrong

Boolean("false")

Expected

false

Actual

true

Why?

Because it is a NON-EMPTY string.

----------------------------------------------------------------------------

Wrong

String(true)

Expected

1

Actual

"true"

===============================================================================
11. Programming Mindset
===============================================================================

Notice something.

JavaScript never changes the original value.

Example

*/

let score = "95";

let numericScore = Number(score);

console.log(score);          // "95"
console.log(typeof score);   // string

console.log(numericScore);          // 95
console.log(typeof numericScore);   // number

/*
The conversion created a NEW value.

The original variable stayed unchanged.

This is a very important idea.

===============================================================================
12. Exercises
===============================================================================

Without running the code, predict the output.

Exercise 1

console.log(Number("50")); //50

Exercise 2

console.log(Number("50kg")); //NaN

Exercise 3

console.log(Number(true)); //1

Exercise 4

console.log(String(false)); //"false"

Exercise 5

console.log(Boolean("")); //false

Exercise 6

console.log(Boolean("false")); //true

Exercise 7

console.log(Boolean(" ")); //true

Exercise 8

console.log(String(null)); //"null"

Exercise 9

console.log(Number(null)); 0

Exercise 10

console.log(Number(undefined)); //NaN

===============================================================================
13. Thinking Question
===============================================================================

Why do you think

Boolean("false")

returns

true

instead of

false?

Don't answer from memory.

Think about the rule JavaScript is following.

Answer= Because "false" is a string and not boolean false keyword. So every string converted to boolean is boolean true

===============================================================================
*/
