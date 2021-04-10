// Uma função pura é ma função em que o valor
// de retorno é determinado APENAS por seus valores de entrada,
// sem efeitos colaterais observáveis.

// Pure Function
// - Maior Previsibilidade, portanto facilmente testável.


function sum(fisrtNumber, secondNumber) {
  return fisrtNumber + secondNumber;
}

// console.log(sum(50, 50));

// Impure Function - by observable side effects

let executionsOfSum = 0;

function sumWithSideEffect(fisrtNumber, secondNumber) {
  ++executionsOfSum;
  return fisrtNumber + secondNumber;
}

console.log(executionsOfSum);
console.log(sumWithSideEffect(50, 50));
console.log(sumWithSideEffect(50, 50));
console.log(sumWithSideEffect(50, 50));
console.log(sumWithSideEffect(50, 50));
console.log(sumWithSideEffect(50, 50));
console.log(sumWithSideEffect(50, 50));
console.log(executionsOfSum);

