const exec = (fn, firstElement, secondElement) => console.log(fn(firstElement, secondElement));

const sumElement = (a, b) => a + b;
const subtractElement = (a, b) => a - b;

exec(sumElement, 50, 20);
exec(subtractElement, 50, 20);

setInterval(function () { console.log("aeio") }, 1000);