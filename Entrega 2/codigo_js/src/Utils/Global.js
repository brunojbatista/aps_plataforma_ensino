const path  = require('path');

class Global {

    static getHTMLFile (name) {
        return path.join(__dirname, `../Views/${name}.html`);
    }

}

module.exports = Global;