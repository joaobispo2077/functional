// Functions in parameters

function sayHowAreYou() {
  console.log("How are you?");
}

const sayGoodNight = function () {
  console.log("Bye, good night!");
}


function executeOtherFunction(fn) {
  if (typeof fn === 'function') fn();
}
executeOtherFunction(3);
executeOtherFunction(sayGoodNight);
executeOtherFunction(sayHowAreYou);

// Functions that return other functions

function getPotencyOf(base) {
  return function (exp) {
    return Math.pow(base, exp);
  }
}

const bits8 = getPotencyOf(2)(8);
console.log(bits8);

const potencyOf2 = getPotencyOf(2);
console.log(potencyOf2(8));