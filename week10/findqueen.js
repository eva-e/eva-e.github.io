// Shuffle cards using Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledCards = shuffleArray(myCards);

let cardComposition = "";

for (let i = 0; i < shuffledCards.length; i++) {
  cardComposition += `
<div class="card-container">
        <div class="card" draggable="true">
          <div class="card-face"><img src="cloud.png" alt="Back" /></div>
          <div class="card-face flip">
            <img src="${shuffledCards[i].src}" alt="${shuffledCards[i].name}" class="card-front" />
          </div>
        </div>
      </div>
`;
  console.log(cardComposition);
}
