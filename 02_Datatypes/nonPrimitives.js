// Objects
let username = { 
    firstname: "sneha",
    isLoggedin: true,
    "fav hobby" : "reading",
};

console.log (username);     //{} when nothing is added
console.log(typeof username);   //object

/* Now if we initialized username as
const username = { 
    firstname: "sneha",
    isLoggedin: true,
};
Then the username is constant but the inside key value pairs are primitives so their value can be changed.
The whole idea is how is data stored in memory. In memory, space is reserved for username so we can't edit that later (that means we are making the memory refernce constant) and it links to 2 other variables but their values can be changed even if we have declared the username const.
*/

// To access inside the object
console.log(username.firstname);  //sneha
username.firstname = "Ms. Sneha";
console.log(username.firstname); //Ms. Sneha

// We can also add some more values
username.lastname = "Agarwal";
console.log(username.lastname); //Agarwal
console.log(username); 

// another way of accessing the variables when they have space in between like fav hobby then they are written with " " enclosed quotes and accessed with [' ']
console.log(username['fav hobby']);

// [' '] can be used to access variables without space also

let today = new Date();   // Date() is also an object
console.log(today);    // 2025-06-10T23:40:00.974Z 
// It's 11 june only and this last pattern keeps on changing everytime we print it
console.log(today.getDate()); // 11



// Arrays
let anotherUser = ["sneha", true]
console.log(anotherUser[0]);  // indexing starts from 0



// Javascript allows implicit type conversion but it can behave very very odd 
console.log(1 + "1"); // 11  
console.log("1" + 1); // 11

let isValue = true;
console.log(isValue + 1); // 2
// Because js considers true as 1 and false as 0 , so it just implicitly converted into number

// Implicit conversion is not the best in any language we need to be very much sure in what we want to convert

/* 
let bool = "true";
console.log(Number(bool)); //NaN

let bool = "2"
console.log(Number(bool)); // 2
console.log(typeof Number(bool)); // number

// Strange behaviour
let bool = "2abc"
console.log(Number(bool)); // NaN - not a number
console.log(typeof Number(bool)); // number

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
*/