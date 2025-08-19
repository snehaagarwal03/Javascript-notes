# Rest and Spread operators

These operators are almost same but perform different in different situations

## Rest ... (Collecting values into an array):

Used in function parameters or destructuring  
It gathers the rest of the elements into an array.

**Example: Rest in Destructuring**

```javascript
const fruits = ["apple", "banana", "mango", "orange"];

const [first, second, ...others] = fruits;

console.log(first);   // "apple"
console.log(second);  // "banana"
console.log(others);  // ["mango", "orange"]
```

---

## Spread ... (Spreading values out of an array):

Used in array literals, function calls, etc.  
It expands or spreads array elements out individually.

📌 **Example: Spread in Array Creation**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4, 5]
```

📌 **Example: Spread in Function Call**

```javascript
const nums = [10, 20, 30];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...nums)); // 60
// see while calling the function we are passing array name but in fucntion definition we have used numbers/int type so ... operator expanded array elements