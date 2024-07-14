const axios = require('axios');

const fetchVersion = async () => {
  const apiUrl = 'https://weao.xyz/api/versions/current';
  try {
    const response = await axios.get(apiUrl, {
      headers: { 'User-Agent': 'WEAO-3PService' }
    });
    return response.data.Windows;
  } catch (error) {
    console.error(`Error fetching version:`, error);
    throw error;
  }
};

module.exports = fetchVersion;
