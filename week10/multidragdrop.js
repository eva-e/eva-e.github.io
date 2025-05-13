const myCards = [
  {
    id: 1,
    name: "Queen",
    src: "queen.png",
  },
  {
    id: 2,
    name: "King",
    src: "king.png",
  },
  {
    id: 3,
    name: "Jack",
    src: "jack.png",
  },
];

let cardComposition = "";

for (let i = 0; i < myCards.length; i++) {
  cardComposition += `
    <div class="card-container">
            <div class="card" draggable="true">
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face flip">
                <img src="${myCards[i].src}" alt="${myCards[i].name}"/>
              </div>
            </div>
          </div>
    
    `;
  console.log(cardComposition);
}

const deck = document.querySelector(".deck");
console.log(deck);
deck.innerHTML = cardComposition;

// drag drop

const card = document.querySelectorAll(".card");
console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    let cardDetail = draggedCard.querySelector("card-front");
    // console.log("you are currently dragging", cards[i].name);
    console.log(cardDetail);
    console.log("you are currently dragging", cardDetail.alt);
  });
}

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  dropbox.innerHTML = "";
  if (draggedCard) {
    const clone = draggedCard;
    dropbox.appendChild(clone);
    clone.addEventListener("click", function () {
      clone.classList.toggle("flip");
    });
    draggedCard = null;
  }
});
