// ***JAVA MEMORIES***

// string variables = use quotes
let myName = "eva";
let myID = "s4007073";
let myNewName = "Melbourne";
let myCity = "Perth";

// number variables
let num = 10;

const weather = "sunny";
const msg = `<h1>Today's weather is ${weather}
<p> this is so nice to see the sun again</p></h1>`;
console.log(msg);

// boolean variable true - false
let isThisEvening = false;
let isThisRmit = true;

// object variable {name: value, name: value}
const myStudentDetails = {
  name: "Eva",
  id: 12,
  homeTown: "Melbourne",
};
console.log(myStudentDetails);
console.log("my hometown is", myStudentDetails.homeTown);
// reference to homeTown, from myStudentDetails ^^

console.log("Hi");
console.log("How are you buddy?");

console.log("Hi, I am", myName);

console.log("Hi, my student id is", myID);
myName = "abcd";
console.log("Hi, I am", myName);

// let myNewName = prompt("what is your name");
console.log("Hello", myNewName);
console.log("Hello", myNewName, myCity);

{
  let a = 10;
  console.log("Hello", a);
}

let a = 30;

console.log("Hello", a);

// camelCase for JS
// kebab-case - not for JS
// if you know the value will not change define it using const or else use let.
// JS variables must start with letter lowercase
