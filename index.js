const fs = require('fs');

const colours = {Reset: "\x1b[0m",FgWhite: "\x1b[37m",BgError: "\x1b[41m",BgSuccess: "\x1b[42m",BgWarning: "\x1b[43m",BgInfo: "\x1b[46m"}
const escape = (type) => `0${type}`.slice(-2);

module.exports = class Logger {
    constructor(options) {
        this.options = options || {}

        if (this.options.hasOwnProperty('file_save')) this.file_save = this.options.file_save;
        else this.file_save = false;

        if (this.options.hasOwnProperty('file_dir')) this.file = this.options.file_dir;
        else this.file = __dirname + '/debug.log';

        if (this.file_save) {
            this.log_file = fs.createWriteStream(this.file, {flags : 'a'});
        }
      }
      
    info(...message) {
        return this._write('info', ...message);
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

    _write(type, ...message) {
        let d = new Date()
        let day = escape(d.getDate());
        let month = escape(d.getMonth());
        let year = d.getFullYear();
        let full_date = `[${month}/${day}/${year} | ${escape(d.getHours())}:${escape(d.getMinutes())}:${d.getSeconds()}]`
        let type_text; 
        let save;

        switch(type) {
            case 'info':
                save = false;
                type_text = colours.BgInfo + '[Info]' + colours.Reset;
                break;
            case 'warning':
                save = true;
                type_text = colours.BgWarning + '[Warning]' + colours.Reset;
                break;
            case 'success':
                save = false;
                type_text = colours.BgSuccess + '[Success]' + colours.Reset;
                break;
            case 'error':
                save = true;
                type_text = colours.BgError + '[Error]' + colours.Reset;
                break;
            default:
                break;
        }
        
        if(this.file_save) {
            const final_file = `${full_date} [${type}] : ${message}\n`
            save ? this.log_file.write(final_file) : null
        }

        const final_console = `${full_date} ${type_text} : ${message}`
        return console.log(final_console)
    }
}

