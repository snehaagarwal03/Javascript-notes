/*
In JavaScript, every object has an internal hidden property called `[[Prototype]]` (commonly accessible via `__proto__`).
This prototype is just a link to another object
If you try to access a property/method on an object and it’s not found, JavaScript will look into its prototype chain until it finds it (or reaches `null`).
This mechanism is called Prototypal Inheritance.
It allows objects to inherit properties and methods from other objects.
*/

//Constructor function
function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let obj = new Person("Sneha");
obj.greet();


/*
Step-by-step explanation of above code:

1. `Person` is a constructor function.
   When we do `new Person("Sneha")`, it creates an object:

   obj = {
       name: "Sneha",
       __proto__: Person.prototype
   }

2. We added a method `greet` to `Person.prototype`.
   So all objects created using `new Person()` will share this method instead of having their own copy.

3. When we call `obj.greet()`:

   * JS first checks inside `obj`. No `greet` property exists.
   * Then it looks inside `obj.__proto__` (which is `Person.prototype`).
   * Finds `greet` there → executes it → prints `"Hello, my name is Sneha"`.

*/


/*
Why is this Useful? (Use Cases)

1. Memory Efficiency

   * If we had 1000 `Person` objects, without prototypes, each would have its own copy of `greet`.
   * With prototypes, only one shared function exists in `Person.prototype`. Saves memory.

   Example:
   let p1 = new Person("A");
   let p2 = new Person("B");

   console.log(p1.greet === p2.greet); // true (same function in prototype)

2. Shared Behavior : You can define common methods (like `greet`) once, and all instances get them automatically.

3. Extendable Objects : You can add new methods later to the prototype, and all existing objects will also have access.

   Example:
   Person.prototype.sayBye = function() {
       console.log(`${this.name} says bye!`);
   };

   obj.sayBye(); // Sneha says bye!

4. Inheritance Between Constructors: One constructor can inherit from another.
   Example:
   function Employee(name, role) {
       Person.call(this, name); // inherit properties
       this.role = role;
   }

   Employee.prototype = Object.create(Person.prototype);
   Employee.prototype.constructor = Employee;

   let emp = new Employee("Sneha", "Developer");
   emp.greet(); // Hello, my name is Sneha

5. Core JavaScript Built on Prototypes

   * Arrays inherit from `Array.prototype`.
   * Strings inherit from `String.prototype`.
   * Objects inherit from `Object.prototype`.
   
   That’s why we can call:
   let arr = [1,2,3];
   arr.push(4); // push comes from Array.prototype
*/
