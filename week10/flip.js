const card = document.querySelector(".card");
console.log(card);

// Hover mouseenter function to flip card
// card.addEventListener("mouseenter", flipMe);

// function flipMe() {
//   card.classList.add("flip");
// }

// card.addEventListener("mouseleave", flipMeBack);

// function flipMeBack() {
//   card.classList.remove("flip");
// }
// ------------------------------------------------------
// Click toggle function to flip card
card.addEventListener("click", function () {
  card.classList.toggle("flip");
});
