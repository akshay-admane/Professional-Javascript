/*
===========================================================
Professional JavaScript
Chapter 10 - switch
Difficulty: ⭐⭐⭐☆☆
Time: 15-20 minutes
===========================================================

⚡ VS Code Productivity

switch + Tab    -> switch statement
case + Enter    -> new case
clg + Tab       -> console.log()
Ctrl + /        -> comment/uncomment
Shift + Alt + ↓ -> duplicate line

===========================================================
📘 Quick Concept

Use switch when checking ONE variable
against MANY exact values.

Instead of

if (...)
else if (...)
else if (...)

use

switch (value)

Each case represents one possible value.

break stops execution.

default executes when no case matches.

===========================================================
Example
===========================================================
*/

let role = "Admin";

switch (role) {
    case "Admin":
        console.log("Full Access");
        break;

    case "Manager":
        console.log("Limited Access");
        break;

    case "User":
        console.log("Basic Access");
        break;

    default:
        console.log("Unknown Role");
}

/*
===========================================================
Exercise 1 - Predict the Output
===========================================================
*/

// Q1

let status = "Completed";

switch (status) {
    case "Pending":
        console.log("Wait");
        break;

    case "Completed":
        console.log("Done");
        break;

    default:
        console.log("Unknown");
}

// Output: Done


//----------------------------------------------------------

// Q2

let environment = "QA";

switch (environment) {
    case "DEV":
        console.log("Developer Server");
        break;

    case "QA":
        console.log("QA Server");
        break;

    case "PROD":
        console.log("Production");
        break;
}

// Output: QA Server



//----------------------------------------------------------

// Q3

let browser = "Safari";

switch (browser) {
    case "Chrome":
        console.log("Chrome");
        break;

    case "Firefox":
        console.log("Firefox");
        break;

    default:
        console.log("Other Browser");
}

// Output: Other Browser



/*
===========================================================
Exercise 2 - Fix the Bug
===========================================================
*/

// Bug 1

let surveyStatus = "Completed";

switch (surveyStatus) {
    case "Completed":
        console.log("Survey Finished");

    case "Pending":
        console.log("Survey Pending");
        break;
}

// What's wrong? There is no break statement for case- "Completed", hence code will be executeD for the next case as well until the next case breaks



//----------------------------------------------------------

// Bug 2

let userRole = "Admin";

switch (userRole) {
    case "Admin":
        console.log("Access Granted");
        break;

    case "Manager":
        console.log("Access Granted");
        break;

}

// What's missing?- There is no default case provided in case user passes the invalid case



/*
===========================================================
Exercise 3 - Convert if...else to switch
===========================================================
*/

// Q1

let priority = "High";

/*
Convert this

if (priority === "High") {
    console.log("P1");
}
else if (priority === "Medium") {
    console.log("P2");
}
else {
    console.log("P3");
}

into switch.

*/

switch (priority) {
    case "High":
        console.log("P1");
        break;

    case "Medium":
        console.log("P2");
        break;

    default:
        console.log("P3");
        break;
}


//----------------------------------------------------------

// Q2

let apiStatus = 404;

/*
Convert into switch.

200 -> Success

400 -> Bad Request

401 -> Unauthorized

404 -> Not Found

Default -> Unknown
*/

switch (apiStatus) {
    case 200:
        console.log("success");
        break;

    case 400:
        console.log("Bad Request");
        break;

    case 401:
        console.log("Unauthorized");
        break;

    case 404:
        console.log("Not Found");
        break;
    default:
        console.log("Unknown");
        break;
}


/*
===========================================================
Exercise 4 - QA Scenarios
===========================================================
*/

/*
Survey Status

Assigned
Started
Completed
Cancelled

Print appropriate message using switch.
*/

let surveyState = "Started";

// Write code

switch (surveyState) {
    case "Assigned":
        console.log("Survey is assigned");
        break;

    case "Started":
        console.log("Survey Started");
        break;

    case "Completed":
        console.log("Survey Completed");
        break;

    case "Cancelled":
        console.log("Survey Cancelled");
        break;

    default:
        console.log("Unknown survey status");
        break;
}



//----------------------------------------------------------

/*
Execution Environment

DEV
QA
UAT
PROD

Print which environment is selected.
*/

let currentEnvironment = "UAT";

// Write code

switch (currentEnvironment) {
    case "DEV":
        console.log("Test Started on Dev");
        break;

    case "QA":
        console.log("Test Started on QA");
        break;

    case "UAT":
        console.log("Test Started on UAT");
        break;

    case "PROD":
        console.log("Test Started on PROD");
        break;

    default:
        console.log("Test not started; please provide the correct environment");
        break;
}



/*
===========================================================
Exercise 5 - Mini Challenge
===========================================================
*/

/*
Weekday

1 -> Monday

2 -> Tuesday

3 -> Wednesday

4 -> Thursday

5 -> Friday

6 -> Saturday

7 -> Sunday

Otherwise Invalid Day
*/

let day = 5;

// Write code

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
}



/*
===========================================================
💼 Automation Scenario
===========================================================

API Response Code

200 -> Test Passed

401 -> Authentication Failed

403 -> Forbidden

500 -> Server Error

Default -> Unexpected Response
*/

let responseCode = 500;

// Write code
switch (responseCode) {
    case 200:
        console.log("Test Passed");
        break;

    case 401:
        console.log("Authentication Failed");
        break;

    case 403:
        console.log("Forbidden");
        break;

    case 500:
        console.log("Server Error");
        break;

    default:
        console.log("Unexpected Response");
        break;
}





/*
===========================================================
🏆 Bonus Challenge
===========================================================

Payment Status

SUCCESS
FAILED
PENDING
REFUNDED

Print the correct message.

Use switch.
*/