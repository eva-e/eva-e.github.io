// The js will have two actions, drag and click.
// The drag action will be for dragging the plant to a designated area on the shelving.
// The click action is for choosing a plant and watering the plant.
// Three buttons for the plant options and one button for the watering can.
const card = document.querySelector(".card");
console.log(card);

let draggedCard = null;

card.addEventListener("dragstart", function () {
  draggedCard = card;
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  if (draggedCard) {
    const clone = draggedCard;
    dropbox.appendChild(clone);
    clone.addEventListener("click", function () {
      clone.classList.toggle("flip");
    });
    draggedCard = null;
  }
});

//   dropbox.innerHTML = draggedCard;
