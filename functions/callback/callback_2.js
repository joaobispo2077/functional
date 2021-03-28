const fs = require("fs");
const path = require("path");

const actualPath = path.join(__dirname, 'data.text');

const showFileContent = (_, data) => {
  console.log(data.toString());
}
console.log("Iniciando leitura");
fs.readFile(actualPath, {}, showFileContent);
fs.readFile(actualPath, {}, (_, content) => console.log(content.toString()));
console.log("Finalizando leitura");

console.log("Iniciando leitura síncrona");
const content = fs.readFileSync(actualPath);
console.log(content.toString());
console.log("Finalizando leitura síncrona");