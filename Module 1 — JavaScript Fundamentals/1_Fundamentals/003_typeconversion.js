/*
===============================================================================
                     Professional JavaScript
===============================================================================

Chapter 3 - Type Conversion (Part 2)

Topic : Implicit Type Conversion

Difficulty : ⭐⭐⭐☆☆

-------------------------------------------------------------------------------
Learning Objectives
-------------------------------------------------------------------------------

By the end of this lesson you will be able to:

✓ Explain Implicit Type Conversion.
✓ Predict the output of +, -, *, / with different data types.
✓ Explain WHY JavaScript converts values automatically.
✓ Build a step-by-step approach to solving any conversion question.

===============================================================================
1. First Principle
===============================================================================

Suppose I write:

*/

let total = 10 + 20;

/*

Easy.

Both values are Numbers.

Answer:

30

-------------------------------------------------------------------------------

Now suppose I write:

*/

let total = "10" + 20;

/*

Question:

Should JavaScript throw an error?

OR

Should it try to make the operation possible?

JavaScript chooses the second option.

It tries to convert one value into another type automatically.

This is called

IMPLICIT TYPE CONVERSION

also known as

TYPE COERCION.

===============================================================================
2. Explicit vs Implicit
===============================================================================

Explicit Conversion

YOU tell JavaScript to convert.

Example

*/

Number("25");

/*

Implicit Conversion

JavaScript decides to convert automatically.

Example

*/

"25" + 5;

/*

Notice

We never called

Number()

or

String()

JavaScript made the decision itself.

===============================================================================
3. The Most Important Rule in this Chapter
===============================================================================

Whenever you see different data types together,

DO NOT PANIC.

Ask these questions.

Step 1

What operator is being used?

+

-

*

/

%

==

etc.

Different operators follow different rules.

-------------------------------------------------------------------------------

Step 2

What are the data types?

Number?

String?

Boolean?

-------------------------------------------------------------------------------

Step 3

Which conversion rule applies?

Only then calculate the answer.

===============================================================================
4. The + Operator
===============================================================================

The + operator is special.

It has TWO jobs.

1. Addition

2. String Concatenation

Question:

How does JavaScript decide which one to use?

Simple rule:

If ANY operand is a String,

+

becomes String Concatenation.

Examples

*/

console.log("Hello" + "World");     // HelloWorld

console.log("Age: " + 25);          // Age: 25

console.log(10 + "5");              // 105

console.log("10" + 5);              // 105

console.log("10" + true);           // 10true

console.log("10" + true + 23);     //10true23

/*
Notice something?

JavaScript converts the OTHER value
into a String.

It never converts the String into a Number.

Why?

Because String Concatenation wins.

Remember this sentence.

"String wins over +"

===============================================================================
5. Why?
===============================================================================

Imagine this:

*/

"Age: " + 25

/*

If JavaScript converted

"Age: "

into a Number

what number should it become?

Impossible.

So JavaScript converts

25

into

"25"

Result

"Age: 25"

This behaviour makes practical sense.

===============================================================================
6. The -, *, / and % Operators
===============================================================================

Unlike +

These operators ONLY know mathematics.

They cannot concatenate strings.

Therefore,

JavaScript tries to convert BOTH values into Numbers.

Examples

*/

console.log("10" - "5");      // 5

console.log("10" * "5");      // 50

console.log("10" / "2");      // 5

console.log("10" % "3");      // 1

console.log("10" - true); // 9

/*
Notice

The strings became Numbers.

Because subtraction, multiplication and division
cannot work on text.

===============================================================================
7. Boolean Conversion
===============================================================================

Booleans become Numbers.

true

↓

1

false

↓

0

Examples

*/

console.log(true + true);     // 2

console.log(true + 5);        // 6

console.log(false + 5);       // 5

console.log(true * 10);       // 10

/*
===============================================================================
8. Null Conversion
===============================================================================

null

acts like

0

during numeric operations.

Examples

*/

console.log(10 + null);       // 10

console.log(10 - null);       // 10

console.log(10 * null);       // 0

/*
===============================================================================
9. Undefined Conversion
===============================================================================

undefined

cannot become a valid number.

It becomes

NaN

Examples

*/

console.log(10 + undefined);      // NaN

console.log(10 - undefined);      // NaN

console.log(10 * undefined);      // NaN

/*
===============================================================================
10. JavaScript Detective
===============================================================================

Example

*/

console.log("10" - true);

/*

Don't jump to the answer.

Think.

Question 1

Operator?

-

Subtraction.

Question 2

Subtraction works on?

Numbers.

Question 3

Convert values.

"10"

↓

10

true

↓

1

Question 4

Calculate.

10 - 1

↓

9

Answer

9

THIS

is how professional developers think.

===============================================================================
11. Common Mistakes
===============================================================================

Wrong Thinking

"10" - "5"

means

105

Wrong.

Only

+

concatenates.

-------------------------------------------------------------------------------

Wrong Thinking

true

is not a number.

Actually,

during numeric operations

true

becomes

1.

===============================================================================
12. Quick Rules
===============================================================================

+  → String wins.

-  → Convert to Numbers.

*  → Convert to Numbers.

/  → Convert to Numbers.

%  → Convert to Numbers.

true  → 1

false → 0

null → 0

undefined → NaN

===============================================================================
13. Exercises
===============================================================================

Predict WITHOUT running.

1.

console.log(10 + "5"); //105

2.

console.log("10" + 5); //105

3.

console.log("10" - "5"); //5

4.

console.log("10" * "5"); //50

5.

console.log(true + true); //1

6.

console.log(false + 10); //10

7.

console.log("10" + true); //10true

8.

console.log("10" - true); //9

9.

console.log(10 + null); //10

10.

console.log(10 + undefined); //NaN

===============================================================================
14. JavaScript Detective Challenge
===============================================================================

Solve using the steps.

console.log("20" - false);

Question 1

Operator? //Operator is -, hence only mathematical operation will happen

Question 2

Convert? //convert false to mathematical value that is 0

Question 3

Final Answer? //20-0=20

===============================================================================
*/