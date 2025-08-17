let computer = { cpu: 12 };
let tomHardware = {};

console.log(computer);
console.log(`computer`, computer.__proto__);

/*  
"__" is called dunder and together with proto it's called dunder prototype . We used this to access prototype for an object and you can paste this on console to see more properties because it's define in browser more nicely. We can use this same method to access prototype for any other object, array , etc. 
*/

/* Now if we add the proto in the previously defined lenovo - Use case of this is some properties are repetitive so this way we can add all the properties of an object in another object with just one line */
let lenovo = {
  screen: "HD",
  __proto__: computer,
};

// See what happens
console.log(`lenovo`, lenovo.__proto__);

/* 
Earlier this output was printed when we logged the computer.__proto__:
computer [Object: null prototype] {}
See the prototype is null , it has some properties but they are not specific or additional to computer so no use of showing them on terminal 
But in case of "lenovo" we added the computer proto and now its properties were added to lenovo so the additional and specific properties were printed when logged.
*/

let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};

// Now turns out we don't have to always add __proto__ like this in the object (this is an old way)
// We can use setPrototypeOf(in which you want to access, from which you want to access) property of object to do this
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, tesla); // {driver:"AI"}
console.log(`tesla`, genericCar); // {tyres:4 }
console.log(`tesla`, tesla.tyres); // 4
console.log(`tesla`, Object.getPrototypeOf(tesla)); // (tyres: 4)
// tesla always have access of its own property but whatever property we have injected we can access that using getPrototypeOf()

// We can learn about more properties and their usage on MDN Docs

