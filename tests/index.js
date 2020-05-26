const logger = require("../index")

const Logger = new logger({
    file_save: true,
    file_dir: __dirname + '/debug.log'
})

Logger.warning("warning")
Logger.error("erorr")
Logger.success("success")
Logger.info("info")