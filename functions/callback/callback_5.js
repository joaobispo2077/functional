const cart = [
  { name: "Garrafa", quantity: 10, price: 7.20, fragile: false },
  { name: "Bolacha", quantity: 50, price: 4.10, fragile: true },
  { name: "Copo", quantity: 6, price: 5.00, fragile: true },
  { name: "Nesa", quantity: 1, price: 400.99, fragile: true },
  { name: "Livro", quantity: 2, price: 15.10, fragile: false },
  { name: "Pente", quantity: 3, price: 4.00, fragile: true },
  { name: "Abajur", quantity: 5, price: 78.00, fragile: true },
];

const getTotalCart = (acc, item) => acc += item;
const getTotal = item => (item.quantity * item.price)
console.log(
  cart
    .map(getTotal)
    .reduce(getTotalCart)
);

Array.prototype.myReduce = function (fn, initialValue) {
  let acc = initialValue;
  for (let index = 0; index < this.length; index++) {

    if (!acc && index === 0) {
      acc = this[index];
      continue;
    }

    acc = fn(acc, this[index], index, this);
  }

  return acc;
}


console.log(
  cart
    .map(getTotal)
    .myReduce(getTotalCart)
);
