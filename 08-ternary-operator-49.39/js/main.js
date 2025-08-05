// Conditionals: Ternary Operators

//syntax
//condition ? ifTrue : ifFalse;

//Example 1 :

/* let soup =  "Chicken noodles Soup" ;
let response = soup ? `Yes we have ${soup}.` : "Sorry, no soup today.";
console.log(response); */

// let soup /* = "Chicken noodles Soup" */;
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned
//   ? "No soup for You!"
//   : soup
//   ? `Yes, we have ${soup}`
//   : "Sorry, no Soup today";
// console.log(soupAccess);

// Example 2 :
/* let testScore = 89;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My test Grade is ${myGrade}`); */

// Example 3 :
let playerOne = "rock";
let computer = "paper";
let result =
  playerOne === computer
    ? "Tie game"
    : playerOne === "rock" && computer === "paper"
    ? "computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins!"
    : "playerOne wins";

console.log(result);
