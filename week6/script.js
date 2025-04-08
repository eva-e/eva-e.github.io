const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
let course = "OART1013";
header.innerHTML += `<h1> this is ${course} </h1>`;
console.log(header.innerHTML);
// innerHTML shows everything that is inside the header including the html code
// += adds to existing content

const topHeading = document.querySelector("h1");
// console.log(topHeading);
// console.log(topHeading.textContent);
// topHeading.textContent = "this is my new top heading";
topHeading.style.color = "#ff91b5";

const allParas = document.querySelectorAll("p");
// console.log(allParas);

for (let i = 0; i < allParas.length; i++) {
  //   console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid green";
  allParas[i].style.backgroundColor = "#8cfa9e";
}

// for class use . for id use #

const sh1 = document.querySelector("#first-subheading");
// console.log(sh1);
// console.log(sh1.textContent);

const blue1 = document.querySelectorAll(".blue-color");
// console.log(blue1);

for (let i = 0; i < blue1.length; i++) {
  //   console.log(blue1[i].textContent);
}

const allSubHeadings = document.querySelectorAll("h2");
// console.log(allSubHeadings);
