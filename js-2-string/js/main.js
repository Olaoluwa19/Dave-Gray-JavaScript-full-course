// STRINGS
const myVariable = "Mathematics";
let string = "This is my String";
string = string.replace("String", "bed");

console.log(string);
console.log(string[1]);
console.log(myVariable[myVariable.length - 1]);

// STRING METHODS
console.log("John, Joe, Jane".split(","));
console.log(myVariable.split(""));
console.log(myVariable.split("e"));
console.log(myVariable.includes("mati"));
console.log(myVariable.toUpperCase());
console.log(myVariable.slice(5, 8));
console.log(myVariable.charAt(0));
console.log(myVariable.lastIndexOf("ath"));
console.log(myVariable.indexOf("ati"));

// THE LENGTH PROPERTY
console.log(myVariable.length);
console.log("Every good boy does fine".length);
