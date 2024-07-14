const fs = require('fs');
const path = require('path');

const checkExistingVersion = (versionPrefix) => {
  const directories = fs.readdirSync('.').filter(f => fs.statSync(f).isDirectory() && f.startsWith(versionPrefix));

  if (directories.length > 0) {
    return directories[0];
  }
  return null;
};

const deleteFolderRecursive = (folderPath) => {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
};

module.exports = {
  checkExistingVersion,
  deleteFolderRecursive
};
