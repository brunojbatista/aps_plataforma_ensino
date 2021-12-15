// const GlobalUtils = require('../../Utils/Global');

class RepositorioUsuarioInterface {

    constructor() {}

    inserirUsuario() {}

    getByID(usuario_id) {}

    getBySession(session_hash) {}

    getByLogin(login) {}

    hasUsuarioByCPF(cpf) {}

    hasUsuarioByLogin(login) {}

    atualizarSessionHash(id, session_hash) {}

}

module.exports = RepositorioUsuarioInterface;