/* wrapper
 Functors são objetos que implementam a função map que também
é um wrapper de um valor */

// Array é um functor
const numbers = [1, 31, 6, 854, 321, 21, 2];
const newNumbers = numbers
  .map(el => el + 15)
  .map(el => el * 4);

console.log(numbers, newNumbers);


function securityType(value) {
  return {
    value,
    isInvalid() {
      return this.value === null | this.value === undefined;
    },
    map(fn) {
      if (this.isInvalid()) {
        return securityType(null);
      } else {
        const transformedValue = fn(this.value);
        return securityType(transformedValue);
      }

    }
  }
}

const result = securityType('teste2134')
  .map(el => el.toUpperCase)
  .map(el => `${el}!!!`)
  .map(el => el.split('').join(' '));

console.log(result.value);