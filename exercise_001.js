/*
===============================================================================
                        Professional JavaScript Course
===============================================================================

JavaScript Lab 1

Topics Covered

✓ Variables
✓ Data Types
✓ Explicit Type Conversion
✓ Implicit Type Conversion

Difficulty : ⭐⭐☆☆☆
Estimated Time : 45-60 Minutes

Rules

1. Predict the output first.
2. Write the code yourself.
3. Run the program.
4. Debug if necessary.
5. DO NOT look at previous notes.

===============================================================================
SECTION A - VARIABLES
===============================================================================
*/

/*
Question 1

Create a variable named firstName.

Store your first name.

Print it.

Expected Output

Akshay
*/

let firstName= "Akshay";
console.log(firstName);

/*
----------------------------------------------------------------------------
Question 2

Create two variables.

age = 29

city = "Pune"

Print

I am 29 years old and I live in Pune.

NOTE

Do NOT use template literals.

Only use +
-------------------------------------------------------------------------------
*/

let age=29;
let city= "Pune";

console.log("I am " + age + " years old and I live in " + city + ".");

/*
----------------------------------------------------------------------------
Question 3

Create a constant called country.

Store

India

Print it.

Now try changing it.

Observe the error.

Write the reason as a comment.
-------------------------------------------------------------------------------
*/

const country= "India";
country= "Nepal"; //Reason- country has already a constant value India, hence can not change it to any other value 

/*
===============================================================================
SECTION B - DATA TYPES
===============================================================================
*/

/*
Question 4

Create the following variables.

name

age

isLearningJavaScript

company (leave undefined)

manager (assign null)

Print

Value

Type

for every variable.

Example

console.log(age);
console.log(typeof age);
*/

let name= "Akshay";
console.log(name); //Akshay
console.log(typeof name); //string

let age= 29;
console.log(age); //29
console.log(typeof age); //number

let isLearningJavaScript= true;
console.log(isLearningJavaScript); //true
console.log(typeof isLearningJavaScript); //boolean

let company;
console.log(company); //undefined
console.log(typeof company); //undefined

let manager= null;
console.log(manager); //null
console.log(typeof manager);  //object

/*
----------------------------------------------------------------------------
Question 5

Before each console.log(),

predict the output using comments.

Example

console.log(typeof age); // number

Then run the program and verify your prediction.
-------------------------------------------------------------------------------
*/

console.log(typeof age); //number

console.log(typeof name); //string

console.log(typeof company); //undefined

console.log(typeof manager); //object

console.log(typeof isLearningJavaScript); //boolean

/*
===============================================================================
SECTION C - EXPLICIT TYPE CONVERSION
===============================================================================
*/

/*
Question 6

Create

let marks = "95";

Convert it into Number.

Print

Original Value

Original Type

Converted Value

Converted Type
*/

let marks= "95";
console.log("Original value of marks is: "+marks+ " and original type of marks is: "+ typeof marks);
let numericMarks= Number(marks);
console.log("Converted value of marks is: "+numericMarks+ " and converted type of marks is: "+ typeof numericMarks);

/*
----------------------------------------------------------------------------
Question 7

Create

let isPassed = true;

Convert it into

Number

String

Print everything.
-------------------------------------------------------------------------------
*/

let isPassed= true;
console.log(isPassed); //true
let isPassedToNumber= Number(isPassed);
console.log(isPassedToNumber); //1
let isPassedToString= String(isPassed); 
console.log(isPassedToString); //true

/*
----------------------------------------------------------------------------
Question 8

Create

let emptyText = "";

Convert it into Boolean.

Print

Original Value

Converted Value

Converted Type
-------------------------------------------------------------------------------
*/

let emptyText= "";
console.log(emptyText);
let isEmptyText= Boolean(emptyText);
console.log(isEmptyText); //false
console.log(typeof isEmptyText); //boolean


/*
===============================================================================
SECTION D - IMPLICIT TYPE CONVERSION
===============================================================================
*/

/*
Question 9

Write code for EACH expression.

Do NOT simply predict.

Actually write and execute the code.

Expression 1

10 + "20"

Expression 2

"20" - 5

Expression 3

true + 5

Expression 4

false + "5"

Expression 5

10 + null

Expression 6

10 + undefined
*/

console.log(10 + "20"); //1020
//operator +
//oe operand is string
//Number converted to string
//Result- "1020"

console.log("20" - 5); //15
//operator -
//one operand is string
//string converted to number
//result- 15

console.log(true + 5); //6
//operator +
//one operand is boolean
//boolean converted to number
//result= 1+5=6

console.log(false + "5"); //false5
//operator +
//one operand is string
//boolean converted to string
//result- false5

console.log(10 + null); //10
//operator +
//one operand is null
//null converted to number
//result- 10+0=10

console.log(10 + undefined); //NaN
//operator +
//one operand is undefined
//try to convert undefined to number
//result- NaN




/*
----------------------------------------------------------------------------
Question 10

For every expression above,

write comments explaining WHY the output occurred.

Example

console.log(10 + "20");

// Operator = +
// One operand is string
// Number converted to string
// Result = "1020"
-------------------------------------------------------------------------------
*/

/*
===============================================================================
SECTION E - MINI PROGRAM
===============================================================================
*/

/*
Question 11

Create the following variables.

name

age (Store as STRING)

country

isStudent

Convert age into Number.

Print the following.

----------------------------

Student Information

Name : Akshay

Age : 29

Country : India

Student : true

----------------------------

Use only

console.log()

+

String()

Number()

Do NOT use Template Literals.
*/

let name= "Akshay";
let age= '29';
let country= "India";
let isStudent= true;

console.log("Student Information");
console.log("Name : "+ name);
console.log("Age : "+ Number(age));
console.log("Country : "+ country);
console.log("Student : "+ isStudent);

/*
===============================================================================
SECTION F - JAVASCRIPT DETECTIVE
===============================================================================
*/

/*
Question 12

Predict first.

Then write code.

Then verify.

Expression 1

"100" + true //100true

Explain WHY. //Operator is + and one of the operand is string, hence another operand is converted to string


Expression 2

"100" - true //99

Explain WHY. //Operator is -, hence the boolean is converted to number


Expression 3

"100" + null //100null

Explain WHY. //Operator is + and one of the operand is string, hence another operand is converted to string


Expression 4

"100" - null //100

Explain WHY. //Operator is -, hence the null  is converted to number



Expression 5

Number("500") //500

Explain WHY. //given string can be converted to number so "500" converted to 500


Expression 6

String(false) //false

Explain WHY. //anything can be converted to string


Expression 7

Boolean("Hello") //true

Explain WHY. //any non empty string is a boolean true


Expression 8

Boolean("") //false

Explain WHY. //empty string is boolean false
*/

console.log("100" + true);
console.log("100" - true);
console.log("100" + null);
console.log("100" - null);
console.log(Number("500"));
console.log(String(false));
console.log(typeof String(false)); //string
console.log(Boolean("Hello"));
console.log(Boolean(""));

/*
===============================================================================
SECTION G - THINK LIKE A TEACHER
===============================================================================
*/

/*
Question 13

Imagine your friend has never learned JavaScript.

Explain the following in your own words.

1.

Difference between let and const

------------------------------------------------------------

let and const are the javasript variables.
Let is used only when we are sure thet the value of the assigned variable can change in the future.
ex. let role= "Developer";
now candidated moved to another role Technical Lead
role= "Technical Lead";

const is used only when the assigned value will never change
ex. const speeedOfLight= 799992;
now the speed of light will never change; hence speeedOfLight value can not be changed
speedOfLight= 672929; //error

------------------------------------------------------------

2.

Difference between null and undefined

------------------------------------------------------------

null- the value is not yet sure and can be assigned later. In this case the variable is created but with the null value.
because the variable is created, it can still be accessed and it returns the null value. Type is object
undefined- the value is undefined. Hence the variable is also not created and on accessign the variable, it gives undefined. Type is also undefined

------------------------------------------------------------



3.

Difference between Explicit and Implicit Type Conversion

------------------------------------------------------------

Explicite Type Conversion- 
We have to tell Javascriot that what type needed
ex. const rollNumber= "21";
let rollNumberToNumber= Number(rollNumber);

Implicite Type Conversion- 
Javascript performs the conversion on its own based on defined rules


------------------------------------------------------------

4.

Why does + behave differently from - ?

------------------------------------------------------------

In the implicite type cpnversion + behaves differently than other operators like -, *, /, %.
It is because + also used for string concatination.
If any of the operand is string, js converts the other operand to string as well and + performs a string concationation 

------------------------------------------------------------

5.

What is NaN?

------------------------------------------------------------

NaN is Not a Number
When js is not able to convert any string to number, it gives NaN

------------------------------------------------------------





*/

/*
===============================================================================
BONUS CHALLENGE ⭐⭐⭐
===============================================================================

Without searching.

Can you create your own FIVE examples of

Implicit Type Conversion

that we have NOT discussed in class?

Explain each one.

Example

console.log(false * 100);

Reason

false

↓

0

↓

0 * 100

↓

0

Now create FIVE of your own.
99 / true= 99
99 / 0= NaN; I assumed NaN but js gives Infinity
23 + true= 24
34 + true + "true" + "chroma"= 34truetruechroma
undefined + undefined = NaN


*/