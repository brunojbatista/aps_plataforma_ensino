// const request   = require('request');
// const response  = require('response');
const md5       = require('md5');

class Sessao {

    constructor(
        request,
        response
    ) {
        this.request = request;
        this.response = response;
        this.id = null;
    }

    getSessionID() {
        return this.id;
    }

    isLogged() {
        try {
            return this.request.cookies.hasOwnProperty('logged');
        } catch (e) {
            return false;
        }
    }

    setLogged(maxTimeSecond = 300) {
        this.id = md5(Date.now());
        this.response.cookie('logged', this.id, {maxAge: maxTimeSecond*1000});
    }

}

module.exports = Sessao;