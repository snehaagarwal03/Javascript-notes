//To make a regular function into a generator function , put star (*) after the function keyword.
//Generator function doesn't execute things all at a once. When you hit it , then it executes and how many times it can be called, it can remember that.
// (*) with yield keyword is called generator
// next() is the iterator that remembers the last reference in generator function ,keeps a track of whole things and keeps on going until it goes out of bound. It iterates through the value.
//Instead of return we use yield here

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator(); //this is a generator object
const genTwo = numberGenerator(); //this is another generator object

console.log(gen);   //Object [Generator] {}

//this hits the function very first time
console.log(gen.next()); //{ value: 1, done: false }
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next()); // { value: undefined, done: true }
//after this it will not return anything because the generator function has no more yield statements left

//remembers that this is another object calling the function and starts from beginning
console.log(genTwo.next().value);
console.log(genTwo.next().value);
