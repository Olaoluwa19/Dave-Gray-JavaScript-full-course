// Arrays
// Array is a data structure in Javascript. it's like a shelve where something is being stored.
// we can not re-assign an array that's why we use the 'const' key word. however, the item's in it are mutable i.e they can be added and removed. we acn even nest an array within an array.

/* const myArray = [];

// to add elements to an array
myArray[0] = "Oladapo";
myArray[1] = 2022;
myArray[2] = true;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

// we can also get element by their position number
console.log(myArray[0]); */

/* const myArray = [];

myArray[0] = "Oladapo";
myArray[1] = 2022;
myArray[2] = true;

//to add to an array at the end.
const newLength = myArray.push("study");
console.log(newLength);

console.log(myArray);
// to remove the last item of an array
const lastItem = myArray.pop();
console.log(lastItem);

console.log(myArray);

// to add to the front of an array.
const newerLength = myArray.unshift(42);
console.log(newerLength);

console.log(myArray);

// to remove from the front of an array
const firstItem = myArray.shift();
console.log(firstItem);

console.log(myArray);

// when we remove from an Array, everything shifts to the front.

console.log(myArray[1]); */

// to delete from an array
/* const myArray = [];

myArray[0] = "Oladapo";
myArray[1] = 2022;
myArray[2] = true;

// this deletes the array but does not remove the position of the array. It leave's an undefined data./*

// delete myArray[1];

// use this 'METHOD' instead
// myArray.splice(1, 1);

// we can also use it to replace datas in an array :splice(starting-point, how many items to delete, replacement(s))
myArray.splice(0, 2, "oluwadurotimi", 42);

console.log(myArray);
console.log(myArray[1]); */

// MORE ARRAY METHOD'S
/* const myArray = ["A", "B", "C", "D", "E", "F"];

// 1 : slice() - this can take 1 or 2 values : slice(starting-position, ending-position). if you put one value, it will only delete the items before that position and create a new array for the rest.
const newArray = myArray.slice(2, 5);
console.log(myArray);
console.log(newArray); */

// 2:
/* const myArray = ["A", "B", "C", "D", "E", "F"];

// this reverses the array position
myArray.reverse();
console.log(myArray); */

// 3: join() - this turns the array into a string and creates a new string for the arrays.
/* const myArray = ["A", "B", "C", "D", "E", "F"];

const newString = myArray.join();
console.log(newString);

// 4: split() - this turns the a stringed array back into an array

const newArray = newString.split(",");
console.log(newArray); */

//5: concat() - This joins together previously existing array.
// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];
// const myArrayC = ["mango", "apple", "orange"];

// /* const newArray = myArrayB.concat(myArrayA, myArrayC);
// console.log(newArray); */

// // the newer way to do this is with the spread operator [...] :
// const newArray = [...myArrayA, ...myArrayB, ...myArrayC];
// // if we remove the '...', it will only return a nested array with the length of "3"
// const threeArray = [myArrayA, myArrayB, myArrayC];
// console.log(newArray);
// console.log(threeArray);

// NESTED ARRAYS:
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tenis balls"];

const clotheShelfA = ["tank tops", "t-shirts", "jerseys"];
const clotheShelfB = ["sweat tops", "sweat pants", "hoodies"];

// to access a one-dimentional array:
console.log(equipShelfA[1]);
// or
console.log(clotheShelfB[0]);

// 2 dimensional Arrays
const equipDept = [equipShelfA, equipShelfB];
const clotheDept = [clotheShelfA, clotheShelfB];

console.log(equipDept[0][1]);
console.log(clotheDept[1][0]);

// 3 dimentional Arrays
const sportsStore = [equipDept, clotheDept];
console.log(sportsStore[0][1][1]);
console.log(sportsStore[1][0][2]);
