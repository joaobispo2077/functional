const fs = require("fs");
const path = require("path");

const actualPath = path.join(__dirname, 'data.text');

const readFilePromisify = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (_, data) => resolve(data.toString()));
    console.log('promisify read file');
  })
}

readFilePromisify(actualPath)
  .then(data => data.split('\n'))
  .then(lines => lines.join(','))
  .then(console.log)