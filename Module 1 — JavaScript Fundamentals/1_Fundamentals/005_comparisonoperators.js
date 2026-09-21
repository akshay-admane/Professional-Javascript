/*
===============================================================================
                     Professional JavaScript
===============================================================================

Chapter 5 - Comparison Operators

Difficulty : ⭐⭐⭐☆☆

-------------------------------------------------------------------------------
Learning Objectives
-------------------------------------------------------------------------------

By the end of this chapter you will be able to:

✓ Compare two values.
✓ Understand Boolean results.
✓ Know the difference between == and ===.
✓ Understand != and !==.
✓ Compare numbers and strings.
✓ Think like the JavaScript engine.

===============================================================================
1. Why Do We Need Comparison Operators?
===============================================================================

Imagine you're building an online shopping website.

Before allowing payment, you need to check:

Has the user logged in?

Is the cart empty?

Is the total amount greater than zero?

Is the entered OTP correct?

How does JavaScript answer these questions?

It compares values.

Every comparison produces ONE of two values.

true

or

false

These two values are called Booleans.

Comparison operators are the foundation of decision making.

Without them...

There would be no:

✓ if statements
✓ loops
✓ login systems
✓ validations
✓ games
✓ automation scripts

===============================================================================
2. Think Like a Human
===============================================================================

Suppose I ask:

Is

10

greater than

5?

Your brain immediately says

YES

JavaScript does exactly the same thing.

It evaluates the comparison and returns

true

Example

*/

console.log(10 > 5);

/*

Output

true

===============================================================================
3. The Six Main Comparison Operators
===============================================================================

Operator        Meaning

>               Greater than

<               Less than

>=              Greater than or equal

<=              Less than or equal

==              Equal (Loose Equality)

===             Equal (Strict Equality)

Later we'll also learn

!=

!==

===============================================================================
4. Greater Than
===============================================================================
*/

console.log(20 > 10);

console.log(10 > 20);

console.log(5 > 5);

/*

Results

true

false

false

Why?

5 is NOT greater than 5.

It is equal.

===============================================================================
5. Less Than
===============================================================================
*/

console.log(5 < 10);

console.log(100 < 20);

console.log(5 < 5);

/*

Results

true

false

false

===============================================================================
6. Greater Than or Equal
===============================================================================
*/

console.log(10 >= 10);

console.log(15 >= 10);

console.log(5 >= 10);

/*

Results

true

true

false

===============================================================================
7. Less Than or Equal
===============================================================================
*/

console.log(10 <= "10");

console.log(5 <= 10);

console.log(20 <= 10);

/*

Results

true

true

false

===============================================================================
8. JavaScript Detective
===============================================================================

Become JavaScript.

Question

10 > "5"

Step 1

Operator?

>

Comparison

Step 2

Different types?

YES

One is String.

Can JavaScript convert it?

YES

Number("5")

↓

5

Now compare

10 > 5

↓

true

Answer

true

===============================================================================
9. Another Detective
===============================================================================

*/

console.log("20" < 50);

/*

Become JavaScript

"20"

↓

Number("20")

↓

20

Now compare

20 < 50

↓

true

===============================================================================
10. Common Mistake
===============================================================================

Many beginners think

"20" > "100"

must be

false

But what actually happens?

We'll answer that after we learn strings properly.

For now...

Whenever one side is a number and the other is a numeric string,

JavaScript converts the string into a number before comparing.

===============================================================================
11. Important Difference Coming Soon
===============================================================================

Look carefully.

*/

console.log(5 == "5");

console.log(5 === "5");

/*

Both look almost identical.

Are they?

NO.

One of them performs type conversion.

The other does not.

This difference has caused countless bugs in JavaScript projects.

We'll dedicate the next section entirely to this.

Don't memorize anything yet.

Just notice that JavaScript provides TWO kinds of equality.

===============================================================================
12. Exercises
===============================================================================

Without running the code, predict the output.

1. 20 > 5 //true
operator: >, both are the numbers and hence compare

2. 20 < 5 //false
operator: <, both are the numbers and hence compare

3. 10 >= 10 //true
operator: >=, both are the numbers and hence compare

4. 5 <= 3 //false
operator: <=, both are the numbers and hence compare

5. 100 > "99" //true
operator: >, one operand is string and it can be converted to number, convert string to number and compare

6. "200" < 500 //true
operator: <, one operand is string and it can be converted to number, convert string to number and compare

"200" < 500 //true
operator: <, one operand is string and it can be converted to number, convert string to number and compare


7. 50 >= "50" //true
operator: >=, one operand is string and it can be converted to number, convert string to number and compare


8. 0 < 1 //true
operator: <, both are the numbers and hence compare

9. 1 > 0 //true
operator: >, both are the numbers and hence compare

10. 10 <= "9" //false
operator: <=, one operand is string and it can be converted to number, convert string to number and compare


Write the reasoning.

Do NOT write only

true

or

false.
*/

/*
===============================================================================
13. Mini Challenge
===============================================================================

Create variables.

let age = 25;

let minimumAge = 18;

Print the result of

age >= minimumAge

Then create

let marks = 72;

let passingMarks = 35;

Print

marks >= passingMarks

Now change

marks

to

30

WITHOUT changing the comparison statement.

Observe the output.

*/
let age = 25;
let minimumAge = 18;
console.log(age >= minimumAge);

let marks= 72;
let passingMarks= 35;
console.log(marks >= passingMarks);

marks= 30;
console.log(marks >= passingMarks);


/*

===============================================================================
14. Think Like an Engineer
===============================================================================

A comparison operator doesn't change your data.

It simply asks a question.

Example

age >= 18

This DOES NOT modify age.

It only returns

true

or

false.

Think of comparison operators as asking JavaScript:

"Is this statement correct?"

JavaScript simply answers:

YES (true)

or

NO (false)

===============================================================================
Homework
===============================================================================

Complete all exercises.

Complete the Mini Challenge.

Do NOT use AI.

Think through every comparison before running the code.

In the next lesson, we'll study one of the most misunderstood topics in JavaScript:

== vs ===

This single topic separates beginners from professionals.

===============================================================================
*/