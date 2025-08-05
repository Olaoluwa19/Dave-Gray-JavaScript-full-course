// JavaScript Event Listener

/*const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax : addEventListener(event, function, useCapture)

 const doSomething = () => {
  alert("doing something!");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

// if its an anonymous function, we'll not be able to remove the event listener.

h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
});
 */

/* document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      // view.style.backgroundColor = "purple";
      // view.classList.add("purple");
      // view.classList.remove("darkblue");
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
    },
    false
  );

  div.addEventListener(
    "click",
    (event) => {
      // div.style.backgroundColor = "blue";
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );

  h2.addEventListener(
    "click",
    (event) => {
      // event.target.textContent = "Clicked";
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });

  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};
 */

/* Case: True(eventCapture) */
/* const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      view.style.backgroundColor = "purple";
    },
    true
  );

  div.addEventListener(
    "click",
    (event) => {
      div.style.backgroundColor = "blue";
    },
    true
  );

  h2.addEventListener(
    "click",
    (event) => {
      h2.textContent = "Clicked";
    },
    true
  );
};
 */

// HTML form

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
