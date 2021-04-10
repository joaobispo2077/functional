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
  filterByFinal: (pattern) => {
    const isCaptionFile = (element) => element.endsWith(pattern);
    return function (elements) {
      return elements.filter(isCaptionFile);

    }

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
  joinTextsByPattern: pattern => texts => texts.join(pattern),
  spliteByLineBreak: string => {
    return new Promise((resolve, reject) => resolve(string.split('\n')));
  },
  spliteBySpaces: string => {
    return new Promise((resolve, reject) => resolve(string.split(' ')));
  },
  filterListNotIncluded: (pattern) => {
    const hasPattern = (element) => !element.includes(pattern);
    return function (elements) {
      return elements.filter(hasPattern);
    }
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
    const isNotEmpty = (element) => element.trim();

    return new Promise((resolve, reject) => resolve(elements.filter(isNotEmpty)));
  },
  removeIndexes: (elements) => {
    const isNotNumber = (candidate) => !(candidate !== 0 && !!candidate);

    return elements.filter(element => {
      const possibleNumber = parseInt(element.trim());
      return isNotNumber(possibleNumber);
    });
  },
  removeSimbols: simbols => {
    return function (elements) {

      return elements.map(element => {
        let actualText = element;

        simbols.forEach(simbol => {
          actualText = actualText.split(String(simbol)).join('');
        });

        return actualText;
      });

    }

  },
  getNotEmpty: (array) => {
    const isNotEmpty = (string) => string.trim().length !== 0;
    return new Promise((resolve, reject) => resolve(array.filter(isNotEmpty)))
  },
  groupElements: (array) => {
    return Object.values(array.reduce((acc, word, index, words) => {
      const actualWord = word.toLowerCase();

      const quantity = acc[actualWord] ? acc[actualWord].quantity + 1 : 1;

      acc[actualWord] = { word: actualWord, quantity };

      return acc;
    }, {}));
  },
  ordering: (attr, order = 'asc') => {
    return function (array) {
      const desc = (firstObject, secondObject) => secondObject[attr] - firstObject[attr];
      const asc = (firstObject, secondObject) => firstObject[attr] - secondObject[attr];

      const ordenation = order === 'asc' ? asc : desc;

      return array.sort(ordenation);
    }

  }

}

