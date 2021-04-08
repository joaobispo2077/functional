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
  .then(util.filterFiles)
  .then((files) => util.setPaths(rootPath, files))
  .then(logAndPass)
  .then(util.readFiles)
  .then(util.joinTexts)
  .then(util.spliteByLineBreak)
  .then(util.joinTexts)
  .then(util.removeTimestamp)
  .then(util.removeR)
  .then(util.removeArrow)
  .then(util.removeComman)
  .then(util.removeDash)
  .then(util.removeHTML)
  .then(util.removeNumbers)
  .then(util.removeDot)
  .then(util.removeQuotationMarks)
  .then(util.removeInterrogation)
  .then(util.spliteBySpaces)
  .then(util.getNotEmpty)
  .then(logAndPass)
  // .then(logAndPass)
  .catch(console.log)
