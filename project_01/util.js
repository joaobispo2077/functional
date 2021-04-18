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
  setPaths: (root) => {
    return function (paths) {
      return new Promise((resolve, reject) => resolve(
        Promise
          .all(
            paths
              .map((path) => module.exports.setPath(root.concat(path)))
          )
      )
      )

    }
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

        return simbols.reduce((acc, simbol) => {
          return acc.split(String(simbol)).join('');
        }, element);

      });

    }

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

      return [...array].sort(ordenation);
    }

  }

}

