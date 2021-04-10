// Funções que operam outras Funções
// tomando como argumentos ou retornando-as,
// são chamadas de higher-order functions.

function executate(fn, ...params) {
  return function (text) {
    return `${text} ${fn(...params)}!`;
  }
}

function sum(a, b, c) {
  return a + b + c;
}

function multi(a, b) {
  return a * b;
}

const resultSum = executate(sum, 1, 1, 1)('O resultado da soma é');
const resultMulti = executate(multi, 2, 2)('O resultado da multiplicação é');
console.log(resultSum);
console.log(resultMulti);