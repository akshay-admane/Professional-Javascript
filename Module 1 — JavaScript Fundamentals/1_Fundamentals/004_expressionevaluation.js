/*
===============================================================================
                     Professional JavaScript
===============================================================================

Chapter 4 - Expression Evaluation

Difficulty : ⭐⭐⭐☆☆

-------------------------------------------------------------------------------
Learning Objectives
-------------------------------------------------------------------------------

By the end of this chapter you will be able to:

✓ Explain how JavaScript evaluates expressions.
✓ Understand Left-to-Right evaluation.
✓ Predict chained operations.
✓ Explain WHY similar-looking expressions give different results.

===============================================================================
1. A Question
===============================================================================

Without running the code...

Which one produces the bigger number?

A)

10 + 5 + "5"

B)

"10" + 5 + 5

Most beginners answer

"They should be the same."

But they are not.

Why?

That's today's lesson.

===============================================================================
2. JavaScript Doesn't Solve Everything At Once
===============================================================================

Imagine you ask a friend:

2 + 3 + 4

They don't immediately say

9

Their brain does

2 + 3

↓

5

↓

5 + 4

↓

9

JavaScript works similarly.

It evaluates expressions

LEFT

↓

TO

↓

RIGHT

unless special rules (like parentheses) say otherwise.

===============================================================================
3. Example 1
===============================================================================
*/

console.log(10 + 5 + "5");

/*

Become JavaScript.

Step 1

10 + 5

↓

15

Expression becomes

15 + "5"

Step 2

Operator?

+

Any string?

YES

Convert

15

↓

"15"

Result

"15" + "5"

↓

"155"

Final Answer

"155"

===============================================================================
4. Example 2
===============================================================================
*/

console.log("10" + 5 + 5);

/*

Step 1

"10" + 5

↓

Operator +

One operand is string

↓

Convert

5

↓

"5"

↓

"105"

Expression becomes

"105" + 5

Again

Operator +

String exists

Convert

5

↓

"5"

↓

"1055"

Answer

"1055"

===============================================================================
5. Example 3
===============================================================================
*/

console.log(10 + "5" + 5);

/*

Step 1

10 + "5"

↓

String wins

↓

"105"

Expression becomes

"105" + 5

↓

"1055"

Answer

1055

===============================================================================
6. Parentheses Change Everything
===============================================================================
*/

console.log((10 + 5) + "5");

console.log(10 + (5 + "5"));

/*

First expression

15 + "5"

↓

"155"

Second expression

5 + "5"

↓

"55"

Then

10 + "55"

↓

"1055"

Parentheses tell JavaScript

"Do this first."

===============================================================================
7. JavaScript Detective
===============================================================================

Expression

*/

console.log(true + 5 + "10");

/*

Step 1

true + 5

↓

1 + 5

↓

6

Expression becomes

6 + "10"

↓

"610"

===============================================================================
8. Another Detective
===============================================================================
*/

console.log("10" + false + null);

/*

Step 1

"10" + false

↓

"10false"

Expression becomes

"10false" + null

↓

"10falsenull"

===============================================================================
9. Important Rule
===============================================================================

Don't look at the ENTIRE expression.

Look at ONE operation at a time.

Example

A + B + C + D

↓

Solve

A + B

↓

Then

Result + C

↓

Then

Result + D

This mindset solves 95% of beginner mistakes.

===============================================================================
10. Common Mistake
===============================================================================

Wrong Thinking

10 + 5 + "5"

↓

10 + 55

↓

65

Wrong.

JavaScript never jumps ahead.

It always finishes the CURRENT operation first.

===============================================================================
11. Programming Mindset
===============================================================================

Professional developers don't read code like English.

They simulate execution.

Whenever you see code, ask:

"What is JavaScript doing RIGHT NOW?"

Not

"What is the final answer?"

That's a huge difference.

===============================================================================
12. Exercises
===============================================================================

Predict WITHOUT running.

1. 20 + 5 + "5" // 20+5= 25 > 25+"5"= "255"

2. "20" + 5 + 5 // "20"+ 5= "205" >> "205" + 5= "2055"

3. 20 + "5" + 5 // 20+"5"= "205" >> "205"+5= "2055"

4. true + true + "5" // true+ true> 1+1= 2 >> 2+"5"= "25"

5. "5" + true + false // "5"+true= "5true" >> "5true" + false= "5truefalse"

6. 10 + null + "5" // 10+0 = 10 >> 10+"5"= "105"

7. 10 + (null + "5") // (null + "5")= "null5" >> 10 + "null5" = "10null5"

8. (10 + null) + "5" // (10 + null)= 10 >> 10 + "5"= "105"

9. 10 + (5 + "5") // (5 + "5")= "55" >> 10 + "55"= "1055"

10. (10 + 5) + "5" // (10+5)= 15 >> 15 + "5"= "155"

*/

console.log(20 + 5 + "5");
console.log("20" + 5 + 5);
console.log(20 + "5" + 5);
console.log(true + true + "5");
console.log("5" + true + false);
console.log(10 + null + "5");
console.log(10 + (null + "5"));
console.log((10 + null) + "5");
console.log(10 + (5 + "5"));
console.log((10 + 5) + "5");

/*

===============================================================================
13. Detective Challenge
===============================================================================

Become JavaScript.

console.log(true + "10" + false + 5);

Expression

true + "10" + false + 5

↓

true + "10"
↓

"true10"

↓

"true10" + false

↓

"true10false"

↓

"true10false" + 5

↓

final answer= true10false5

Write EVERY step.

Don't skip anything.

===============================================================================
*/