const nestedLetters = [
  ['h'], ['e'], ['l'], ['l'], ['o'], [' '],
  ['w'], ['o'], ['r'], ['l'], ['d']
];

const letters = nestedLetters.flat(Infinity);

console.log(letters);

const result = letters
  .map(el => el.toUpperCase())
  .reduce((a, b) => a + b);


console.log(result);