/*
===============================================================================
                    PROFESSIONAL JAVASCRIPT COURSE
===============================================================================

                     MILESTONE PROJECT 1

                        Smart Billing System

Difficulty : ⭐⭐⭐☆☆

Estimated Time : 1-2 Hours

Concepts Used

✓ Variables
✓ Constants
✓ Strings
✓ Numbers
✓ Boolean
✓ Explicit Type Conversion
✓ Implicit Type Conversion
✓ Expression Evaluation

Rules

❌ Don't Google.

❌ Don't use AI.

❌ Don't skip questions.

✅ Build everything yourself.

===============================================================================
QUESTION 1
===============================================================================

Create the following variables.

Store ALL prices as STRINGS.

Laptop Price

"65000"

Mouse Price

"850"

Keyboard Price

"1500"

GST

18

Customer Name

Your Name

Is Prime Customer

true

===============================================================================
QUESTION 2
===============================================================================

Convert ALL prices into Numbers.

Print their types before and after conversion.

Expected Example

Original Type

string

Converted Type

number

===============================================================================
QUESTION 3
===============================================================================

Customer buys

1 Laptop

2 Mouse

1 Keyboard

Calculate

Subtotal

(Hint)

Laptop

+

(Mouse × 2)

+

Keyboard

===============================================================================
QUESTION 4
===============================================================================

Calculate GST Amount.

Formula

Subtotal × GST / 100

Print

GST Amount

===============================================================================
QUESTION 5
===============================================================================

Calculate

Final Bill

Subtotal

+

GST Amount

===============================================================================
QUESTION 6
===============================================================================

Print the invoice.

Output should look similar to this.

---------------------------------------------------

ABC ELECTRONICS

---------------------------------------------------

Customer

Akshay

Laptop

65000

Mouse x2

1700

Keyboard

1500

----------------------------

Subtotal

68200

GST (18%)

12276

----------------------------

Final Bill

80476

Prime Customer

true

---------------------------------------------------

NOTE

Use ONLY

console.log()

+

Number()

String()

No template literals.

===============================================================================
QUESTION 7
===============================================================================

JavaScript Detective

Predict FIRST.

Then execute.

console.log("Final Bill : " + finalBill);

Explain WHY this works.

===============================================================================
QUESTION 8
===============================================================================

Modify the program.

Instead of

2 Mouse

make it

3 Mouse

WITHOUT changing your subtotal calculation.

Hint

Think carefully.

===============================================================================
QUESTION 9
===============================================================================

Modify the program.

Instead of

GST = 18

Make

GST = 28

How many lines of code did you have to change?

If the answer is more than ONE,

your code can probably be improved.

===============================================================================
QUESTION 10
===============================================================================

BONUS ⭐⭐⭐⭐

Create another variable.

Discount

"5000"

(as STRING)

Convert it to Number.

Apply it BEFORE GST.

Formula

Subtotal

↓

Discount

↓

GST

↓

Final Bill

Print the new invoice.

===============================================================================
THINK LIKE AN ENGINEER
===============================================================================

Don't think

"I am solving Question 7."

Think

"I am writing software that someone else may modify next year."

Can another developer change

GST

from 18

to 12

without searching your entire file?

Can they change

Mouse Quantity

without rewriting formulas?

Good software is easy to modify.

That's what professional developers optimize for.

===============================================================================
*/

let laptopPrice= "65000";
let mousePrice= "850";
let keyboardPrice= "1500";
let _gst= 28; // to change the GST, only one line of code change is needed
let discount= "5000";

let customerName= "Akshay Admane";
let isPrimeCustomer= true;

console.log(typeof laptopPrice);
let numLaptopPrice= Number(laptopPrice);
console.log(typeof numLaptopPrice);
console.log(numLaptopPrice);
let numDiscount= Number(discount);

console.log(typeof mousePrice);
let numMousePrice= Number(mousePrice);
console.log(typeof numMousePrice);

console.log(typeof keyboardPrice);
let numKeyboardPrice= Number(keyboardPrice);
console.log(typeof numKeyboardPrice);

/*
Order details; only change the following 3 lines to change the number of order items
*/
let laptopOrder= 1;
let keyboardOrder=  1;
let mouseOrder= 2;

let subtotal= ((numLaptopPrice * laptopOrder) + (numMousePrice * mouseOrder) + (numKeyboardPrice * keyboardOrder))- numDiscount;
console.log(subtotal);

let gst= subtotal * _gst / 100;
console.log(gst);

let finalBill= subtotal + gst;

console.log("===============Innovice===============");
console.log("-----------------------------");
console.log("ABC Electronics");
console.log("-----------------------------");

console.log("Customer : " + customerName);
console.log("Laptop *"+ laptopOrder + ": "  + (numLaptopPrice));
console.log("Mouse *"+ mouseOrder + ": "  + (numMousePrice));
console.log("Keyboard *"+ keyboardOrder + ": "  + (numKeyboardPrice));

console.log("-----------------------------");

console.log("Subtotal");
console.log(subtotal);
console.log("GST "+ "(" + _gst + "%)");
console.log(gst);
console.log("-----------------------------");

console.log("Final Bill: "+ finalBill);
console.log("Prime Customer : " + isPrimeCustomer);








