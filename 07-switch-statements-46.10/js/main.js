// MDN LINK : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// Conditionals: Switch statements

// syntax
/*  switch (expression OR value) {

  case choice1:
    //run this code
    break;

  case choice2:
    //run this different code
    break;
   
  //add as many cases as needed

  default:
    //run this code if no case matches
    //no need for a break here
}  */

// Example 1 :
/* const figure = Math.floor(Math.random() * 5 + 1);

switch (figure) {
  case 1:
    console.log("1");
    break;

  case 2:
    console.log("butter");
    break;

  case 3:
    console.log("tea");
    break;

  //add as many cases as needed

  default:
    console.log("No match");
}

console.log(figure); */

let playerOne = "scissors";
computer = "paper";

switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
}
