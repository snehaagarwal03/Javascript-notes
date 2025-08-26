# JavaScript Notes

## Running JavaScript Files

To run a javascript file we write this in terminal:

```bash
node filename.js
```

## VS Code Tips

- Shortcut for `console.log()` in vscode is just type `log` and hit tab
- Using semicolon at the end of the line is optional nowadays in js
- `Shift + Alt + A` is used to add or remove multi line comments

---

## Operators Precedence Table

| Precedence | Operator Type                      | Operators                                | Associativity |
| ---------- | ---------------------------------- | ---------------------------------------- | ------------- | ------------- | ------------- |
| 20         | **Grouping**                       | `()`                                     | N/A           |
| 19         | **Member Access**                  | `.`                                      | Left to Right |
|            | **Computed Member**                | `[]`                                     | Left to Right |
|            | **Function Call**                  | `()`                                     | Left to Right |
| 18         | **new** (with args)                | `new`                                    | Right to Left |
| 17         | **Postfix Increment**              | `expr++`                                 | N/A           |
|            | **Postfix Decrement**              | `expr--`                                 | N/A           |
| 16         | **Logical NOT**                    | `!`                                      | Right to Left |
|            | **Unary Plus/Minus**               | `+`, `-`                                 | Right to Left |
|            | **Prefix Inc/Dec**                 | `++`, `--`                               | Right to Left |
|            | **typeof, delete, void**           | `typeof`, `delete`, `void`               | Right to Left |
| 15         | **Exponentiation**                 | `**`                                     | Right to Left |
| 14         | **Multiplication/Division/Modulo** | `*`, `/`, `%`                            | Left to Right |
| 13         | **Addition/Subtraction**           | `+`, `-`                                 | Left to Right |
| 12         | **Bitwise Shift**                  | `<<`, `>>`, `>>>`                        | Left to Right |
| 11         | **Relational**                     | `<`, `<=`, `>`, `>=`, `in`, `instanceof` | Left to Right |
| 10         | **Equality**                       | `==`, `!=`, `===`, `!==`                 | Left to Right |
| 9          | **Bitwise AND**                    | `&`                                      | Left to Right |
| 8          | **Bitwise XOR**                    | `^`                                      | Left to Right |
| 7          | **Bitwise OR**                     | `                                        | `             | Left to Right |
| 6          | **Logical AND**                    | `&&`                                     | Left to Right |
| 5          | **Logical OR**                     | `                                        |               | `             | Left to Right |
| 4          | **Nullish Coalescing**             | `??`                                     | Left to Right |
| 3          | **Conditional (ternary)**          | `? :`                                    | Right to Left |
| 2          | **Assignment**                     | `=`, `+=`, `-=`, `*=`, etc.              | Right to Left |
| 1          | **Comma**                          | `,`                                      | Left to Right |

---

## Equality Operators

Difference between `==` `===` and `!=` `!==` and when and where we use them:

| Operator | Name                | Compares     | Performs Type Conversion? | Example               |
| -------- | ------------------- | ------------ | ------------------------- | --------------------- |
| `==`     | Equal to            | Value only   | ✅ Yes                    | `'5' == 5` → `true`   |
| `===`    | Strict Equal to     | Value + Type | ❌ No                     | `'5' === 5` → `false` |
| `!=`     | Not Equal to        | Value only   | ✅ Yes                    | `'5' != 5` → `false`  |
| `!==`    | Strict Not Equal to | Value + Type | ❌ No                     | `'5' !== 5` → `true`  |

### == (Loose Equality)

Converts both values to the same type before comparing.

```js
"10" == 10; // true
false == 0; // true
null == undefined; // true
```

### === (Strict Equality)

No type conversion — values must be same type and value.

```js
"10" === 10; // false
false === 0; // false
null === undefined; // false
```

---

## HOISTING

### 🧠 **What is Hoisting?**

Hoisting is JavaScript's behavior of **moving declarations to the top of their scope** (before code is executed).

It's like JS saying:

> "I'll take all your `var`, `function`, and certain `class` declarations and put them at the top in my memory before running your code."

### 🔍 How It Works Internally

- **During compilation**, JS scans your code first (before running it).
- It **remembers** variable and function _declarations_, but **not** assignments.
- Then it runs your code line by line.

### 1️⃣ Hoisting with `var`

```js
console.log(a); // undefined, NOT error
var a = 5;
console.log(a); // 5
```

Why?
JavaScript actually treats it like:

```js
var a; // declaration moved to top
console.log(a); // undefined
a = 5; // assignment stays here
console.log(a); // 5
```

### 2️⃣ Hoisting with `let` and `const`

```js
console.log(b); // ❌ ReferenceError
let b = 10;

console.log(c); // ❌ ReferenceError
const c = 20;
```

Why?

- `let` and `const` are **also hoisted** but placed in a **Temporal Dead Zone (TDZ)** — a phase where the variable exists but can't be used until it's declared in code.

### 3️⃣ Hoisting with Functions

```js
sayHi(); // "Hello!"

function sayHi() {
  console.log("Hello!");
}
```

Why?
Function **declarations** are hoisted with their entire body, so you can call them before they appear.

### 4️⃣ Function Expressions (with var, let, const)

```js
sayHello(); // ❌ TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello!");
};
```

Here:

- `var sayHello` is hoisted (initialized as `undefined`).
- You try to call `undefined()` → TypeError.

With `let` or `const`:

```js
sayHello(); // ❌ ReferenceError
let sayHello = function () {
  console.log("Hello!");
};
```

This hits the **TDZ** again.

### 📦 Quick Summary Table

| Declaration Type  | Hoisted?                    | Initialized?    | Can Use Before Declared? |
| ----------------- | --------------------------- | --------------- | ------------------------ |
| `var`             | ✅ Yes                      | `undefined`     | Yes (but undefined)      |
| `let`             | ✅ Yes                      | No (TDZ)        | ❌ No                    |
| `const`           | ✅ Yes                      | No (TDZ)        | ❌ No                    |
| `function` (decl) | ✅ Yes                      | Full body       | ✅ Yes                   |
| Function expr.    | ✅ Yes (var)/TDZ(let/const) | undefined or No | ❌ No                    |

💡 **In Short**:

> Hoisting means _declarations_ are moved to the top of their scope during compilation, but _initializations_ stay where they are.

### **Memory Creation Phase** and **Execution Phase** for hoisting.

#### 🧪 Example Code

```js
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;

sayHi();

function sayHi() {
  console.log("Hi!");
}

sayHello();

var sayHello = function () {
  console.log("Hello!");
};
```

#### **1️⃣ Memory Creation Phase (before execution)**

JS scans the whole code first:

| Name       | Value in Memory (Before Execution) | Notes                                                      |
| ---------- | ---------------------------------- | ---------------------------------------------------------- |
| `a`        | `undefined`                        | `var` is hoisted & initialized as `undefined`              |
| `b`        | **uninitialized** (TDZ)            | `let` is hoisted but not initialized                       |
| `c`        | **uninitialized** (TDZ)            | `const` is hoisted but not initialized                     |
| `sayHi`    | **function code** (full body)      | function declarations are hoisted with body                |
| `sayHello` | `undefined`                        | function expression with `var` behaves like a normal `var` |

#### **2️⃣ Execution Phase (line by line)**

1. `console.log(a)` → `undefined` (because `var a` is hoisted & set to undefined)
2. `console.log(b)` → ❌ **ReferenceError** (b is in TDZ)
3. `console.log(c)` → ❌ **ReferenceError** (c is in TDZ)
4. `a = 10;` → `a` now has value `10`
5. `b = 20;` → `b` initialized, TDZ ends for `b`
6. `c = 30;` → `c` initialized, TDZ ends for `c`
7. `sayHi();` → `"Hi!"` (function declaration works before definition)
8. `sayHello();` → ❌ **TypeError**: `sayHello` is `undefined` (var was hoisted but assigned later)

#### 🖼 Memory Diagram

**Before execution starts:**

```
Global Scope Memory:
a         → undefined
b         → TDZ
c         → TDZ
sayHi     → function sayHi() { console.log("Hi!"); }
sayHello  → undefined
```

**During execution:**

```
console.log(a) → undefined
console.log(b) → ReferenceError (TDZ)
console.log(c) → ReferenceError (TDZ)
a = 10
b = 20
c = 30
sayHi() → "Hi!"
sayHello() → TypeError: undefined is not a function
```

---

## SCOPE OF VARIABLES

### 1️⃣ What is Scope?

**Scope** determines **where in your code a variable can be accessed**.

Think of scope like "the visibility range" of a variable.

### 2️⃣ Types of Scope in JavaScript

#### **A. Global Scope**

- Declared **outside** of any function or block.
- Accessible **anywhere** in the file after declaration.

```js
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // ✅ Works
}

showGlobal();
console.log(globalVar); // ✅ Works
```

#### **B. Function Scope**

- Variables declared inside a function are **only accessible within that function**.
- Applies to `var`, `let`, and `const` (but block scope rules still apply to `let` and `const` inside sub-blocks).

```js
function myFunction() {
  var funcVar = "I live inside a function";
  console.log(funcVar); // ✅ Works
}

myFunction();
console.log(funcVar); // ❌ Error: not defined
```

#### **C. Block Scope** (only for `let` and `const`)

- A block = anything inside `{ }` (loops, if statements, etc.).
- `let` and `const` are **block scoped**, `var` is **not**.

```js
if (true) {
  var varTest = "I ignore blocks";
  let letTest = "I am block scoped";
  const constTest = "Me too!";
}

console.log(varTest); // ✅ Works
console.log(letTest); // ❌ Error
console.log(constTest); // ❌ Error
```

#### **D. Lexical Scope**

- Functions can access variables from their **outer scope**.
- This is the basis for closures.

```js
function outer() {
  let outerVar = "I am from outer";

  function inner() {
    console.log(outerVar); // ✅ Access outer scope
  }

  inner();
}

outer();
```

### 3️⃣ Scope Chain

When you try to access a variable, JS looks:

1. In the current scope
2. If not found → In the outer scope
3. Repeats until global scope
4. If still not found → **ReferenceError**

The chain only works from inside to outside not the other way

```js
let globalName = "Sneha";

function outer() {
  let outerName = "Hitesh";

  function inner() {
    let innerName = "JavaScript";
    console.log(innerName); // Found in inner
    console.log(outerName); // Found in outer
    console.log(globalName); // Found in global
  }

  inner();
}

outer();
```

### 4️⃣ `var` vs `let`/`const` Scope Summary

| Feature       | `var`            | `let` / `const` |
| ------------- | ---------------- | --------------- |
| Scope type    | Function scope   | Block scope     |
| Hoisted       | Yes, `undefined` | Yes, TDZ        |
| Redeclaration | Allowed          | Not allowed     |

---

## Nullish Coalescing Operator

### 🔹 What is the **Nullish Coalescing Operator (`??`)**?

The **`??`** operator returns the **right-hand value** only if the **left-hand value is `null` or `undefined`**, otherwise it returns the left-hand value.

👉 Unlike the `||` (OR) operator, it **does not treat `false`, `0`, or empty string `""` as fallback conditions**.

### 🔹 Example 1 — With `undefined`

```js
let userColor = undefined;
let defaultColor = "blue";

let currentColor = userColor ?? defaultColor;
console.log(currentColor); // Output: "blue"
```

✅ Because `userColor` is `undefined`, `??` takes the right side (`"blue"`).

### 🔹 Example 2 — With a real value

```js
let userColor = "red";
let defaultColor = "blue";

let currentColor = userColor ?? defaultColor;
console.log(currentColor); // Output: "red"
```

✅ Because `userColor` is **neither `null` nor `undefined`**, `??` returns `"red"`.

### 🔹 Comparison with `||` (OR)

```js
let userColor = "";
let defaultColor = "blue";

let currentColor1 = userColor || defaultColor; // OR operator
let currentColor2 = userColor ?? defaultColor; // Nullish coalescing

console.log(currentColor1); // "blue"  (because "" is falsy)
console.log(currentColor2); // ""      (because "" is NOT null/undefined)
```

👉 Key difference:

- `||` treats **falsy values** (`false`, `0`, `""`, `NaN`) as if they don't exist.
- `??` only treats **`null` and `undefined`** as missing values.

⚡ **In short**:

- Use `||` when you want to provide defaults for **any falsy value**.
- Use `??` when you want to provide defaults \*\*only for
