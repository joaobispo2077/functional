// Uma função pura é ma função em que o valor
// de retorno é determinado APENAS por seus valores de entrada,
// sem efeitos colaterais observáveis.
// - boa pratica
// Impure Function - By explicit external dependency
const PI = 3.14;

function getCircumferenceAreaByRadius(radius) {
  return radius * radius * PI;
}

console.log(getCircumferenceAreaByRadius(10));

// less impure function - By implicit external dependency

function getCircumferenceAreaByRadiusLessImpure(radius) {
  return radius * radius * Math.PI;
}

console.log(getCircumferenceAreaByRadiusLessImpure(10));

// Pure Function


function getCircumferenceAreaByRadiusPure(radius, pi) {
  return radius * radius * pi;
}

console.log(getCircumferenceAreaByRadiusPure(10, 3.14));
console.log(getCircumferenceAreaByRadiusPure(10, Math.PI));
console.log(getCircumferenceAreaByRadiusPure(10, 3.141592));