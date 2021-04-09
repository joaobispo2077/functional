const path = require("path");

const util = require('./util');

const rootPath = ['..', 'data', 'legends'];
// const path = rootPath.concat('legendas_01.srt');

const logAndPass = (item) => {
  console.log("logAndPass", item);
  return item;
}

util
  .setPath(rootPath)
  .then(util.readDirectory)
  .then(logAndPass)
  .then((files) => util.filterByFinal(files, '.srt'))
  .then((files) => util.setPaths(rootPath, files))
  .then(logAndPass)
  .then(util.readFiles)
  .then(util.joinTexts)
  .then(util.spliteByLineBreak)
  .then(util.removeEmpty)
  .then(logAndPass)
  // .then(util.joinTexts)
  // .then(util.removeR)
  // .then(util.removeTimestamp)
  // .then(util.removeSquareBrackets)
  // .then(util.removeExclamation)
  // .then(util.removeArrow)
  // .then(util.removeComman)
  // .then(util.removeDash)
  // .then(util.removeHTML)
  // .then(util.removeNumbers)
  // .then(util.removeDot)
  // .then(util.removeQuotationMarks)
  // .then(util.removeInterrogation)
  // .then(util.removeTwoDots)
  // .then(util.spliteBySpaces)
  // .then(util.getNotEmpty)
  // .then(util.getQuantityOfWords)
  .then(logAndPass)

  .catch(console.log)
