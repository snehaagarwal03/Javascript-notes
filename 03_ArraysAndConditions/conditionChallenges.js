// Check if a number is greater than another number

let num1 = 5;
let num2 = 8;
console.log("I am a regular upper code");

if (num1 > num2) {
  console.log("num 1 is greater than num 2");
} else {
  console.log("Nope, num1 is not greater than num2");
}

console.log("I am a regular lower code");

// Check if a string is equal to another string

let username = "sneha";
let anotherUsername = "sneha";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// Check if a variable is a number or not

let score = 44;

// === to check even the type of variation is same
if (typeof score === "number") {
  console.log("This is a number");
} else {
  console.log("Not a number");
}

// Now if i write like let score = "44" then it will give output (Not a number) as its written with double quotes
// Array datatype is object

// Check if a boolean is true or false

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is ready");
} else {
  console.log("Tea is not ready");
}

// Check if an array is empty or not

let items = [];
console.log(items.length); // 0

if (items.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is NOT empty");
}

