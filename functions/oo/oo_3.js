function Product(name, price, discount = 0.15) {
  this.name = name;
  this.price = price;
  this._discount = discount

  this.priceWithDiscount = () => this.price * (1 - this._discount);
}

const p1 = new Product('Garrafa', 50);
const p2 = new Product('Televisao', 3000, 0.75);

console.log(typeof p1);


console.log(p1.name);
console.log(p1.price);
console.log(p1.priceWithDiscount());

Product.prototype.log = function () {
  console.log(`Nome: ${this.name} | Preço: ${this.price}`);
}

Object.defineProperty(Product.prototype, 'desc', {
  get: function () {
    return this._discount;
  },
  set: function (value) {
    if (value >= 0 && value < 1) this._discount = value;
  }
});

p1.log()
p2.desc = .5;
console.log(p2.desc)