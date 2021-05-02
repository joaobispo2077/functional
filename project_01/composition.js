function compose(...fns) {
  return function (value) {
    return fns.reduce(async (accFn, fn) => fn(await accFn), value);
  }
}

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



const getMoreUsedWordsByFile = compose(
  util.setPath,
  util.readDirectory,
  util.filterByFinal('.srt'),
  util.setPaths(rootPath),
  util.readFiles,
  util.joinTextsByPattern(' '),
  util.spliteByLineBreak,
  util.removeEmpty,
  util.filterListNotIncluded('-->'),
  util.removeIndexes,
  util.removeSimbols(simbols),
  util.joinTextsByPattern(' '),
  util.spliteBySpaces,
  util.removeEmpty,
  util.removeIndexes,
  util.groupElements,
  util.ordering('quantity', 'desc'),
  logAndPass,
);

getMoreUsedWordsByFile(rootPath)
  .then(console.log);