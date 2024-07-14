const logTypes = {
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR',
    debug: 'DEBUG',
};


const log = (level, message) => {
    const timestamp = new Date().toLocaleString();
    const formattedMessage = `[RBXLIVECLI] [${timestamp}] [${level}] ${message}`;

    console.log(formattedMessage);
};

const logger = {
    info: (message) => log(logTypes.info, message),
    warn: (message) => log(logTypes.warn, message),
    error: (message) => log(logTypes.error, message),
    debug: (message) => log(logTypes.debug, message),
};

module.exports = logger;
