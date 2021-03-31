// filter

const cart = [
  { name: "Garrafa", quantity: 10, price: 7.20 },
  { name: "Bolacha", quantity: 50, price: 4.10 },
  { name: "Copo", quantity: 6, price: 5.00 },
  { name: "Nesa", quantity: 1, price: 400.99 },
  { name: "Livro", quantity: 2, price: 15.10 },
  { name: "Pente", quantity: 3, price: 4.00 },
  { name: "Abajur", quantity: 5, price: 78.00 },
];

const quantityMajorThanFour = item => item.quantity > 4;
const getName = item => item.name;

console.log(
  cart
    .filter(quantityMajorThanFour)
    .map(getName)
);

Array.prototype.myFilter = function (rule) {
  const filtered = [];

  for (let i = 0; i < this.length; i++) {
    if (rule(this[i], i, this)) filtered.push(this[i]);
  }

  return filtered;
}

console.log(
  cart
    .myFilter(quantityMajorThanFour)
    .map(getName)
);