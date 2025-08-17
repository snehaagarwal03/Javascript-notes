// Number

let balance = 120;
// Using the new keyword then datatype and then the value
let anotherBalance = new Number(120);
// so turns out we can convert a primitive datatype into an object
// That's why it is said that in JavaScript everything is an object

console.log(balance);
console.log(anotherBalance); // [Number: 120] a complex datatype

// So to get the value of this object
console.log(anotherBalance.valueOf());

// typeof() is used to check the type of variable
console.log(typeof anotherBalance);
console.log(typeof balance);

// boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended way

// null and undefined
let firstname;
console.log(firstname); // undefined
// meaning i know it exists but it doesn't have a definition yet or i don't know the value of it , it can have any value string, 0, boolean, etc.

//console.log(lastname); // cannot access before initialization - it is null
// but this is not a good way to depict null
let name = null;
console.log(name); // this is null gives output as null
// meaning it is actually empty , it has no value not even zero

// this is also allowed
let surname = undefined;
console.log(surname);

// String

// different ways to define a string
let myString = "hello"
let myStringOne = 'Hola'
let username = 'sneha agarwal'

// old way
let oldGreet = myString + " " + 'sneha'
console.log(oldGreet)
// new way - string interpolation
let greetMessage = `Hello ${username} !`;
let demo = `Value is ${2 * 2}` // Value is 4
// this dollar sign actually does the computation
console.log(greetMessage);
// here we can inject as many variables as we want


// Symbol - unique value

let sm1 = Symbol()
let sm2 = Symbol()
console.log(sm1 == sm2);   // false
// the values are not same

console.log(sm1)   // Symbol()
// but in the memory it's actually a unique value

let sm3 = Symbol("sneha")
let sm4 = Symbol("sneha")
console.log(sm3 == sm4);   // false
// even when the symbol are same it's false it's actually symbol name the values inside are different , this is the whole point symbol ensures uniqueness
// it always creates a new symbol every time no matter what