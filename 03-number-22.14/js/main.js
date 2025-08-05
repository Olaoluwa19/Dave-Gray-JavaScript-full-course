// Numbers

// An Integer is a whole number.
const myNumber = 42;

// A number with a decimal point is a Float which references the "floating point"
const myFloat = 42.01234;

const myString = "42.123aaa";

//all writng starts from bottom to top except for certain instances where its necessary to write from top to bottom.

// NaN is an acronym for Not a Number
// The Global isNaN() function determinees whether a Value is NaN or not

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number
Number.isNaN();
console.log(Number("Oladapo"));
console.log(Number.isNaN("Oladapo"));

// Chaining: Using several methods chained together
console.log(Number.parseFloat("4.134agh").toFixed(2).toString()); //NOTE: This is just an example of what chaining looks like.

//Number Methods
// The toString() method returns a string representing the number.
console.log(myFloat.toString());

// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myString));

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(myFloat.toFixed(3));

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be  parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));

// The Number.isInteger() method determines wheater the passed data is an integer.
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));

/* console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Oladapo"));
console.log(myString + 3);
console.log(myNumber === myString);
console.log(myNumber === myFloat);
console.log(myString);
console.log(myNumber);
console.log(myFloat); */
