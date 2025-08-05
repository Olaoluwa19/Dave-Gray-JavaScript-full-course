// Objects
//key-value pairs in curly braces
// const myObj = { name: "Oladapo" };

// const anotherObj = {
//   alive: true,
//   answer: 42,
//   hobbies: ["Eat", "Sleep", "Code"],
//   beverage: {
//     morning: "Coffee",
//     afternoon: "Iced Tea",
//   },

//   action: function () {
//     return `time for ${this.beverage.morning}`;
//   },
// };
// console.log(myObj.name);
// console.log(anotherObj.hobbies[2]);
// console.log(anotherObj["answer"]);
// console.log(anotherObj.action());

/*const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrooom!";
  },
};

 const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);
console.log(truck.wheels);
console.log(truck.engine()); 

const car = Object.create(vehicle);
car.engine = function () {
  return "Whoooosh!";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
tesla.engine = function () {
  return "Shhhhh...";
};

console.log(tesla.engine());*/

// Example 3:
// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy Page",
//   bass: "John Paul Jones",
//   drums: "John Bonham",
// };

// //to delete a key in the Object:
// delete band.drums;
// // to check for an Object key:
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));

// /* for (let job in band) {
//   console.log(band[job]);
// } */

// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]}`);
// }

// Destructuring Objects
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

/* const { guitar: myGuitar, bass: myBass } = band;
console.log(myGuitar);
console.log(myBass); */

/* const { vocals, guitar, bass, drums } = band;
console.log(vocals);
console.log(drums); */

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));
