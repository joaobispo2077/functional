
// Impure function  Naturally
function getRandomNumberInInterval(min, max) {
  const interval = max - min + 1;
  return parseInt(Math.random() * interval) + min;
}

console.log(getRandomNumberInInterval(10, 20));
console.log(getRandomNumberInInterval(10, 20));
console.log(getRandomNumberInInterval(10, 20));