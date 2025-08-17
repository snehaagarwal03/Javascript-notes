let car = {
  make: "Toyoto",
  model: "Cemry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

console.log(car.start());
// Here I can't make new copies of the object

// But constructor function gives me that ability
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
console.log(john.name);

// This is the example of prototypal chain (accessing the prototype and injecting my own properties)
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

// We can do the same with arrays too. Here we are defining a new property for array i.e., sneha and this keyword will point to whoever is calling it
Array.prototype.sneha = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.sneha());
let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.sneha());
// So basically we created 2 arrays and now these arrays can access the array properties and one of them is sneha() which does its defined job.

// CLASSES
// Functions inside class are called methods and there is a special method constructor() and we don't need to write the fucntion keyword also before the methods
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Tata", "Corolla"); // If Car class doesn't have a constructor of its own it will borrow it from the inherited class
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Toyoto", "Corolla");
console.log(vehOne.make);

// Encapsulation - I want to restrict the direct access to the object data

class BankAccount {
  #balance = 0; // # so that nobody could access balance outside the class but i can access inside the class, one can only access through custom methods (like objects can access through deposit method)

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance());

// Abstraction - means hide complex implementation details

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing coffee...`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1}\n${msg2}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
// We got undefined as output because earlier we didn't store the msgs of both methods in a variable and the pressStartButton() method is not returning anything

// Polymorphism - most important concept of oops (something that can take more than one form)

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly.`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// Static method - special methods which can only be called by the class itself and static can be methods, variables, etc.

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator
// console.log(miniCalc.add(2,3))
// We get this error upon executing above console - miniCalc.add is not a function

// So the correct way is
console.log(Calculator.add(2, 3));

// Getters and Setters

// this _salary doesn't mean anything in js it's just to have an idea to have some customisation like what we want to do with it when we set some value and get the salary
class Employee {
  #salary; // making private so emp._salary can't access this
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are allowed to see the salary and it is $ ${
      this.#salary
    } (this is getter)`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Inavlid salary");
    } else {
      this.#salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp._salary);
/* 
Without writing getter and setter the output of above console was 50000 and after that also same. But now we can just use emp.salary to get the code working as expected.

Also we won't write like emp.salary() because salary is not some ordinary method it's a getter setter method and can be used without ().

But we saw that nobody is stopping us from using emp._salary so we wrote #salary in class defintion to make it private and now output will always be undefined whenever trying to access salary like that.
*/

console.log(emp.salary); // prints getter output as we are calling a getter which has a name salary so this invokes getter
emp.salary = -60000; // prints Invalid Salary because we are trying to set a salary so this in invoking setter

// After making the #salary private , now getters and setters get invoked properly. But turns out while we are creating an object and passing the values then constructor is invoked and negative salary is also getting set , so we need a check there too to avoid negative values. Because setter gets invoked like this only (emp.salary = -4000)

console.log(emp.salary); // after setting a salary the getter gets updated too

// Also this._salary was written intentionally and turns out it's a coding practice in companies or to let the person know that in this class getter and setter are gonna be introduced
