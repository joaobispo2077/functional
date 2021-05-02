function compose(...fns) {
  return function (value) {
    return fns.reduce(async (accFn, fn) => fn(await accFn), value);
  }
}

function scream(text) {
  return text.toUpperCase();
}

function emphasize(text) {
  return `${text}!!!!`;
}

function slowDown(text) {
  return new Promise(
    (resolve, _) => {
      setTimeout(() => {
        resolve(text.split('').join(' '))

      }, 3000)
    }
  );
}

const overdone = compose(
  scream,
  emphasize,
  slowDown
);

const result = overdone('stop').then(console.log);

// console.log(result);