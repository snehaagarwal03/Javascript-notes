let score = 102
let bonus = 25

let totalScore = score + bonus;
console.log(totalScore);

let addition = 4 + 5;
let subtract = 9 - 3
let mult = 3 * 5
let div = 10 / 2
// (modulus)
let remainder = 9 % 2 
let expo = 2 ** 3

let myScore  = 110
console.log(myScore++)  // prints 110
console.log(++myScore)  // prints 112

// Comparison
let num1 = 3
let num2 = 3
let num3 = 6

console.log(num1 == num2) //true
console.log(num1 != num3) //true

// Logical 
// && -> and
// || -> or
// ! -> not/reverse

let isLoggedin = true
let isPaid = false
console.log(isLoggedin && isPaid) //false

let isEmailUser = true
let isGoogleUser = false
console.log(isEmailUser || isGoogleUser) //true

// Assignment 
let num = 10 + 11
let num4 = 10
num4 += 5 // num4 = num4 + 5
console.log(num4) // 15

//Nullish coalescing operator
//treats only null and undefined as missing values 

let userColor = undefined;
let defaultColor = "blue";

let currentColor = userColor ?? defaultColor;
console.log(currentColor); // Output: "blue"
// If userColor was not null or undefined, it would print userColor only


// Operator precedence
let result = 2 * 3 + 2 - 1
console.log(result) // 7
// always use brackets that's a good approach

