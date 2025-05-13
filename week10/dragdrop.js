const card = document.querySelector(".card");
console.log(card);

let draggedCard = null;

card.addEventListener("dragstart", function () {
  draggedCard = card;
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);
