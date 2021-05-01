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


const product = {
  name: 'Me',
  price: 350.00,
  desc: 0.10
};

// Lazy Evaluation - Avaliar parte do código ou executar ele de maneira tardia, atrasar processamento

const setErrorToDefaultTextSize = verifyTextSizeBetween(3)(255);
const validateProductName = setErrorToDefaultTextSize('Invalid text')
validateProductName(product.name);
