//ES6 Modules - The most standard way to export and import modules in JavaScript.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

//there can only be one export default in a file, but there can be multiple named exports.
//ES6 Modules purpose is to split the code into smaller and reusable pieces, and import/export them across different files