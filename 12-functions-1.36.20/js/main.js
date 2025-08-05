//JavaScript Functions

// Methods = Built-in Functions!
/* "Dave".toLowerCase()
Math.random(); */

// Introduction: Function provides a reusable code.
// Function Declaration Syntax:

// Example 1:
/* function sum(num1, num2) {
  console.log(num1);
  console.log(num2);
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}

console.log(sum(4, 8)); */

// Example 2:
/* function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("anybody@anydomain.com")); */

// Example 3 : Anonymous
/* const getUserNameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("jagual@blackjag.ng")); */

// Example 4: Arrow function(a newer way)

const getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("jaguar@somejag.ng"));

// continuation....

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("somename"));
