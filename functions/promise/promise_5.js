function isMajorErrorChance(value, errorChance) {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorChance) reject("Deu ruim");
    else resolve(value);
  })
}

isMajorErrorChance(10, 0.1)
  .then(console.log)
  .then(console.log)
  .catch(err => console.log(err))
  .finally(console.log("finally"));