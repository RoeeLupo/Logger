const logger = require("../index")

const Logger = new logger({
    file_save: true,
    file_dir: __dirname + '/debug.log',
    file_format: "[{date} - {time}] [{type}] : {message}", 
    format: "[{date} - {time}] {type} : {message}" 
})

Logger.debug("debug")
Logger.warning("warning")
Logger.error("erorr")
Logger.fetal("fetal")
Logger.success("success")
Logger.info("info")
Logger.trace("trace")
