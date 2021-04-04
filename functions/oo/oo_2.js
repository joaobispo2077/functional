class Product {

  constructor(name, price, discount = 0.15) {
    this._name = name;
    this._price = price;
    this.discount = discount;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get priceWithDiscount() {
    return this.price * (1 - this.discount);
  }


  set name(newName) {
    return this._name = newName.toUpperCase();
  }


  set price(newPrice) {
    if (newPrice > 0) this._price = newPrice;
  }


}
const p1 = new Product('Garrafa', 50);

console.log(typeof p1);

// p1.name = 'batata';


console.log(p1.name);
console.log(p1.price);
console.log(p1.priceWithDiscount);