/*
===============================================================================
                     Professional JavaScript
===============================================================================

Chapter 5B - Equality Operators (== vs ===)

Difficulty : ⭐⭐⭐⭐☆

-------------------------------------------------------------------------------
Learning Objectives
-------------------------------------------------------------------------------

By the end of this chapter you will be able to:

✓ Explain the difference between == and ===
✓ Predict equality comparisons
✓ Understand when JavaScript performs type conversion
✓ Know why professional developers prefer ===
✓ Think like the JavaScript engine

===============================================================================
1. Why Does JavaScript Have TWO Equality Operators?
===============================================================================

This is probably the most misunderstood topic in JavaScript.

Many tutorials say:

== compares value

=== compares value and type

Although this is TRUE...

it doesn't explain WHY JavaScript has two operators.

Today's goal is to understand HOW the engine thinks.

===============================================================================
2. Imagine Two Security Guards
===============================================================================

Imagine two security guards.

-------------------------------------------------------------------------------
Guard 1 (==)
-------------------------------------------------------------------------------

Guard 1 is friendly.

He says:

"You look different...

but maybe you're actually the same person."

So before making a decision...

he allows identity changes.

Example

5

and

"5"

Guard 1 says

"Let me convert one first."

Then compares.

-------------------------------------------------------------------------------
Guard 2 (===)
-------------------------------------------------------------------------------

Guard 2 is strict.

He says

"If you arrive with different identities,

I won't even compare you."

No conversion.

No second chance.

Different types?

Immediately

false

This mental model explains almost every equality problem.

===============================================================================
3. Equality (==)
===============================================================================

Example

*/

console.log(5 == "5");

/*

Question

Same type?

NO

Engine Room 🔴

"5"

↓

Number("5")

↓

5

Now compare

5 == 5

↓

true

Output

true

===============================================================================
4. Strict Equality (===)
===============================================================================
*/

console.log(5 === "5");

/*

Engine Room 🔴

Same type?

NO

Strict Equality NEVER converts.

Immediately

false

===============================================================================
5. Compare Same Types
===============================================================================
*/

console.log(10 == 10);

console.log(10 === 10);

console.log("JavaScript" == "JavaScript");

console.log(true === true);

/*

All are

true

Why?

No conversion needed.

===============================================================================
6. Compare Different Types
===============================================================================
*/

console.log(true == 1);

console.log(false == 0);

console.log(true === 1);

console.log(false === 0);

/*

Quick Reason 🟡

==

allows conversion

===

doesn't

Don't memorize these.

Reason them.

===============================================================================
7. Engine Room 🔴
===============================================================================

Example

true == 1

Engine

Different types

↓

Boolean

↓

Number(true)

↓

1

↓

1 == 1

↓

true

===============================================================================
8. Another Engine Room 🔴
===============================================================================

false == 0

Boolean

↓

Number(false)

↓

0

↓

0 == 0

↓

true

===============================================================================
9. Professional Rule
===============================================================================

Whenever you write JavaScript,

prefer

===

instead of

==

Why?

Because

===

does exactly what you asked.

It never performs hidden conversions.

That makes your code easier to understand and debug.

There ARE situations where

==

is useful.

We'll discuss those much later.

For now...

Pretend

===

is your default equality operator.

===============================================================================
10. Common Beginner Mistake
===============================================================================

Many beginners think

==

is "wrong".

It isn't.

It's simply more permissive.

The real problem is using

==

without understanding its conversion rules.

===============================================================================
11. Quick Check 🟢
===============================================================================

Predict WITHOUT running. 
Write ONLY

true

or

false

No reasoning required.

1. 5 == 5 //true

2. 5 === 5 //true

3. 5 == "5" //true

4. 5 === "5" //false

5. true == 1 //true

6. true === 1 //false

7. false == 0 //true

8. false === 0 //false

9. "10" == 10 //true

10. "10" === 10 //false

===============================================================================
12. Reason 🟡
===============================================================================

For these, write only the important conversion.

Example

100 == "100"

Answer

"100"

↓

100

↓

true

Now solve

1. true == "1"
true > 1 > "1" > 1 >> true

2. false == "0"
false > 0 > "0" > 0 >> true

3. 1 == true
true > 1 > 1 >>true

4. 0 == false
false > 0 > 0 >>true

===============================================================================
13. Engine Room 🔴
===============================================================================

Open the Engine Room ONLY for these.
Write the complete execution flow.

1. true == "1"
Boolean

↓

Number(true)

↓

1

↓

1 == 1

↓

true


2. false == "0"
Boolean

↓

Number(false)

↓

0

↓

0 == 0

↓

true

3. "5" === 5
Same type? No >> No comparison- Immediate false

4. true === 1
Same type? No >> No comparison- Immediate false

===============================================================================
14. Debug Me ⚫
===============================================================================

A junior developer wrote:

5 === "5"

↓

Convert "5"

↓

5 === 5

↓

true

Question

Where did the reasoning go wrong?

Explain in ONE sentence.
Answer- Operator is ===, and type is different, hence no conversion needed and immediately return false 

===============================================================================
15. Mini Challenge
===============================================================================

Create these variables.

let enteredOTP = "1234";

let actualOTP = 1234;

Print

enteredOTP == actualOTP

Print

enteredOTP === actualOTP

Now convert

enteredOTP

to Number.

Again print

enteredOTP === actualOTP

Observe what changed.

/*

*/

let enteredOTP = "1234";
let actualOTP= 1234;
console.log(enteredOTP === actualOTP);
let _enterdOTP= Number(enteredOTP);
console.log(_enterdOTP === actualOTP);

/*

===============================================================================
16. Think Like an Engineer
===============================================================================

==

asks

"Can these become equal?"

===

asks

"Are these already equal?"

That one sentence is worth remembering.

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

!=

vs

!==

After that...

we'll finally unlock

if

else

and begin writing programs that make decisions.

===============================================================================
*/