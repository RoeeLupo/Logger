const logger = require("../index")

const Logger = new logger({
    file_save: true,
    file_dir: __dirname + '/debug.log',
    file_format: "[{date} | {time}] [{type}] : {message}", 
    format: "[{date} | {time}] {type} : {message}" 
})

Logger.warning("warning")
Logger.error("erorr")
Logger.success("success")
Logger.info("info")

