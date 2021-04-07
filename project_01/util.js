const fs = require("fs");


module.exports.readFilePromisify = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (_, data) => resolve(data.toString()));
    console.log('promisify read file');
  })
}

