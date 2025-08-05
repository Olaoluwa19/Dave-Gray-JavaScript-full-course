// Javascript Errors and Error Handling
"use strict";
// ERROR 1:
//variable = "Oladapo";  ReferenceError
//const variable = "Oladapo";
//console.log(variable);

// ERROR 2:
//Object..create() SyntaxError

// ERROR 3:
//const name = "Oladapo";
//name = "Joe"; TypeError
//console.log(name);

/* const makeError = () => {
  try {
    const name = "Dave";
    name = "Joe";
  } catch (err) {
    console.log(err);
    console.warn(err);
    console.table(err);
    console.error(err);
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  }
}; 

makeError();*/

/* const makeError = () => {
  try {
    throw new customError("This is a custom error!");
  } catch (err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  }
};

makeError();

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}
 */

// GENERIC ERROR CONSTRUCTOR
/* const makeError = () => {
  try {
    throw new Error("This is a generic error!");
  } catch (err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  }
};

makeError(); */

// FINALLY BLOCK:
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0 ) {
       throw new Error("Odd number!"); 
      }
      console.log("Even number!")
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finally!");
      i++;
    }   
  }
};

makeError();
