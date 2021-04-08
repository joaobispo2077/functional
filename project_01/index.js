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
  .then(util.spliteBySpaces)
  .then(util.joinTexts)
  // .then(logAndPass)
  .then(util.spliteByLineBreak)
  .then(logAndPass)
  // .then(logAndPass)
  .catch(console.log)
