//We can manually create the asynchronous nature of javascript using promises
//Promises is a utility provided in javascript which creates a clean way to handle asynchronous code like network calls , timer functions, etc.

//Promise creation
function fetchData() {
  //we have to invoke the promise using new Promise
  return new Promise((resolve, reject) => {
    // Simulating a network request with a timeout
    setTimeout(() => {
      let success = true; // Simulate success or failure
      if (success) {
        resolve("Data fetched successfully!"); //whatever data we want we can send in the resolve be it arrays, objects, strings,etc.
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}

//Promise consumption
//Chaining , then for resolve and catch for reject. then and catch also have callbacks that catch the data sent by resolve and reject respectively. Now whatever you sent by then that can also be catched by another then basically then chaining is also possible.
fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  //without another then chaining the return statement won't give the output as "sneha" because whatever that then method is returning needs to be catched to display on console. This is basically use at times when we want to return some json data, etc.
  .catch((error) => console.error(error));


  
/*
let response = fetchData();
console.log(response);    // Promise { <pending> }
*/

//The promise takes a callback (function) mainly nameless arrow functions which takes 2 parameters resolve and reject. Either the promise is going to be accepted or rejected. If rejected then we have to send other kind of data, if accepted then other kind of data.
/*
Every single promise has some states associated with it:
1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.
*/

//Promise Chaining: A technique used to call then() multiple times in sequence to handle the results of a promise.
