const person = {
  name: 'John',
  height: 1.71,
  city: 'SP'
};
// alteração por referencia
// const clonePerson = person; economic in memaory

// passagem por referencia
// const changePerson = (person) => {
//   person.name = 'mudou';
//   person.height = 1.1
// }
// changePerson(person);
const clonePerson = { ...person }; // this is not immutable, just first level of object. shallow clone not deep clone


clonePerson.name = 'batata';
clonePerson.height = 1.5

console.log(clonePerson);

// alteração por valor
let a = 2;
let b = a;
a++;
b--;
console.log(a, b)