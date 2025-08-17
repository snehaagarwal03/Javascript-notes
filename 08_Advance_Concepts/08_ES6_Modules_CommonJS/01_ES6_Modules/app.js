//Module import file - most common way to import modules in ES6
//This file imports functions from another module and uses them.

//default import
import multiply from './math_operations.js';

//named import
import {add, subtract} from './math_operations.js';

console.log(multiply(2, 2));
console.log(add(2, 3));
console.log(subtract(5, 3));