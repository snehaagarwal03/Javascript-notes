// Constructor functions
// First letter of function is capital which denotes it's a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Creating an object
let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

// So both the objects are different and if I remove the "new" keyword then the console will print undefined
// this and new have some internal linking
// 'this' keyword refers to newly created object inside a constructor function so currently this points to 'myNewCar'

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea);
console.log(lemonTea.describe());
// Accessing the function with help of object

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};
// Basically we are adding some property or method to the constructor function with the help of prototype.
// Note here we are using prototype with constructor function and not the object.
// So consider we want to add a sound property, what it will do that will be define within a function

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("Cat");
console.log(cat.sound());
// So everytime new creates a new object but this ensures it's referring to the recent context and switches context

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee");

// So now the exception will be thrown for "coffee". This we are doing to check whether the user created the object with new keyword or not