const x = 3;

function addThree() {
  return x + 3;
}
const y = 4;

const addFour = () => y + 4;

function testScope() {
  const y = 95;
  const addFive = () => y + 5;
  return addFive();
}


module.exports = { addThree, addFour, testScope };