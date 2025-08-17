/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}
console.log(sum);



/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);



/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// We are using do while loop because we atleast have to take one input from user to get started
let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

  if (tea && tea.toLowerCase() !== "stop") {
    teaCollection.push(tea);
  }

} while (tea && tea.toLowerCase() !== "stop");
/* In JavaScript to take input from user we use 'prompt()' but node.js doesn't support this because it's a browser only function.
So paste this code in console and press ENTER. Now you can type the tea names and stop to finish.
And then you can print the array on the console to verify.
The optimised code will ensure that empty strings are not added to the array and also if user enters "STOP" or "Stop" then also the code terminates.
Also it's better to use !== to ensure value + type checking.
/*



/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);



/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i] * 2;
  multipliedNumbers.push(num);
}
console.log(multipliedNumbers);

// When we write num instead of let num : JavaScript treats num as a global variable, even if you're inside a block like a for loop. This behavior is allowed but not recommended.
// Without let, you're leaking variables into the global scope. It might conflict with other variables named num elsewhere.



/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  let city = cities[i];
  cityList.push(city);
}
console.log(cityList);