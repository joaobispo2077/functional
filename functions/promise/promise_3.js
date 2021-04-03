const generateRandomNumber = () => {
  return Math.random();
}

const generateNumberBetween = (min, max) => {
  if (min > max) [min, max] = [max, min];

  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(generateRandomNumber() * (max - min + 1)) + min;

  return new Promise(resolve => resolve(random))

}

generateNumberBetween(20, 22)
  .then(number => number * 64654)
  .then(number => `generated number ${number}`)
  .then(console.log);