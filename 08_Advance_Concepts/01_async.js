// This is synchronous nature of javascript

// console.log("Sneha Agarwal");

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// Asynchronous nature of JavaScript: It means that certain things in the code will not run in sequence. The ability to have a pause in the language and Javascript doesn't have it itself we inject it with some kind of help. Flow diagrams are drawn in notebook.

//Role of event loop in async JS: To handle both sync and async tasks by managing the call stack and callback queue.

function sayHello(){
    console.log("I would like to say Hello")
}

//the first parameter is a callback function and the other is for how much delay you want
setTimeout(() => {
    sayHello();
}, 4000);

console.log("Sneha Agarwal");

for (let index = 0; index < 10; index++) {
    console.log(index);
}

//this shows that the output doesn't follows the sequence as expected 