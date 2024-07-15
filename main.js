const fs = require('fs');
const path = require('path');
const cliProgress = require('cli-progress');
const { exit } = require('process');
const axios = require('axios'); 

const downloadFile = require('./modules/download');
const verifyChecksum = require('./modules/checksum');
const extractZip = require('./modules/extract');
const fetchVersion = require('./modules/version');
const { checkExistingVersion, deleteFolderRecursive } = require('./modules/fileutils');
const { folderMappings, AppSettings } = require('./modules/constants');
const logger = require('./modules/logger');

const main = async () => {
  logger.info('Fetching the latest version of Roblox from LIVE Channel...');
  logger.info('--> https://weao.xyz/api/versions/current');
  const version = await fetchVersion();
  logger.info(`Version: ${version}`);

  const versionFolder = version.startsWith('version-') ? version : `version-${version}`;
  const existingVersionFolder = checkExistingVersion('version-');
  if (existingVersionFolder && existingVersionFolder === versionFolder) {
    logger.info('Roblox is already updated.');
    exit(0);
  }

  if (existingVersionFolder) {
    logger.info(`Deleting existing folder: ${existingVersionFolder}`);
    deleteFolderRecursive(existingVersionFolder);
  }

  const baseUrl = `https://setup.rbxcdn.com/${version}-`;
  const manifestUrl = `${baseUrl}rbxPkgManifest.txt`;
  const dumpDir = path.join(versionFolder);
  // if you want it to download somewhere specific add it to the dumpdir
  // path.join('Roblox', versionFolder);

  fs.mkdirSync(dumpDir, { recursive: true });
  logger.info(`Fetching manifest from ${manifestUrl}...`);
  const response = await axios.get(manifestUrl);
  const manifestContent = response.data.trim().split('\n');

  const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

  for (let i = 1; i < manifestContent.length; i += 4) {
    const fileName = manifestContent[i].trim();
    const checksum = manifestContent[i + 1].trim();
    const compressedSize = parseInt(manifestContent[i + 2], 10);
    const uncompressedSize = parseInt(manifestContent[i + 3], 10);

    if (fileName.endsWith('.zip') || fileName.endsWith('.exe')) {
      const packageUrl = `${baseUrl}${fileName}`;
      const filePath = `${dumpDir}/${fileName}`;

      logger.info(`Downloading ${fileName} from ${packageUrl}...`);
      await downloadFile(packageUrl, filePath, progressBar);

      logger.info(`Verifying ${fileName}...`);
      const isChecksumValid = await verifyChecksum(filePath, checksum);

      if (isChecksumValid) {
        logger.info(`${fileName} downloaded and verified successfully.`);
        if (fileName.endsWith('.zip')) {
          logger.info(`Extracting ${fileName}...`);
          const extractPath = await extractZip(filePath, dumpDir, folderMappings);
          logger.info(`Cleaning up ${fileName}...`);
          fs.unlinkSync(filePath);
          logger.info(`Deleted ${fileName}.`);
        }
      } else {
        logger.error(`Checksum mismatch for ${fileName}. Deleting file.`);
        fs.unlinkSync(filePath);
      }
    } else {
      logger.info(`Skipping entry: ${fileName}`);
    }
  }

  logger.info(`Creating AppSettings.xml...`);
  fs.writeFileSync(`${dumpDir}/AppSettings.xml`, AppSettings);
  logger.info(`AppSettings.xml created at root.`);

  logger.info(`Roblox ${version} has been successfully downloaded and extracted to ${dumpDir}.`);
  exit(0);
};

main().catch(err => logger.error(err));