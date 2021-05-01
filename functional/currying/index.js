/** Vem do Haskell Curry (Matemático)
É uma técnica para reuso de código com Funções
Referente a habilidade de passar partcialmente os
valores para a execução de uma função
*/

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(sum(2)(2)(2));

function verifyTextSizeBetween(min, max, error, text = '') {
  const textSize = text.trim().length;

  if (textSize < min || textSize > max) {
    throw error;
  }
}


const product = {
  name: 'Me',
  price: 350.00,
  desc: 0.10
};

verifyTextSizeBetween(3, 255, 'Invalid text', product.name);
