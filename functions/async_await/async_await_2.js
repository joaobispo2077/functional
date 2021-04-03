const generateRandomNumber = () => {
  return Math.random();
}

const generateRandomNumberNoRepeat = (min = 0, max, generates) => {
  if (min > max) [min, max] = [max, min];

  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(generateRandomNumber() * (max - min + 1)) + min;

  return new Promise((resolve, reject) => {
    if (generates.includes(random)) reject(new Error("Repeat Number"));

    resolve(random);

  });

}

const generateRandomNumbers = async (quantity) => {
  const numbers = [];
  let random;

  for (let i of Array(quantity).fill()) {
    try {
      random = await generateRandomNumberNoRepeat(0, 60, numbers);
    } catch (err) {
      console.log(err.message)
      if (err.message === "Repeat Number") continue;
      throw new Error();
    }

    numbers.push(random);
  }
  return numbers;
}
generateRandomNumbers(6)
  .then(console.log)

const array = [
  45, 50, 28, 36, 14, 4, 1, 60, 40, 34, 0, 18,
  6, 22, 52, 37, 44, 59, 38, 17, 30, 3, 55, 13,
  7, 43, 16, 54, 5, 21, 9, 11, 32, 29, 15, 23,
  25, 53, 10, 49, 51, 48, 2, 20, 19, 27, 41, 26,
  47, 42, 58, 46, 39, 12, 24, 35, 8, 56, 31, 57,
  33
].length

console.log(array);