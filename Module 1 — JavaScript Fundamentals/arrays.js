//Collection of different or similar types of data in JS


let i = 10;
let j = 20;

let num = [10, 20, 30, 40];

//index starts from 0, i.e. on 0th index value is 10
//LI= 0
//HI= length-1

console.log(num[0]);
console.log(num[4]); //undefined
console.log(num[-1]); //undefined

console.log(num.length); //4

console.log("LI= " + 0);
console.log("HI= "+ (num.length-1));

//add something in the existing array
num[4] = 50;
console.log(num);
console.log(num.length);  // new length= 5
// that means JS arrays are always dynamic

num[10] = 100;
console.log(num); // [ 10, 20, 30, 40, 50, <5 empty items>, 100 ]

//there is no use case, we just see this for experiment purpose

console.log(num[8]);  //undefined
console.log(num[9]);  //undefined
console.log(num[10]);  //100

num[8] = 80;
console.log(num[8]); //80

let studentName = ["tom", "ravi"];
console.log(studentName);
studentName[0]= "akshay";
console.log(studentName);

studentName[5]= "suraj";

console.log(studentName);

console.log("---------------------");

let empData = ['Pratik', 30, 'SDET1', 'IBM', 12.33, true];

console.log(empData);

console.log(typeof empData); //object


const p= [10, 20, 30];
p[0] = 40;

console.log(p);


// p = [1, 2, 3, 4]; //error
// console.log(p);

p[5]= 5;
console.log(p);