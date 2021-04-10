const path = require("path");

const util = require('./util');

const rootPath = ['..', 'data', 'legends'];
// const path = rootPath.concat('legendas_01.srt');
// const regexTimestamp = /((([0-9]{2}):){2}([0-9]{2}),([0-9]{3}))/g;
const simbols = [
  '♪', '.', '?', '-', ',', '"',
  '_', '\r', '[', ']', '(', ')',
  '!', '<i>', '</i>', '\n', ':'
];

const logAndPass = (item) => {
  console.log("logAndPass", item);
  return item;
}


const groupElements = (array) => {
  return Object.values(array.reduce((acc, word, index, words) => {
    const actualWord = word.toLowerCase();

    const quantity = acc[actualWord] ? acc[actualWord].quantity + 1 : 1;

    acc[actualWord] = { word: actualWord, quantity };

    return acc;
  }, {}));
}

const ordering = (attr, order = 'asc') => {
  return function (array) {
    const desc = (firstObject, secondObject) => secondObject[attr] - firstObject[attr];
    const asc = (firstObject, secondObject) => firstObject[attr] - secondObject[attr];

    const ordenation = order === 'asc' ? asc : desc;

    return array.sort(ordenation);
  }

}

util
  .setPath(rootPath)
  .then(util.readDirectory)
  .then(logAndPass)
  .then(util.filterByFinal('.srt'))
  .then((files) => util.setPaths(rootPath, files))
  .then(util.readFiles)
  .then(util.joinTextsByPattern(' '))
  // .then(util.removeHTML)
  .then(util.spliteByLineBreak)
  .then(util.removeEmpty)
  .then(util.filterListNotIncluded('-->'))
  .then(util.removeIndexes)
  .then(util.removeSimbols(simbols))
  .then(util.joinTextsByPattern(' '))
  // .then(util.removeR)
  // .then(util.removeTimestamp)
  // .then(util.removeSquareBrackets)
  // .then(util.removeExclamation)
  // .then(util.removeArrow)
  // .then(util.removeComman)
  // .then(util.removeDash)
  // .then(util.removeNumbers)
  // .then(util.removeDot)
  // .then(util.removeQuotationMarks)
  // .then(util.removeInterrogation)
  // .then(util.removeTwoDots)
  .then(util.spliteBySpaces)
  .then(util.removeEmpty)
  .then(util.removeIndexes)
  .then(groupElements)
  .then(ordering('quantity', 'desc'))
  .then(logAndPass)
  // .then(util.getNotEmpty)
  // .then(util.getQuantityOfWords)

  .catch(console.log)


