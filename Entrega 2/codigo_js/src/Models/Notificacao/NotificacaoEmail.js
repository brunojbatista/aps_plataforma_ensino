const NotificacaoInterface = require('./NotificacaoInterface');

class NotificacaoEmail extends NotificacaoInterface {

    constructor(usuarioObj) {
        this.usuarioObj = usuarioObj;
    }

    enviarNotificacao() {
        console.log(`Enviando um email ${this.usuarioObj.nome} para ${this.usuarioObj.nome}`);
    }

}

module.exports = NotificacaoEmail;