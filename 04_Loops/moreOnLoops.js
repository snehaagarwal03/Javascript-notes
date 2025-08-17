/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai") {
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);
// break throws the control at the end of the for loop after curly braces for(){} so it ends the loop 



/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "Paris") {
        continue;
    }
    visitedCities.push(cities[i]);
}
console.log(visitedCities);



/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

/* 
Syntax of for-of loop:
for (const element of object) {
    
} 
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers =[];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);
// Here the "i" is handled by javascript itself so we can focus on functionality.


/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
console.log(preferredTeas);


/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

/* 
Syntax of for-in loop:
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];   
    }
}
There are 3 main important ".call", ".bind", ".apply".
Order is not important in object because here indexing is based on keys which can be accessed anytime (direct memory access)
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulations = {};
//console.log(Object.keys(citiesPopulation));
//console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
  // key = value ( city is the key ) and we are placing the value from old object into new object at that key 

}
console.log(cityNewPopulations);
// Just like Arrays , explore about Object.xyz properties also on MDN Docs. Object.freeze() is asked in interviews frequently.



/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);



/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

/* 
Syntax of forEach loop:
array.forEach(element => {
    
}); 

function hello (){} -> these kinds of functions are written with names but there are special places where we can use them without any name like in forEach loop 
We can also write function as (() => {});
This => tells that there is an function which is iterating over an element enclosed in paranthesis.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);
// break can't be used like this in function so we used return


/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

// An example of higher-order function as for-each method is accepting another function as a parameter.
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach(function (city) {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);
/* Return works for skip also because we are using this function on every single element and 4 functions are being fired up in the memory one at a time. The function checks the condition nothing happens so does the job and goes away and then another function comes and so on. But where the condition becomes true we tell the function that at this point you have to go out of memory. */



/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let myNumbers = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < myNumbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);



/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
// Here we are using string.length property