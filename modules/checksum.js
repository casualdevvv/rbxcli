const fs = require('fs');
const crypto = require('crypto');

const verifyChecksum = (filePath, expectedChecksum) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(filePath);

    stream.on('data', data => hash.update(data));
    stream.on('end', () => {
      const actualChecksum = hash.digest('hex');
      resolve(actualChecksum === expectedChecksum);
    });
    stream.on('error', reject);
  });
};

module.exports = verifyChecksum;
