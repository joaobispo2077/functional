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
  },
  filterFiles: (files) => {
    const isCaptionFile = (file) => file.includes('.srt');

    return new Promise((resolve, reject) => resolve(files.filter(isCaptionFile)));
  },
  setPaths: (root, paths) => {
    return new Promise((resolve, reject) => resolve(
      Promise
        .all(
          paths
            .map((path) => module.exports.setPath(root.concat(path)))
        )
    )
    )
  },
  readFiles: (paths) => {
    return new Promise((resolve, reject) => resolve(
      Promise.all(
        paths
          .map(path => module.exports.readFilePromisify(path))
      )
    ));
  },
  joinTexts: texts => {
    return new Promise((resolve, reject) => resolve(texts.join()));
  },
  spliteByLineBreak: string => {
    return new Promise((resolve, reject) => resolve(string.split('\n')));
  },
  spliteBySpaces: string => {
    return new Promise((resolve, reject) => resolve(string.split(' ')));
  },
  removeTimestamp: string => {
    const regex = /((([0-9]{2}):){2}([0-9]{2}),([0-9]{3}))/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeR: string => {
    const regex = /\r/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeArrow: string => {
    const regex = /-->/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeComman: string => {
    const regex = /,/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeDash: string => {
    const regex = /-/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeHTML: string => {
    const regex = /(<\/?\s*[a-z][^>]*>)/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeNumbers: string => {
    const regex = /([0-9]a?)/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeDot: string => {
    const regex = /\./g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeQuotationMarks: string => {
    const regex = /"/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeInterrogation: string => {
    const regex = /\?/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  getNotEmpty: (array) => {
    const isNotEmpty = (string) => string.trim().length !== 0;
    return new Promise((resolve, reject) => resolve(array.filter(isNotEmpty)))
  }

}

