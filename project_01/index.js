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


const getQuantityOfWords = (array) => {
  return array.reduce((acc, word, index, words) => {
    let actualWord = word.toLowerCase();

    if (acc[actualWord]) acc[actualWord] += 1;
    else acc[actualWord] = 1;


    return acc;
  }, {});
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
  .then(getQuantityOfWords)
  .then(logAndPass)
  // .then(util.getNotEmpty)
  // .then(util.getQuantityOfWords)

  .catch(console.log)


