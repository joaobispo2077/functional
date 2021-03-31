const cart = [
  { name: "Garrafa", quantity: 10, price: 7.20, fragile: false },
  { name: "Bolacha", quantity: 50, price: 4.10, fragile: true },
  { name: "Copo", quantity: 6, price: 5.00, fragile: true },
  { name: "Nesa", quantity: 1, price: 400.99, fragile: true },
  { name: "Livro", quantity: 2, price: 15.10, fragile: false },
  { name: "Pente", quantity: 3, price: 4.00, fragile: true },
  { name: "Abajur", quantity: 5, price: 78.00, fragile: true },
];
/**
 *  1. fragile true
 *  2. quantity * price => total
 *  3. media total
 * */
const isFragile = item => item.fragile;
const getTotal = item => item.quantity * item.price;

const getMediaTotal = (acc, element, index, array) => {
  console.log(acc);
  acc += element;
  if (index === array.length - 1) acc = acc / array.length;
  return acc;
}

console.log(
  cart
    .filter(isFragile)
    .map(getTotal)
    .reduce(getMediaTotal)
);