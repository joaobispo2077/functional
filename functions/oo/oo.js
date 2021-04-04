function Product(name, price, discount = 0.15) {
  this.name = name;
  this.price = price;
  this.discount = discount

  this.priceWithDiscount = () => this.price * (1 - this.discount);
}

const p1 = new Product('Garrafa', 50);

console.log(typeof p1);


console.log(p1.name);
console.log(p1.price);
console.log(p1.priceWithDiscount());