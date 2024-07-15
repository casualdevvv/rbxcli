const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

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

  return new Promise((resolve, reject) => {
    try {
      const zip = new AdmZip(filePath);
      zip.extractAllTo(extractPath, /*overwrite*/ true);

      resolve(extractPath);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = extractZip;
