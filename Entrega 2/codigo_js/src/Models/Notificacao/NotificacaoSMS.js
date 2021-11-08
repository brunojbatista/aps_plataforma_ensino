const NotificacaoInterface = require('./NotificacaoInterface');

class NotificacaoSMS extends NotificacaoInterface {

    constructor(usuarioObj) {
        this.usuarioObj = usuarioObj;
    }

    enviarNotificacao() {
        console.log(`Enviando um SMS para ${this.usuarioObj.nome}`);
    }

}

module.exports = NotificacaoSMS;