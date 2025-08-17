function arguments parameters

| Term          | Where It Appears    | What It Means                         | Example                |
| ------------- | ------------------- | ------------------------------------- | ---------------------- |
| **Parameter** | Function Definition | A placeholder name for expected input | `function greet(name)` |
| **Argument**  | Function Call       | Actual value passed to the function   | `greet("Sneha")`       |








ARROW FUNCTIONS , CLASSIC FUNCTIONS AND THIS CONTEXT

Classic function → this depends on how the function is called.

Arrow function → this depends on where the function is defined (lexical scope).

Timer example- this shows where arrow function is helpful 
function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

const t = new Timer();

Step-by-step:

new Timer() creates a new object → let's call it t.

Inside Timer, this points to t.

The arrow function inside setInterval is defined inside Timer — so it inherits this from Timer’s scope → i.e., t.

When setInterval calls it later, it doesn’t change this — arrow functions always remember the this they closed over.
We can prove this statement with an exmaple and what it means actually:
When an arrow function is created, it locks in whatever this was at the moment of its definition.
Later calls to that arrow function cannot change that this — even if you try to call it with .call(), .apply(), or by attaching it to a different object.

example:
function Outer() {
  this.value = 42;

  const arrowFn = () => {
    console.log(this.value);
  };

  setTimeout(arrowFn, 500); // prints 42

  // Even if we try to trick it:
  setTimeout(arrowFn.bind({ value: 999 }), 1000); // still prints 42
}

new Outer();
output:
42
42 // still prints 42 because arrow function remembers the context of this from where it was defined i.e., outer function and we can't change that


So every time it runs: this.seconds++ updates t.seconds.


Another example that explains behaviour of both arrow and classic function when we use them with functions which set a interval or timeout 

function Test() {
  this.name = "Sneha";

  // Arrow
  setTimeout(() => {
    console.log("Arrow:", this.name);
  }, 500);

  // Classic
  setTimeout(function () {
    console.log("Classic:", this.name);
  }, 500);
}

new Test();

output:
Arrow: Sneha    // inherited from Test()
Classic: undefined // this = window (or undefined in strict mode)

We are getting undefined for classic function because it is called without an explicit object, as after every 1000ms the setTimeout function makes the callback to the classic function but it doesn't know what object instance or method is calling it , it has no reference so we get undefined. setTimeout() is a predefined function


another example where there is no kind of interval or timer function
function Outer() {
  this.seconds = 0;
  console.log("Outer this:", this); // points to Outer’s instance

  function innerClassic() {
    console.log("Inner this:", this);
  }

  innerClassic(); // plain function call → this = undefined (strict mode)
}

new Outer();

output
Outer this: Outer {}
Inner this: undefined
// we get undefined because we don't know what object called it we just simply made a call to the function so "this"doesn't know where it has to point

in the above example if we never call the innerclassic() then innerClassic will never execute, so
console.log("Inner this:", this) inside it will never run — there will be no output for the "Inner this" line.

Functions in JavaScript don’t run just because you define them — they must be called (or triggered indirectly, e.g., by an event or timer).

Key takeaway:

Functions only run when something calls them — either you directly, or another function like setInterval, an event listener, or a promise.

In Timer, The arrow function inside setInterval is defined immediately in Timer. But it’s not called immediately — instead, setInterval stores it. After 1000 ms, the browser automatically calls it for you.

In Outer, innerClassic has no such automatic caller — if you don’t call it yourself, it never runs.

What is setInterval?
Predefined function (built into JavaScript, available in browsers & Node.js).

Used to run some code repeatedly at fixed time intervals.

Syntax:

js
Copy code
setInterval(callbackFunction, delayInMilliseconds, arg1, arg2, ...);
callbackFunction → the function to run each time.

delayInMilliseconds → how often to run it (1000 ms = 1 second).

Extra arguments → passed to the callback when it runs.

Dry run:

Step 1:
You call new Timer().

A new object is created.

this.seconds is set to 0.

Step 2:
setInterval(...) is called.

You pass in an arrow function → () => { this.seconds++; console.log(this.seconds); }.

Arrow function remembers the this from when it was created → the new Timer object.

setInterval stores this callback and schedules it to run every 1000 ms.

Step 3 (After 1000 ms):
Browser executes the arrow function:

this → still points to the Timer instance.

this.seconds++ → increases from 0 → 1.

Logs 1.

Step 4 (After another 1000 ms):

this.seconds++ → increases from 1 → 2.

Logs 2.

And so on…

Output:

python-repl
Copy code
1
2
3
4
...
3️⃣ What if we use a classic function?
js
Copy code
function Timer() {
  this.seconds = 0;

  setInterval(function () {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

new Timer();
Dry run difference:

this inside the classic function now depends on how it’s called.

setInterval calls it without an object → in strict mode, this = undefined (in non-strict mode, it’s the global object like window).

So this.seconds → undefined.seconds → ❌ error.


now lets study how this timer, interval is different from event listeners
How a click event listener works
Example:

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this);
});

Here’s what’s happening:

You call:
btn.addEventListener("click", callback);
This tells the browser:

“Hey browser, whenever a click happens on this btn element, call my callback function.”

Later, when you actually click the button, the browser’s event system runs the callback.

The browser doesn’t just call:
callback();
like setInterval does.

Instead, it calls the function as a method of the element that triggered the event
btn.callback();

Because the callback is called as a method of btn, inside the classic function:

this = the DOM element that triggered the event (in this case, the <button>).

2️⃣ Why it’s different from setInterval
setInterval just stores your function and later does:

storedFunction();
→ no object reference → this = undefined in strict mode.

Event listeners call your function with a context:
element.storedFunction();
→ object reference = the element → this = element.

In event listeners → the browser calls your function with this bound to the element that fired the event.

In setInterval → JS calls your function without any binding, so this is undefined.











//HIGHER ORDER FUNCTIONS

Here's a comprehensive summary of the function concepts and usage patterns from all 3 examples:

Function Usage Patterns - Complete Concept Summary
1. IMMEDIATE FUNCTION EXECUTION (orderTea example)
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder(); // ← CALLING the function immediately
}
Concept:

You define a function inside another function
You call that function immediately with confirmOrder()
The outer function returns the result (a string), not the function itself
Usage: When you want to execute nested logic immediately and return the final result
2. FUNCTION AS PARAMETER - HIGHER ORDER FUNCTIONS (processTeaOrder example)
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey"); // ← CALLING the passed function
}
let order = processTeaOrder(makeTea); // ← PASSING function as argument
Concept:

You pass an entire function as an argument to another function
Inside the receiving function, you call the passed function with specific arguments
This makes your code flexible - you can pass different functions for different behaviors
Usage: When you want to create reusable functions that can work with different behaviors (callbacks, array methods like forEach)
3. FUNCTION FACTORY - RETURNING FUNCTIONS (createTeaMaker example)
function createTeaMaker() {
  return function(teaType) {    // ← RETURNING the function itself, NOT calling it
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker(); // ← teaMaker IS NOW A FUNCTION
console.log(teaMaker("green tea")); // ← NOW we call the returned function
Concept:

You return a function definition, not a function call
The returned function can be stored in a variable and called later
This creates "function factories" that can generate customized functions
Usage: When you want to create specialized functions or maintain private state (closures)

Key Syntax Differences:
Pattern	What You Return	Syntax	Result
Immediate Execution	return functionName()	With parentheses	Gets the function's return value
Function as Parameter	return passedFunction(args)	Calling passed function	Executes the passed function
Function Factory	return function(params) {...}	Function definition	Gets a new function to call later
The Critical Understanding:
With parentheses () = You are CALLING the function (executing it now)
Without parentheses = You are REFERRING to the function (passing or returning the function itself)





// CLOSURE

### 🔍 What is a Closure?

A **closure** is when an **inner function remembers variables from its outer (enclosing) function**, even **after the outer function has finished executing**.

---

### 🔁 Let’s break your example down:

```js
function createTeaMaker(name) {
  let score = 100;

  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("sneha"); // 'name' is set, 'score' is declared
let result = teaMaker("green tea"); // function still has access to 'name' and 'score'
console.log(result); // Making green tea sneha 100
```

---

### 🧠 Why it works:

Even though `createTeaMaker` is **done running**, the returned inner function still has **access to the variables** `name` and `score` that were declared in its scope.

That’s because of **closure** — JavaScript **remembers the lexical environment** (variables and their values) where the function was **created**, not just where it is called.


When you return a function from another function, that inner function **carries a backpack** that contains all the variables it needs from the outer function.

So `teaMaker` still "remembers":

* `name = "sneha"`
* `score = 100`

Even though `createTeaMaker()` already returned.

---

### ✅ This is **Super Powerful** for:

* Data hiding (private variables)
* Function factories
* Memoization
* Event handlers
* Maintaining state in callbacks

---



// NESTED FUNCTIONS
Nested functions are functions defined inside another function.

✅ Syntax Example:
function outerFunction() {
  function innerFunction() {
    console.log("I am inside the outer function!");
  }

  innerFunction(); // Call the inner function
}

outerFunction();


// Output: I am inside the outer function!

You cannot call innerFunction() directly from outside — it only exists inside outerFunction.

even without closures, nested functions can access variables from their outer function’s scope while the outer function is still running. ✅

Closures happen when the inner function still has access to those variables after the outer function has finished running.

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    console.log(outerVar);
  }
}

// ❌ This will throw an error
innerFunction();

ReferenceError: innerFunction is not defined




