const path  = require('path');

class Global {

    static getHTMLFile (name) {
        return path.join(__dirname, `../Views/${name}.html`);
    }

    static sleep(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds*1000));
    }

    static parseCookie(request) {
        if (!request.headers.cookie) return {};
        let cookie = {};
        request.headers.cookie.split(/ *; */g).forEach(strValue => {
            let elements = strValue.split(/ *= */g);
            cookie[elements[0]] = elements[1];
        });
        return cookie;
    }

    static makeID(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
        }
        return result;
    }

}

module.exports = Global;