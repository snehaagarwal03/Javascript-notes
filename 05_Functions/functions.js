/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
  console.log(test); // this is an unreachable code line, at return the function ends so even if you write something after it, it will never be executed
}
let teaOrder = makeTea("lemon tea"); 
//console.log(teaOrder);
// Without storing or printing the return value we won't be able to see anything on the terminal



/* 
  2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
  Call `confirmOrder` from within `orderTea` and return the result.
  */

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
  //We are able to return a whole function in javascript that's its capability.
}

let orderConfirmation = orderTea("chai");
//console.log(orderConfirmation);
/* 
How this program executes step by step:
Step 1: orderTea("chai") is called and its creates a execution context
Step 2: JS enters the orderTea function
Step 3: Inside orderTea, confirmOrder is defined (but not yet executed)
Step 4: confirmOrder() is called
Step 5: Now we enter the confirmOrder function
Step 6: confirmOrder returns a string → "Order confirmed for chai"
Step 7: That string is returned from orderTea and stored in orderConfirmation
Also every function when loads up in memory has its safe execution part/box where it does the job specified.

You can search just on google about Javascript execution context to learn about it more
*/



/* 
  3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
  Store the result in a variable named `totalCost`.
  */

/* 
We used a short format here because the function had one line of code only to execute and it should be written in one line to execute if that is so.
We could have written like this also :
const calculateTotal = (price, quantity) => {
    return price * quantity;
}
*/
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499,100);
//console.log(totalCost);
/* 
Ways of creating function:
function greet () {}
const greet = () => {}
Arrow function can be used without name also () => {}

On the browser console we ran these two codes to understand about arrow functions and this context:
(1.) const testone = () => {
    console.log(this);
}
testone(); // Output: window (in browser)

(2.) function testtwo() {
    console.log(this);
}
testtwo(); // Output: window (in browser)

Both of them printed Window object. So arrow function have this context and has ability to reach that but it doesn't have the ability to pass on this context to anywhere.
We cannot use arrow functions when we try to access any element on the web , we have to use the classic functions.
*/




// HIGHER ORDER FUNCTIONS
/* 
  4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
  Return the result of calling `makeTea`.
  */
function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;   
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);
//Javascript has the ability to take function as a parameter. We named maketea as teaFunction because that is a placeholder, a variable, an empty box and it can be named anything it will not make a difference. And in some cases it is written as just "fn".
//The control from line 97 goes to line 93 and then to line 89.
//Another example of higher order function was that of for-each loop which is a method that accepts a function as a parameter and then executes that function for each element in the array.
// Anything that takes a function as an argument or returns a function is considered a higher-order function.




/* 
  5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
  Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
  */

function createTeaMaker(name) {
  let score = 100;
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("sneha");
let result = teaMaker("green tea");
console.log(result);

// The createTeaMaker function returns another function that can be called later. teaMaker holds a function. teaMaker is not an ordinary variable , its holding a function and whoever holds a function we can literally execute/call that.
//Turns out all the inner functions have access to whatever is defined and passed in the outer function. This is a special behaviour which is only invoked inside the function and not anywhere else.
//This is a closure, the inner function has access to the outer function's variables even after the outer function has finished executing. So teaMaker can access name and score variables even after createTeaMaker has returned.

//console.log(teaMaker("green tea")); 
//if we didn't store it in a variable "result" and just called teaMaker("green tea") then it would have printed the result on the console but we would not be able to use it later.


