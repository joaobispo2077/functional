const generateRandomNumber = () => {
  return Math.random();
}

const generateNumberBetween = (min, max, time) => {
  if (min > max) [min, max] = [max, min];

  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(generateRandomNumber() * (max - min + 1)) + min;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(random);

    }, time);
  })

}

const generateManyNumbers = () => {

  return Promise.all([
    generateNumberBetween(20, 60, 2000),
    generateNumberBetween(15, 90, 1000),
    generateNumberBetween(26, 51, 5000),
    generateNumberBetween(220, 600, 10000),
    generateNumberBetween(2, 22, 1500),
    generateNumberBetween(03, 29, 3000),
    generateNumberBetween(25, 654154, 2000),
  ]);
}

console.time('promise');
generateManyNumbers().then(console.log)
  .then(() => {
    console.timeLog('promise');
    console.timeEnd('promise');
  });
