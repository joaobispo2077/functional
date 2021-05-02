function compose(...fns) {
  return function (value) {
    return fns.reduce((accFn, fn) => fn(accFn), value);
  }
}

function scream(text) {
  return text.toUpperCase();
}

function emphasize(text) {
  return `${text}!!!!`;
}

function slowDown(text) {
  return text.split('').join(' ');
}

const overdone = compose(
  scream,
  emphasize,
  slowDown
);

const result = overdone('stop');

console.log(result);