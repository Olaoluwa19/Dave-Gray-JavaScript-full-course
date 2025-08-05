//Loops

//Example 1:
// while loop:

// let myNumber = 0;
// while (myNumber < 50) {
//   console.log(myNumber);
//   myNumber++;
// }

// to get number from 1 - 50:
// let myNumber = 0;
// while (myNumber < 50) {
//   myNumber++;
//   console.log(myNumber);
// }

// *2
// let myNumber = 1;
// while (myNumber <= 50) {
//   console.log(myNumber);
//   myNumber++;
// }

// to increment by 2
/* let myNumber = 0;
while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
} */

// Don't create an endless loop

// Example 2:
// do while loop
// let myNumber = 50;
// do {
//   myNumber += 1;
//   console.log(myNumber);
// } while (myNumber < 50);

// In a do while loop, the computer will execute the code atleast once even if this requirement is not meant.

// Example 3 : for loops
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

/* for (let i = 0; i <= 10; ) {
  console.log(i);
  i++;
} */

/* let i = 0;
for (; i <= 10; ) {
  console.log(i);
  i++;
} */

/* let name = "Oladapo";
for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
} */

/* let name = "Oladapo";
let counter = 0;
let myLetter;
while (true) {
  myLetter = name[counter];
  console.log(myLetter);
  if (myLetter === "d") break;
  counter++;
} */

let name = "Oladapo";
let counter = 0;
let myLetter;
while (true) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 2) {
    counter += 3;
    continue;
  }
  if (myLetter === "o") break;
  counter++;
}
console.log(counter);
