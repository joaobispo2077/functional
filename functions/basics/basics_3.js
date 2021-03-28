// arrow functions
const sayMerryChristmas = () => console.log('Merry Christmas!!');

const greeting = name => `Hey ${name}!`

sayMerryChristmas();
console.log(greeting("João"));

const sumArray = (numbers) => {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }

  return total;
}

const peopleList = [1, 2, 3];

console.log(sumArray(peopleList));

const getPotencyOf = (base) => (exp) => Math.pow(base, exp);

console.log(getPotencyOf(5)(2));

//this
// Array.prototype.log = () => console.log(this); not working _this_ in arrow functions
Array.prototype.log = function () {
  console.log(this);
}
peopleList.log();