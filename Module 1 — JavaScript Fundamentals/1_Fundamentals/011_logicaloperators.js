/*
===========================================================
Professional JavaScript
Chapter 9 - Logical Operators (&&, ||, !)
Difficulty: ⭐⭐⭐⭐☆
Time: 20-30 minutes
===========================================================

📘 Quick Concept

Logical operators combine multiple conditions.

&&  (AND)
Returns true only if BOTH conditions are true.

true && true     -> true
true && false    -> false
false && true    -> false
false && false   -> false

-----------------------------------------------------------

|| (OR)
Returns true if AT LEAST ONE condition is true.

true || true     -> true
true || false    -> true
false || true    -> true
false || false   -> false

-----------------------------------------------------------

! (NOT)
Reverses a boolean value.

!true  -> false
!false -> true

-----------------------------------------------------------

Examples

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can Drive");
}

let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access Granted");
}

let isBlocked = false;

if (!isBlocked) {
    console.log("Continue");
}

===========================================================
Exercise 1 - Predict the Output
===========================================================
*/

// Q1

let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can Drive");
} else {
    console.log("Cannot Drive");
}

// Output: Can Drive


//----------------------------------------------------------

// Q2

let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Output: Access Granted


//----------------------------------------------------------

// Q3

let isBlocked = true;

if (!isBlocked) {
    console.log("Continue");
} else {
    console.log("Blocked");
}

// Output: Blocked


//----------------------------------------------------------

// Q4

let age1 = 17;
let hasGuardian = true;

if (age1 >= 18 || hasGuardian) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Denied");
}

// Output: Entry Allowed



/*
===========================================================
Exercise 2 - Fix the Bug
===========================================================
*/

// Bug 1

let age2 = 22;
let hasID = true;

if (age2 >= 18 || hasID) {
    console.log("Eligible to Vote");
}

// What's wrong?
//Ans: fix- If condition should be &&. Because ID itself will verify if the age is greater than or equal to 18.


//----------------------------------------------------------

// Bug 2

let isLoggedIn = true;
let accountLocked = true;

if (isLoggedIn && accountLocked) {
    console.log("Continue Test");
}

// What's wrong?
// Fix- if (isLoggedIn && !accountLocked)


//----------------------------------------------------------

// Bug 3

let emailVerified = false;

if (!emailVerified) {
    console.log("Verification Pending");
}

// What's wrong?
//if (!emailVrified)



/*
===========================================================
Exercise 3 - Complete the Code
===========================================================
*/

// Q1

let score = 85;
let attendance = 92;

// Print "Pass"
// score >= 35
// attendance >= 75

if (score >= 35 && attendance >=75) {
    console.log("Pass");
}

//----------------------------------------------------------

// Q2

let username = "admin";
let password = "OpenAI";

// Print Login Success only if BOTH are correct

if (username === "admin" && password === "OpenAI") {
    console.log("Login Success");
}



//----------------------------------------------------------

// Q3

let premiumUser = false;
let couponApplied = true;

// Print Discount Available
// if premium OR coupon

if (premiumUser || couponApplied) {
    console.log("Discount Available");
}



/*
===========================================================
Exercise 4 - Business Rules
===========================================================
*/

/*
Rule 1

A user can start a survey only if

- logged in
AND
- survey assigned
*/

let loggedIn = true;
let surveyAssigned = true;

// Write code
if (loggedIn && surveyAssigned){
    console.log("Start survey");
}



//----------------------------------------------------------

/*
Rule 2

A report can be viewed if

Admin
OR
Manager
*/

let admin = false;
let manager = true;

// Write code
if (admin || manager){
    console.log("View report");
}



//----------------------------------------------------------

/*
Rule 3

A test should continue only when

- Login successful
AND
- Account NOT locked
*/

let loginSuccess = true;
let locked = false;

// Write code
if (loginSuccess && !locked){
    console.log("Continue test");
}



/*
===========================================================
Exercise 5 - Mini Challenge
===========================================================
*/

/*
Write ONE if statement.

A customer receives FREE SHIPPING when

Order >= $100
OR
Premium Member

Otherwise

Paid Shipping
*/

let orderAmount = 70;
let premiumMember = true;

// Write code
if (orderAmount >= 100 || premiumMember){
    console.log("Free shipping");
} else{
    console.log("Paid shipping");
}




/*
===========================================================
💼 QA Scenario
===========================================================

A Playwright test should execute only when

- Browser launched
AND
- User logged in
AND
- Environment is NOT under maintenance
*/

let browserLaunched = true;
let userLoggedIn = true;
let maintenanceMode = false;

// Write code
if (browserLaunched && userLoggedIn && !maintenanceMode){
    console.log("Execute test");
}

/*
===========================================================
🏆 Bonus Challenge
===========================================================

Movie Ticket

Allow entry only if

Age >= 18
AND
Ticket Purchased
AND
NOT Blacklisted

Otherwise deny entry.
*/

let personAge = 26;
let ticketPurchased = true;
let blacklisted = false;

// Write code
if (personAge >= 18 && ticketPurchased && !blacklisted){
    console.log("Allow entry");
} else{
    console.log("Deny entry");
}