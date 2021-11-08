const ControladorUsuario = require('../Models/ControladorUsuario');
class Fachada {

    static cadastrarUsuario({
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    }) {

        var controladorUsuario = new ControladorUsuario();

        return controladorUsuario.cadastrarUsuario(
            cpf,
            nome,
            login,
            senha,
            email,
            telefone
        );

    }

    static fazerLogin(
        login,
        senha
    ) {

    }

    static checarAutenticacao(
        usuario_id
    ) {

    }

    static comprarCurso(
        curso_id,
        usuario_id
    ) {

    }

    static cadastrarCurso(
        usuario_id,
        nome,
        descricao,
        preco
    ) {

    }

}

module.exports = Fachada;