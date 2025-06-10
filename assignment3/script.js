// The js will have two actions, drag and click.
// The drag action will be for dragging the plant to a designated area on the shelving.
// The click action is for choosing a plant and watering the plant.
// Three buttons for the plant options and one button for the watering can.

// Change image from no plant to Grown plant
const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  myImg.src = "images/plant-grown1.png";
});

const myImg2 = document.getElementById("myImg2");
const myButton2 = document.getElementById("myButton2");

myButton.addEventListener("click", function () {
  myImg2.src = "images/plant-grown2.png";
});

const myImg3 = document.getElementById("myImg2");
const myButton3 = document.getElementById("myButton2");

myButton.addEventListener("click", function () {
  myImg2.src = "images/plant-grown3.png";
});

// const card = document.querySelector(".card");
// console.log(card);

// let draggedCard = null;

// card.addEventListener("dragstart", function () {
//   draggedCard = card;
// });

// const dropbox = document.querySelector(".dropbox");
// console.log(dropbox);

// dropbox.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// dropbox.addEventListener("drop", function () {
//   if (draggedCard) {
//     const clone = draggedCard;
//     dropbox.appendChild(clone);
//     clone.addEventListener("click", function () {
//       clone.classList.toggle("flip");
//     });
//     draggedCard = null;
//   }
// });

//   dropbox.innerHTML = draggedCard;

// DRAG + DROP
// let draggedElement = null;

// const colorBox = document.querySelector(".colorbox");
// const dropBox = document.querySelector(".dropbox");

// colorBox.addEventListener("dragstart", startDrag);

// function startDrag() {
//   draggedElement = colorBox;
// }

// dropBox.addEventListener("dragover", endDrag);

// function endDrag(event) {
//   event.preventDefault();
// }

// dropBox.addEventListener("drop", handleDrop);

// function handleDrop() {
//   if (draggedElement) {
//     const color = window
//       .getComputedStyle(draggedElement)
//       .getPropertyValue("background-color");
//     // const color = draggedElement.style.backgroundColor;
//     dropBox.style.backgroundColor = color;
//     dropBox.textContent = "Dropped!";
//     draggedElement = null;
//   }
// }
