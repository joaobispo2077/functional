const numbers = [9, 2, 3, 7, 4, 6, 8, 1, 5,];

// # mutability
// let amount = 0;

// for (let i = 0; i < numbers.length; i++) {
//   amount += numbers[i];
// }

// # immutability
// const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;

// const amount = numbers.reduce(sum);

// # recursively and immutability
const sum = (numbers, total = 0) => {
  if (numbers.length === 0)
    return total;

  return sum(numbers.slice(1), total + numbers[0]);
}

const amount = sum(numbers);

console.log(amount);

/**
 * A programação funcional altera um dado pré-existente e evolui ele para
 * outras versões.
 * Por conta disso, a programação funcional consome mais memória RAM, pois ela
 * não altera dados existentes e sim sempre gera novos.
 * Mas hoje temos um ambiente com memória sendo um recurso muito mais barato
 * Embora a programação funcional cause esse problema de consumo de mais memória,
 * Está longe de se comparar com os benefícios que ela traz de você ter um código
 * com dados imútaveis, com funções pequenas que fazem uma única tarefa.
 * Na maioria dos projetos, o gargalo não está no desempenho, e sim num código mau escrito
 * com baixo reuso e alto acoplamento. Esses são alguns dos motivos pelos quais projetos fracação.
 */