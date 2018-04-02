

class Language {
    constructor(c) {
        this.client = c;
    }

    get(str, ...args) {
        if (!this.language[str]) {
            // If it isn't in the configured language's file, use the main one (probably en_US)
            return this.client.languages[`${this.client.config.defaultSettings.language}`].get(str);
        } else {
            // console.log(args)
            return args.length ? this.language[str](...args) : this.language[str];
        }
    }
}

module.exports = Language;
