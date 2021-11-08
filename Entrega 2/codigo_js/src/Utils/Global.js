const path  = require('path');

class Global {

    static getHTMLFile (name) {
        return path.join(__dirname, `../Views/${name}.html`);
    }

    static sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds));
    }

}

module.exports = Global;