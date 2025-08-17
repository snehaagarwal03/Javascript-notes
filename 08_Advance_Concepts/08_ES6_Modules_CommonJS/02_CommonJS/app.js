//Since we know module.exports is literally a object so we need a variable to hold that object 

const mathOperations = require("./math_operations.js");

console.log(mathOperations);
/*
Output 
{
  add: [Function: add],
  subtract: [Function: subtract],
  multiply: [Function: multiply]
}
*/

//Object is accessing the methods through dot(.) operator
console.log(mathOperations.add(2, 2));
console.log(mathOperations.subtract(5, 3));
console.log(mathOperations.multiply(2, 3));


