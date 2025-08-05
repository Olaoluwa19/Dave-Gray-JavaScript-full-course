// var, let and const.
// when you use "var" it causes confusion in case of re-assignment because the system will not throw back an error and there could be problem. "AVOID IT AT ALL COST!!!"
/* var x = 1; 
var x = 3;

console.log(x); */

// In the case of "let", you get SyntaxError imediately.
/* let x = 1; 
let x = 3; */

// It will allow for re-assignment only if the "let" word is not repeated which is okay.
/* let x = 1; 
 x = 3;

console.log(x); */

// Both "var" and "let" will allow re-assignment unlike "const"

// In case of "const", this will throw a TypeError. This is the most preferrable for usage. It should be used always except for instance's of re-assignment when "let" should be used.
/* const x = 1;
x = 2;

console.log(x);
 */

// Global Scope:
/* var x = 1;
let y = 2;
const z = 3;

// Local Scope :Items in the "Local scope" cannot be called from the "Global scope" There are 2 types;
// Block scope(We can put a "Block" inside of a "Function" scope)
 {
  let y = 4;
  console.log(y);
} 

// Function(We can put a "Function scope" inside of a "Function scope"). Unlike the "Block scope", for a "Function" scope to appear in the console, it mjust be called
   // Values can only be passed down as inheritance. They canot be passed up. 
function myFunc() {
  const z = 5;
  console.log(y);

  // Local scope
  {
    let y = 4;
    console.log(y);
    // Values in stay within their "Blocks".
  }
}

myFunc(); */

//Global Scope
var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global : ${x}`);
console.log(`global : ${y}`);
console.log(`global : ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;
  {
    var x = 11; // function scoped
    const z = 6; // block scoped
    console.log(`Block : ${x}`);
    console.log(`Block : ${y}`);
    console.log(`Block : ${z}`);
  }
  console.log(`function : ${x}`);
  console.log(`function : ${y}`);
  console.log(`function : ${z}`);
}

myFunc();
