// fetch API requires a discussion of...
// Callback, Promises, Thenables, and Async/Await

/* //Callbacks

function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

// AKA "Callback Hell"
firstFunction(para, function() {
  // do stuff
  secondFunction(para, function() {
    thirdFunction(para, function() {

    })
  })
}) */

// Promises

// 3 states: Pending, Fulfilled, Rejected

/* const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise");
  }
});

//don't do this :
console.log(myPromise);

// myPromise.then((value) => {
//   console.log(value);
// });

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  }); */

// Case : TRUE
/* const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise");
  }
});

//don't do this :
console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });
 */

/* const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise");
  }
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
}); */

/* const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
console.log(users); */

/* const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

console.log(users); */

// Async / Await

/*const myUsers = {
  userLists: [],
};

 const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;
};

myCoolFunction(); */

/*const myUsers = {
  userLists: [],
};
 const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userLists = data;
  console.log(myUsers.userLists);
};

anotherFunc();
console.log(myUsers.userLists); */

// Example 1 :
/* const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  // return userEmailArray;
  //  console.log(userEmailArray); 
  //  postToWebPage(userEmailArray)
};

// do not call this in a console.log outside the async function:
// console.log(getAllUserEmails()); 
 getAllUserEmails(); // appropriate */

/* const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails(); */

// 2nd Parameter of Fetch is a Object

/* const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });
  const textJokeData = await response.text();

  console.log(textJokeData);
};

getDadJoke(); */

/* const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
  // console.log(jsonJokeData.joke);
};

getDadJoke(); */

/* {id: 'nWSfiNeVKBd', joke: 'Did you know Albert Einstein was a real person? Al…e, I thought he was just a theoretical physicist!', status: 200}
 */

/* const jokeObject = {
  id: "nWSfiNeVKBd",
  joke: "Did you know Albert Einstein was a real person? Al…e, I thought he was just a theoretical physicist!",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse.headers);
  // console.log(jsonResponse.joke);
};

postData(jokeObject); */

/* const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
  );
  const jsonResponse = await response.json();

  console.log(jsonResponse.value.joke);
};

requestJoke("Bruce", "Lee"); */

// maybe from a form

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Wayne",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = () => {
  console.log(joke);
};

// Procedural "workflow" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();
