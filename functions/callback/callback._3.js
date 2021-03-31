// map

const cart = [
  { name: "Garrafa", quantity: 10, price: 7.20 },
  { name: "Bolacha", quantity: 50, price: 4.10 },
  { name: "Copo", quantity: 6, price: 5.00 },
  { name: "Nesa", quantity: 1, price: 400.99 },
  { name: "Livro", quantity: 2, price: 15.10 },
  { name: "Pente", quantity: 3, price: 4.00 },
  { name: "Abajur", quantity: 5, price: 78.00 },
];

const numbers = [1, 23, 5, 75, 75, 52, 2, 72, 72, 72, 52];

const double = (number) => number * 2;

//map params -> current element, index, array source
console.log(numbers.map(double));

const names = ["Animal", "Batata", "Pão"];

const getFirstLetter = (name) => name[0];

console.log(names.map(getFirstLetter));

const getName = (item) => item.name;

const getTotal = (item) => item.quantity * item.price;

console.log(cart.map(getName));
console.log(cart.map(getTotal));

Array.prototype.myMap = function (fn) {
  let mapped = [];

  for (let i = 0; i < this.length; i++) {

    mapped.push(fn(this[i], i, this));
  }


  return mapped;
}

console.log(cart.myMap(getName));
console.log(cart.myMap(getTotal));

