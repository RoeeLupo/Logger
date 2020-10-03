declare module '@mrsheldon/logger' {
  interface Options {
    file_format?: string;
    file_save?: boolean;
    format?: string;
    file?: string;
  }

  class Logger {
    constructor(options?: Options);

    public info(...message: unknown[]): void;
    public trace(...message: unknown[]): void;
    public debug(...message: unknown[]): void;
    public warning(...message: unknown[]): void;
    public success(...message: unknown[]): void;
    public error(...message: unknown[]): void;
    public fatal(...message: unknown[]): void;
  }

  export = Logger;
}
