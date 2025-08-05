// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the Global variable: window

// We do not have to type Window. It's implied:

/* window.alert("ok!");
alert("ok!"); */

/* window.alert(window.location);
alert(location); */

/* const myArray = ["work", "sleep", "code"];
const myObject = {
  name: "Oladapo",
  hobbies: ["work", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};


sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData); */

const myArray = ["work", "sleep", "code"];
const myObject = {
  name: "Oladapo",
  hobbies: ["work", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
/* localStorage.removeItem("myLocalStore");
localStorage.clear(); 
const key = localStorage.key(0);*/
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(storeLength);
