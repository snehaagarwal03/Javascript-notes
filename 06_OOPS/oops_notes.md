JavaScript is a prototype based programming language. (under the hood)
But as many programmers come to this language having studies oop so now js also offers all kinds of keywords like classes constructors inheritance and everything
so now we will be studying first prototype based language and then moving forward with oop

open console and write this code to see that js is actually prototype based under the hood supporting all oop fundamentals

let myVal = [1,2,3];
myVal
this is what we got as output
![Console Output](image.png)
Prototype means functionality or extra property in any given datatype. all implementations, all methods like push pop shift foreach and everything is an object in js world
prototype purpose is to define properties and methods that can be shared by all instances of an object

oop is the ability to create objects . objects can be created by construction function also
4 concepts : encapsulation , inheritance, polymorphism, abstraction

we want to create objects which are instances of the classes
even the classes under the hood is an object

below all examples show inheritance in javascript classes

class Animal {}
class Dog extends Animal {}

function Animal(){}
function Dog (){
    Animal.call(this);
}

let Dog = Object.create(Animal.prototype);


Encapsulation is ability to hide internal details and show only necessary parts of an object

"super" is the keyword used in JavaScript to call the constructor of a parent class from a derived class, allowing you to access its properties and methods effectively

 polymorphism is ability of different objects to respons to same function or method call in different ways

 getters are used to fetch data and setters are used to modify data providing a way to control access to object properties