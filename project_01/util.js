const fs = require("fs");
const path = require("path");

module.exports = {
  setPath: (paths) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(path.join(__dirname, ...paths));
      } catch (err) {
        reject(err);
      }
    })
  },
  readDirectory: (directoryPath) => {
    return new Promise((resolve, reject) => {
      try {
        fs.readdir(directoryPath, (_, files) => resolve(files));
      } catch (err) {
        reject(err);
      }
    });
  },
  readFilePromisify: (path) => {
    return new Promise((resolve, reject) => {
      try {
        fs.readFile(path, (_, data) => resolve(data.toString()));
        console.log('promisify read file');
      } catch (err) {
        reject(err);
      }
    })
  },
  filterByFinal: (elements, pattern) => {
    const isCaptionFile = (element) => element.endsWith(pattern);

    return new Promise((resolve, reject) => resolve(elements.filter(isCaptionFile)));
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
    return new Promise((resolve, reject) => resolve(texts.join('\n')));
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
  removeExclamation: string => {
    const regex = /!/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeSquareBrackets: string => {
    const regex = /(\[\/?\s*[a-z][^>]*\])/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeTwoDots: string => {
    const regex = /:/g;
    return new Promise((resolve, reject) => resolve(string.replace(regex, '')));
  },
  removeEmpty: (elements) => {
    const isEmpty = (element) => element.trim();

    return new Promise((resolve, reject) => resolve(elements.filter(isEmpty)));
  },
  getNotEmpty: (array) => {
    const isNotEmpty = (string) => string.trim().length !== 0;
    return new Promise((resolve, reject) => resolve(array.filter(isNotEmpty)))
  },
  getQuantityOfWords: (array) => {
    return new Promise((resolve, reject) => resolve(array.reduce((acc, actualWord, index, words) => {
      const quantity = words.filter(word => word === actualWord).length;

      if (index === 0)
        return Object.assign(acc, { [actualWord]: quantity });

      const lastWord = words[index - 1];

      if (quantity < acc[lastWord])
        return Object.assign(acc, { [actualWord]: quantity });

      if (quantity >= acc[lastWord])
        return Object.assign({ [actualWord]: quantity }, acc);


    }, {})))
  }

}

