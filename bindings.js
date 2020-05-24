const Logger = require("./Logger.js")
const logger = new Logger()

console.error = function(arguments) {
   logger.error(arguments);
};

console.warn = function(arguments) {
    logger.warn(arguments);
};

 console.success = function(arguments) {
    logger.success(arguments);
};

 console.info = function(arguments) {
    logger.info(arguments);
};