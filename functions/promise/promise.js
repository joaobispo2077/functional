let a = 10

console.log(a);

let p = new Promise(function (resolve) {
  resolve(['Batata', 'Requeijão', 'Hot dog', 'pizza']);
})

const getFirstValue = value => value[0];

const getFirstLetter = firstItem => firstItem[0];

const parseToLowerCase = firstLetter => firstLetter.toLowerCase();

p
  .then(getFirstValue)
  .then(getFirstLetter)
  .then(parseToLowerCase)
  .then(console.log)