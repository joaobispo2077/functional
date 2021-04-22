// Closure é quando uma função "lembra
// seu *escopo léxico*, mesmo quando a função
// é executada fora desse escopo léxioco.

const { addThree, addFour, testScope } = require('./scope_closure');
const x = 10;
console.log(addThree());

const y = 10;
console.log(addFour());

console.log(testScope());