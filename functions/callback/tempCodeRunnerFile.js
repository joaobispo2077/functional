const fs = require("fs");
const path = require("path");

const actualPath = path.join(__dirname, 'data.text');

const showFileContent = (err, data) => {
  console.log(data);
}

fs.readFile(actualPath, {}, showFileContent);