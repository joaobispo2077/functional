const util = require('./util');

const path = require("path");

const actualPath = path.join(__dirname, '..', 'data', 'legends', 'legendas_01.srt');

util
  .readFilePromisify(actualPath)
  .then(console.log)
  .catch(console.log)