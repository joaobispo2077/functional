// 😈 - Função Impura
// 😇 - Função Pura

function multiply(firstFactor, secondFactor) {
  return firstFactor * secondFactor;
}

// -----------------------------------------

let person = null;

person = 'João'
const greeting = 'Olá';

// 😇 - Função Pura
function getGreetingsToPerson(greeting, person) {
  return `${greeting} ${person}`;
}

console.log(getGreetingsToPerson(greeting, person)) // output: 'Olá João'
// -----------------------------------------
// 😇 - Função Pura
function multiply(firstFactor, secondFactor) {
  return firstFactor * secondFactor;
}

console.log(multiply(2, 2)); // output: 4

console.log(multiply(2, 2)); // output: 4

console.log(multiply(2, 2)); // output: 4
// -----------------------------------------

function getRandomBonusXPBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let executions;

// 😈 - Função Impura
function removeSymbolsUsernameAndGenerateBonus(username) {
  const symbolsNotAllowed = ['#', '!', '@', '*'];

  let changedUsername = '';
  executions = 1;

  username.trim().split('').forEach(char => {
    console.log(executions, char)
    executions++; // Efeito colateral observável

    if (symbolsNotAllowed.includes(char)) changedUsername += '_';
    else changedUsername += char;
  });

  const randomBonus = Math.floor(Math.random() * (Math.floor(executions) - Math.ceil(1) + 1)) + Math.ceil(1); // Efeito colateral observável

  return [changedUsername, randomBonus];
}

const [usernamea, bonusa] = removeSymbolsUsernameAndGenerateBonus(originalUsername);

console.log(usernamea, bonusa) // output: joao_medium_dev 2

const originalUsername = ' joao_medium@dev';

// 😇 - Função Pura
function swapTextSymbolsBy(text, swapper) {
  const symbolsNotAllowed = ['#', '!', '@', '*'];
  const textWithinSymbols = symbolsNotAllowed.reduce((newText, symbol) =>
    newText.split(String(symbol)).join(String(swapper)), text);
  return textWithinSymbols;
}

// 😈 - Função Impura
function getRandomBonusXPBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const username = swapTextSymbolsBy(originalUsername.trim(), '_');
const bonus = getRandomBonusXPBetween(1, originalUsername.length);

console.log(username, bonus); // output: joao_medium_dev 6
