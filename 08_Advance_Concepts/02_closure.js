// Closures are functions that remember the environment in which they are created

function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter
    };
}

let increment = outer();
console.log(increment());
console.log(increment());
// The first call to increment() returns 5, and the second call returns 6 that means it remembers the variable counter's state from the previous call.