console.log(typeof "hello"); // "string"
console.log(typeof 100);     // "number"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"

console.log(typeof null);    // ❗️"object" (known bug)
// ❗ typeof null === "object" — this is a legacy bug in JavaScript.



let name = "Alice";      // string
let age = 25;            // number
let isStudent = false;   // boolean
let score = null;        // null
let value;               // undefined
let big = 9007199254740991n; // BigInt
let unique = Symbol();   // Symbol

let user = { name: "Bob" };   // Object
let items = [1, 2, 3];        // Array (typeof is "object")
function greet() { return "Hi"; } // Function



// switch Statement
// 📘 Definition:
// Used to test a variable against multiple exact values.
// Often cleaner than multiple else if.


let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Not a special day.");
}
// 📎 Note: Always use break or it will fall through to next case.


// Print table of 7
let n = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}



// 🔹 Closures
// A closure is when a function remembers the variables from its lexical (outer) scope, even after that scope has returned.


function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2


// Closures allow data privacy.
// Helps build stateful functions without using global variables.

function greet(name) {     // () used for parameters, {} for code block
  return "Hi " + name;
}

const users = {             // {} used to define an object
  name: "Jatin",
  hobbies: ["code", "eat"] // [] defines array inside object
};

console.log(users.hobbies[0]); // [] to access first item in array




// callback function

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Jatin", sayBye);


// this keyward

// console.log(this);
    // output=window in js and {} in node.js

function show() {
console.log(this);
}
show(); // ✅ Logs window (in browser)
// But in strict mode, it will be undefined.

// 3. Inside a Method (Object Function)

const named = {
  name: "Jatin",
  greet: function () {
    console.log(this.name);
  }
};

named.greet(); // ✅ Logs "Jatin"
// 🧠 this refers to the user object because greet() is called as a method of user.

// 4. Alone in Arrow Functions

const usered = {
  name: "Jatin",
  greet: () => {
    console.log(this.name);
  }
};

usered.greet(); // ❌ undefined
// 🧠 Arrow functions don’t bind this.
// They inherit it from their lexical (outer) scope, which is likely window (or undefined in strict mode).




//  Spread and Rest Operators
// Spread (... to expand)

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

const user1 = { name: 'Jatin' };
const user2 = { ...user1, age: 24 }; // { name: 'Jatin', age: 24 }
// Rest (... to gather)

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
