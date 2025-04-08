const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "this is my new top heading";
topHeading.style.color = "red";

const allParas = document.querySelectorAll("p");
console.log(allParas);

for (let i = 0; i < allParas.length; i++) {
  console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid green";
}

const sh1 = document.querySelector("#first-subheading");
console.log(sh1);
console.log(sh1.textContent);

const blue1 = document.querySelectorAll(".blue-color");
console.log(blue1);

for (let i = 0; i < blue1.length; i++) {
  console.log(blue1[i].textContent);
}

const allSubHeadings = document.querySelectorAll("h2");
console.log(allSubHeadings);
