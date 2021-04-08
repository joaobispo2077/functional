const fs = require("fs");
const path = require("path");

module.exports = {
  setPath: (paths) => {
    return new Promise((resolve, reject) => {
      resolve(path.join(__dirname, ...paths));
    })
  },
  readDirectory: (directoryPath) => {
    return new Promise((resolve, reject) => {
      fs.readdir(directoryPath, (_, files) => resolve(files));
    });
  },
  readFilePromisify: (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (_, data) => resolve(data.toString()));
      console.log('promisify read file');
    })
  }

}

