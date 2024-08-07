const colors = {
    RESET: "\x1b[0m",
    RED: "\x1b[31m",
    YELLOW: "\x1b[33m",
    GREEN: "\x1b[32m",
    CYAN: "\x1b[36m",
    MAGENTA: "\x1b[35m",
};

const logTypes = {
    info: `${colors.GREEN}INFO${colors.RESET}`,
    warn: `${colors.YELLOW}WARN${colors.RESET}`,
    error: `${colors.RED}ERROR${colors.RESET}`,
    debug: `${colors.CYAN}DEBUG${colors.RESET}`,
};

const log = (level, message) => {
    const timestamp = new Date().toLocaleString();
    const formattedMessage = `[${colors.MAGENTA}RBXLIVECLI${colors.RESET}] [${timestamp}] [${level}] ${message}`;

    console.log(formattedMessage);
};

const logger = {
    info: (message) => log(logTypes.info, message),
    warn: (message) => log(logTypes.warn, message),
    error: (message) => log(logTypes.error, message),
    debug: (message) => log(logTypes.debug, message),
};

module.exports = logger;
