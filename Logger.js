const fs = require('fs');
const log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});

const colours = {Reset: "\x1b[0m",FgWhite: "\x1b[37m",BgError: "\x1b[41m",BgSuccess: "\x1b[42m",BgWarning: "\x1b[43m",BgInfo: "\x1b[46m"}
const escape = (type) => `0${type}`.slice(-2);

class Logger {
    info(...message) {
        return this._write('info', ...message);
    }
    
    warn(...message) {
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

        const final_file = `[${type}] ${full_date} : ${message}\n`
        save ? log_file.write(final_file) : null

        const final_console = `${type_text} ${full_date} : ${message}`
        return console.log(final_console)
    }
}

module.exports = Logger;
