const axios = require('axios');
const logger = require('./logger');

const fetchPreviousVersion = async () => {
    try {
      const url = 'https://setup.rbxcdn.com/DeployHistory.txt';
      logger.info(`Fetching DeployHistory from: ${url}`);
      const response = await axios.get(url);
      const deployHistory = response.data.trim().split('\n');
  
      let lastVersionIndex = -1;
      let previousVersion = '';
  
      for (let i = deployHistory.length - 1; i >= 0; i--) {
        const line = deployHistory[i];
  
        if (line.startsWith('New WindowsPlayer version-')) {
          if (lastVersionIndex === -1) {
            lastVersionIndex = i;
          } else {
            previousVersion = line.match(/version-([\w\d]+)/)[0].trim();
            break;
          }
        }
      }
  
      if (!previousVersion) {
        logger.error('Could not find a previous WindowsPlayer version.');
        return null;
      }
  
      logger.info(`Previous WindowsPlayer version: ${previousVersion}`);
      return previousVersion;
    } catch (error) {
      logger.error('Error fetching or parsing DeployHistory.txt:', error);
      return null;
    }
  };
  
module.exports = fetchPreviousVersion;