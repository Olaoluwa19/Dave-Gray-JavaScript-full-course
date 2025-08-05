// Conditionals: If statements

/* //syntax
if (condition) {
  //run some code
} else {
  //run some other/different code
} */

// Example 1 :
// let customerIsBanned = false;
// let soup = "Chicken noodle  soup";
// let crackers = true;
// let reply;
// if (customerIsBanned) {
//   reply = "No soup for you!";
// } else if (soup && crackers) {
//   reply = `Here is your order of ${soup} and crackers`;
// } else if (soup) {
//   reply = `Here is your order of ${soup}`;
// } else {
//   reply = "Sorry, we're out of soup";
// }
// console.log(reply);

// Example 2 : TestScores
// let TestScore = 55;
// let collegeStudent = false;
// let grade;
// if (TestScore >= 90) {
//   grade = "A";
// } else if (TestScore >= 80) {
//   grade = "B";
// } else if (TestScore >= 70) {
//   grade = "C";
// } else if (TestScore >= 60) {
//   grade = "D";
// } else {
//   if (collegeStudent) {
//     grade = "U";
//   } else {
//     grade = "F";
//   }
// }

// console.log(grade);

let playerOne = "paper";
let computer = "scissors";
let reply;

// Decision Tree :
if (playerOne === computer) {
  reply = "Tie game!";
} else if (playerOne === "rock") {
  if (computer === "paper") {
    reply = "computer wins";
  } else {
    reply = "playerOne wins";
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    reply = "computer wins";
  } else {
    reply = "playerOne wins";
  }
} else {
  if (computer === "rock") {
    reply = "computer wins";
  } else {
    reply = "playerOne wins";
  }
}

console.log(reply);
