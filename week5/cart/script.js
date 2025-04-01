let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total = 0;
for (let i = 0; i < 4; i++) {
  total = total + shoppingCart[i].price;
  console.log("total price is", total);
}
console.log("total price is", total);
if (total > 100) {
  let discount = 0.1;
  let discountPrice = total - discount * total;
  console.log("discounted price is", discountPrice);
}
