<h2 align="center" id="Template">
  Logger
</h2>

<h3 align="center">Minimalist, dependency-free, lightning fast NodeJS logging tool</h3>

<p align="center">
    <a href="https://paypal.me/roeelupo" target="_blank">
        <img src="https://img.shields.io/badge/paypal-Roee%20Lupo-blue.svg?logo=paypal&logoWidth=30&logoColor=00457C&style=popout-square" alt="PayPal"/>
    </a>
</p>

----

## Information

A minimalist, dependency-free, lightning fast logger made for https://discord.boats and my other NodeJS projects

## Showcase

![#](https://i.ibb.co/ckLwbYz/image.png)

## Installing

Use `npm i @mrsheldon/logger`

## Usage

```js
const logger = require("@mrsheldon/logger")

const Logger = new logger({options})

Logger.debug("debug")
Logger.warning("warning")
Logger.error("error")
Logger.fatal("fatal")
Logger.success("success")
Logger.info("info")
Logger.trace("trace")
```

### Options
| Name         | Default Value                            | Required | Description                                                 |
|--------------|------------------------------------------|----------|-------------------------------------------------------------|
| file_save    | false                                    | No       | Decides if it will save the errors and warnings to the file |
| file_dir     | __dirname + '/logs/debug.log'            | No       | Decides where the log file will be created                  |
| file_format  | '[{date} - {time}] [{type}] : {message}' | No       | Sets the format of the file log                             |
| format       | '[{date} - {time}] {type} : {message}'   | No       | Sets the format of the console log                          |


### Available format arguments
| Name           | Description                     | Example           |
|----------------|---------------------------------|-------------------|
| {message}      | The log message                 | Error in index.js |
| {date}         | The full date                   | 06/04/2020        |
| {time}         | The full time                   | 11:55:52          | 
| {year}         | The full year (from the {date}) | 2020              |
| {month}        | The month (from the {date})     | 06                |
| {day}          | The day (from the {date})       | 04                |
| {hour}         | The hour (from the {time})      | 11                |
| {minute}       | The minute (from the {time})    | 55                |
| {second}       | The second (from the {time})    | 52                |

### Notice
Only warnings, errors and fatal errors are saved to the file, customization to be added soon

## Contributing

Contributions are always welcome to this project!\
Take a look at any existing issues on this repository for starting places to help contribute towards, or simply create your own new contribution to the project.

Please make sure to follow the existing standards within the project such as code styles, naming conventions and commenting/documentation.

When you are ready, simply create a pull request for your contribution and I will review it whenever I can!

### Donating

You can also help me and the project out by contributing through a donation on PayPal or by supporting me monthly on my Patreon page.
<p>
    <a href="https://paypal.me/roeelupo" target="_blank">
        <img src="https://img.shields.io/badge/paypal-Roee%20Lupo-blue.svg?logo=paypal&logoWidth=30&logoColor=00457C&style=popout-square" alt="PayPal"/>
    </a>
</p>

## Issues
If you have an issue, please create a GitHub issue here to report the situation, include as much detail as you can!
