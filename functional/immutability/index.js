const numbers = Object.freeze([9, 2, 3, 7, 4, 6, 8, 1, 5,]); // freeze value

const ordering = (numbers) => {
  return [...numbers].sort();
}

console.log("original", numbers);
const orderedNumbers = ordering(numbers);
console.log("ordered", orderedNumbers);
console.log("original", numbers);

const numbersFractions = numbers.slice(2);
console.log("numbersFractions", numbersFractions);