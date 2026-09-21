/*
===============================================================================
                     Professional JavaScript
===============================================================================

Chapter 5C - Inequality Operators (!= vs !==)

Difficulty : ⭐⭐⭐☆☆

-------------------------------------------------------------------------------
Learning Objectives
-------------------------------------------------------------------------------

By the end of this chapter you will be able to:

✓ Understand != and !==
✓ Know how they relate to == and ===
✓ Predict inequality comparisons
✓ Prefer !== in professional code
✓ Complete the comparison operator family

===============================================================================
1. What is Inequality?
===============================================================================

So far we've asked JavaScript:

"Are these two values equal?"

Now we'll ask the opposite question.

"Are these two values NOT equal?"

JavaScript provides two operators.

!=

Loose Inequality

!==

Strict Inequality

Think of them as the opposite of

==

and

===

===============================================================================
2. Mental Model
===============================================================================

Instead of asking

"Are they equal?"

JavaScript asks

"Are they NOT equal?"

That's it.

Everything you learned about

==

and

===

still applies.

===============================================================================
3. Loose Inequality (!=)
===============================================================================

Example

*/

console.log(5 != "5");

/*

Engine Room 🔴

Question

Can these become equal?

YES

"5"

↓

Number("5")

↓

5

5 == 5

↓

true

Now reverse it

!= means

NOT true

↓

false

Output

false

===============================================================================
4. Strict Inequality (!==)
===============================================================================
*/

console.log(5 !== "5");

/*

Engine Room 🔴

Question

Same type?

NO

=== would return false

Now reverse it

!==

NOT false

↓

true

Output

true

===============================================================================
5. Same Type Examples
===============================================================================
*/

console.log(10 != 10);

console.log(10 !== 10);

console.log("JavaScript" != "JavaScript");

console.log(true !== true);

/*

Outputs

false

false

false

false

Why?

Everything is equal.

Reverse of equal

↓

false

===============================================================================
6. Different Type Examples
===============================================================================
*/

console.log(true != 1);

console.log(true !== 1);

console.log(false != 0);

console.log(false !== 0);

/*

Observe carefully.

!=

allows conversion.

!==

never converts.

===============================================================================
7. Easy Rule
===============================================================================

Instead of memorizing

!=

learn this rule.

Step 1

Imagine replacing

!=

with

==

Step 2

Find that answer.

Step 3

Reverse it.

Example

100 != "100"

↓

100 == "100"

↓

true

Reverse

↓

false

Now

100 !== "100"

↓

100 === "100"

↓

false

Reverse

↓

true

===============================================================================
8. Quick Check 🟢
===============================================================================

Write ONLY

true

or

false.

1. 5 != 5 //false

2. 5 != "5" // false

3. 5 !== "5" //true

4. true != 1 //false

5. true !== 1 //true

6. false != 0 // false

7. false !== 0 //true

8. "100" != 100 //false

9. "100" !== 100 //true

10. 10 !== 10 //false

===============================================================================
9. Reason 🟡
===============================================================================

Show only the important conversion.

1. 100 != "100" //false
"100" → Number ("100")= 100 = 100 == true; answer is false

2. true != "1" // false
true → Number(true) == 1
"1" → Number ("1") == 1

3. false != "0" //false
false → Number(false) == 0
"1" → Number ("o") == 0

4. 1 != true //false
true → Number (true)== 1
1==1

===============================================================================
10. Engine Room 🔴
===============================================================================

Open the Engine Room for these.

1. true !== 1
Is the type same? → No
No conversion, 
Ans: true 

2. false != "0"
false → Number(false) = 0
"0" → Number("0") = 0
0==0; 
Ans: false

3. "5" != 5
"5" → Number("5") = 5
5==5
Ans: false

4. "5" !== 5
Is the type same? → No
No conversion, 
Ans: true


===============================================================================
11. Debug Me ⚫
===============================================================================

A junior developer wrote

5 !== "5"

↓

Convert "5"

↓

5 !== 5

↓

false

Question

Where is the mistake?

Explain in ONE sentence. 
Ans- Mistake in first step itself, Convert "5". No conversion happens if the type is not same.

===============================================================================
12. Mini Challenge
===============================================================================

Create

let enteredPassword = "OpenAI123";

let actualPassword = "OpenAI123";

Print

enteredPassword !== actualPassword

Now change

enteredPassword

to

"openai123"

Again print

enteredPassword !== actualPassword

Now create

let enteredPIN = "4321";

let actualPIN = 4321;

Print

enteredPIN != actualPIN

Print

enteredPIN !== actualPIN

Observe the difference.
*/

let enteredPassword = "OpenAI123";
let actualPassword = "OpenAI123";

console.log(enteredPassword !== actualPassword);

enteredPassword = "openai123";

console.log(enteredPassword !== actualPassword);

let enteredPIN = "4321";
let actualPIN = 4321;

console.log(enteredPIN != actualPIN);
console.log(enteredPIN !== actualPIN);

/*

===============================================================================
13. Memory Watch 👀
===============================================================================

Does

!=

change any value?

NO

Does

!==

change any value?

NO

Comparison operators NEVER modify data.

They simply return

true

or

false.

===============================================================================
14. Think Like an Engineer
===============================================================================

You now know all comparison operators.

>

<

>=

<=

==

===

!=

!==

These eight operators are the foundation of decision making.

Without them...

JavaScript cannot make choices.

In the next chapter...

We'll teach JavaScript HOW to make those choices.

===============================================================================
Homework
===============================================================================

Complete

✓ Quick Check

✓ Reason

✓ Engine Room

✓ Debug Me

✓ Mini Challenge

Next Chapter

if

else

The language finally becomes interactive.

===============================================================================
*/
