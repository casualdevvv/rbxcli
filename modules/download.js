const axios = require('axios');
const fs = require('fs');

const downloadFile = async (url, filePath, progressBar) => {
  try {
    const { data, headers } = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    const totalLength = parseInt(headers['content-length'], 10);
    console.log(`Downloading ${filePath} (${totalLength} bytes) from ${url}`);

    progressBar.start(totalLength, 0);

    const writer = fs.createWriteStream(filePath);
    data.pipe(writer);

    return new Promise((resolve, reject) => {
      data.on('data', (chunk) => {
        progressBar.increment(chunk.length);
      });

      data.on('end', () => {
        progressBar.stop();
        console.log(`Downloaded ${filePath}`);
        resolve();
      });

      writer.on('error', (err) => {
        console.error(`Error writing ${filePath}:`, err);
        reject(err);
      });
    });
  } catch (error) {
    console.error(`Error downloading ${filePath} from ${url}:`, error);
    throw error;
  }
};

module.exports = downloadFile;
