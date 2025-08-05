//JSON: JAvascript Object Notation

/* JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages
...not just in Javascript */

const myObj = {
  name: "Oladapo",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receivedJSON = JSON.parse(sendJSON);
console.log(receivedJSON);
console.log(typeof receivedJSON);  
