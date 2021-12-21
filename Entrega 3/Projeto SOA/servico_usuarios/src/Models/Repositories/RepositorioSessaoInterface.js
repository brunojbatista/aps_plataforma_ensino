// const GlobalUtils = require('../../Utils/Global');

class RepositorioSessaoInterface {

    constructor() {}

    getSession(session_hash) {}

    inserirSessao(usuario_id, session_hash) {}

    // hasSession(session_hash) {}

}

module.exports = RepositorioSessaoInterface;