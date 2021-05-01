function verifyTextSizeBetween(min) {
  return function (max) {
    return function (error) {
      return function (text) {
        const textSize = text.trim().length;

        if (textSize < min || textSize > max) {
          throw error;
        }
      }
    }
  }
}

function applyValidation(fn) {
  return function (value) {
    try {
      fn(value);
    } catch (err) {
      return { error: err };
    }

  }
}


const product = {
  name: 'Me',
  price: 350.00,
  desc: 0.10
};

// Lazy Evaluation - Avaliar parte do código ou executar ele de maneira tardia, atrasar processamento

const setErrorToDefaultTextSize = verifyTextSizeBetween(3)(255);
const validateProductName = applyValidation(setErrorToDefaultTextSize('Invalid text'));
console.log(validateProductName(product.name));
