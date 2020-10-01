const fs = require('fs');

const colours = {Reset: "\x1b[0m",FgWhite: "\x1b[37m",BgError: "\x1b[41m",BgSuccess: "\x1b[42m",BgWarning: "\x1b[43m",BgInfo: "\x1b[46m"}
const escape = (type) => `0${type}`.slice(-2);

module.exports = class Logger {
    constructor(options) {
        this.options = options || {}

        if (this.options.hasOwnProperty('format')) this.format = this.options.format;
        else this.format = "[{date} - {time}] {type} : {message}";

        if (this.options.hasOwnProperty('file_format')) this.file_format = this.options.file_format + "\n";
        else this.file_format = "[{date} - {time}] [{type}] : {message}\n";

        if (this.options.hasOwnProperty('file_save')) this.file_save = this.options.file_save;
        else this.file_save = false;

        if (this.options.hasOwnProperty('file_dir')) this.file = this.options.file_dir;
        else this.file = '././debug.log';

        if (this.file_save) {
            this.log_file = fs.createWriteStream(this.file, {flags : 'a'});
        }
      }
      
    info(...message) {
        return this._write('info', ...message);
    }

    trace(...message) {
        return this._write('trace', ...message);
    }

    debug(...message) {
        return this._write('debug', ...message);
    } 

    warning(...message) {
        return this._write('warning', ...message);
    }

    success(...message) {
        return this._write('success', ...message);
    }

    error(...message) {
        return this._write('error', ...message);
    }

    critical(...message) {
        return this._write('critical', ...message);
    } 

    _write(type, ...message) {
        let date = new Date()
        let day = escape(date.getDate());
        let month = escape(date.getMonth() + 1)
        let year = date.getFullYear();
        let second = date.getSeconds()
        let minute = escape(date.getMinutes())
        let hour = escape(date.getHours())
        let full_date = `${month}/${day}/${year}`
        let full_time = `${hour}:${minute}:${second}`
        let type_text; 
        let save;

        switch(type) {
            case 'info':
                save = false;
                type_text = colours.BgInfo + 'Info' + colours.Reset;
                break;
            case 'trace':
                save = false;
                type_text = colours.BgInfo + 'Trace' + colours.Reset;
                message += ": " + new Error().stack;
                break;
            case 'debug':
                save = false;
                type_text = colours.BgWarning + 'Debug' + colours.Reset;
                break;
            case 'warning':
                save = true;
                type_text = colours.BgWarning + 'Warning' + colours.Reset;
                break;
            case 'success':
                save = false;
                type_text = colours.BgSuccess + 'Success' + colours.Reset;
                break;
            case 'error':
                save = true;
                type_text = colours.BgError + 'Error' + colours.Reset;
                break;
            case 'critical':
                save = true;
                type_text = colours.BgError + 'Critical' + colours.Reset;
                break;
            default: break;
        }
        
        if(this.file_save) {
            const final_file = this.file_format
            .replace("{date}", full_date)
            .replace("{day}", day)
            .replace("{month}", month)
            .replace("{year}", year)
            .replace("{time}", full_time)
            .replace("{second}", second)
            .replace("{minute}", minute)
            .replace("{hour}", hour)
            .replace("{type}", type)
            .replace("{message}", message)
            save ? this.log_file.write(final_file) : null
        }

        const final_console = this.format
        .replace("{date}", full_date)
        .replace("{day}", day)
        .replace("{month}", month)
        .replace("{year}", year)
        .replace("{time}", full_time)
        .replace("{second}", second)
        .replace("{minute}", minute)
        .replace("{hour}", hour)
        .replace("{type}", type_text)
        .replace("{message}", message)
        return console.log(final_console)
    }
}

