const util = require('./util');

const rootPath = ['..', 'data', 'legends'];
const path = rootPath.concat('legendas_01.srt');

util
  .setPath(rootPath)
  .then(util.readDirectory)
  .then(console.log)
  // .then(util.readFilePromisify)
  // .catch(console.log)