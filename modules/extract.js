const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

const extractZip = (filePath, extractTo, mappings) => {
  const fileName = path.basename(filePath);

  let type = '_common';
  if (mappings._playerOnly[fileName]) {
    type = '_playerOnly';
  } else if (mappings._studioOnly[fileName]) {
    type = '_studioOnly';
  }

  const folderMapping = mappings[type][fileName] || '';

  const extractPath = path.join(extractTo, folderMapping);
  return fs.createReadStream(filePath)
    .pipe(unzipper.Extract({ path: extractPath }))
    .promise()
    .then(() => extractPath);
};

module.exports = extractZip;
