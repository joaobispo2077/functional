const util = require('./util');

const rootPath = ['..', 'data', 'legends'];
const path = rootPath.concat('legendas_01.srt');

util
  .setPath(rootPath.concat('legendas_01.srt'))
  .then(util.readFilePromisify)
  .then(console.log)
  .catch(console.log)