/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"];

// Another way of declaring an array
let teaFl = new Array("green tea", "black tea", "oolong tea");

const firstTea = teaFlavours[0];

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);
/*
Push adds element at the end of an array
Another way to push the element at last is:
citiesVisited[citiesVisited.length] = "Berlin";
*/

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(lastOrder);
// pop not only pops the last value at that moment but also returns that value that's why we are able to store

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
/* 
So here changes in popularTeas will reflect in softCopyTeas as well. But in case of a variable:
let var1 = 5
let var2 = var1
var1 = 8
console.log(var2);
Still var2 will always be 5 which is absolutely what should happen.
But in case of Arrays this doesn't happen and we saw that above. This is because internally both popularTeas and softCopyTeas are accessing the same memory reference where array is stored so any change at that address will reflect in both of them.
*/

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
// 1ST WAY - most of the time this is used
let hardCopyCities = [...topCities];
// 2ND WAY - used less
let hardCopy = topCities.slice();
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);
console.log(hardCopy);
// "..." is called rest and spread operators. The operators are exactly same but they perform different in different situations.

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);
/*
Above solution is the best way to merge the arrays but let's try something different:
(1). If I try to add up the arrays then what happens
let worldCities = europeanCities + asianCities;
console.log(worldCities);
console.log(typeof worldCities);
OUTPUT : Paris,RomeTokyo,Bangkok
         string
This is actually a string not a array 

(2). let worldCities = [europeanCities,asianCities];
console.log(worldCities);
OUTPUT : [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]
This is a 2D array , yes it is a object but this is not what we want.
*/

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList) // true
/* 
Includes gives the output as true and false only 
If I checked for 
cityBucketList.includes("london");
It would give false because it checks for exact match and uppercase lowercase matters.
*/

/* 
 'shift()' this method specifically removes and returns the first element of an array and shifts the remaining elements to a lower index
*/

/* 
'slice()' creates a shallow copy of existing portion of an array
*/

/* 
To find length we use arr.length without any paranthesis
*/


// To know more about what the includes, pop, push, concat operation does: Ctrl + Click on them to read the description.
// Refer MDN Docs for Arrays and explore all the operations that can be done and exist.