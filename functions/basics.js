
// Function Declaration
function sayGoodMorning() {
  console.log("Hello, good morning!");
}

sayGoodMorning();

// Function expression
const sayGoodEvening = function () {
  console.log("Hello, good evening!");
}

sayGoodEvening();

// Parameters in functions
function sum(a, b = 10) {
  return a + b;
}

let result = sum(4, 62);
console.log(result);

result = sum(4, 2, 6, 9, 5, 6);
console.log(result);

result = sum(4);
console.log(result);

