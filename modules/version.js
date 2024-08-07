const axios = require('axios');

const fetchVersion = async () => {
  try {
    const response = await axios.get('https://clientsettingscdn.roblox.com/v2/client-version/WindowsPlayer/channel/live/');
    const data = response.data;

    if (data && data.clientVersionUpload) {
      return data.clientVersionUpload;
    } else {
      throw new Error('Failed to fetch version from Roblox API');
    }
  } catch (error) {
    logger.error(`Error fetching version: ${error.message}`);
    exit(1);
  }
};


module.exports = fetchVersion;
