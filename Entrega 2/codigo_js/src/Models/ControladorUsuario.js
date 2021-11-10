const CadastroUsuario   = require('./CadastroUsuario');
// const CadastroCartao    = require('./CadastroCartao');
// const CadastroMatricula = require('./CadastroMatricula');

const FabricaRepositorioBDR = require('../Models/Repositorio/FabricaRepositorioBDR');

class ControladorUsuario {

    constructor() {
        this.fabricaBDR = new FabricaRepositorioBDR();
    }

    async cadastrarUsuario(
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    ) {

        return new Promise(
            async (resolve, reject) => {

                // var usuarioCollection   = new CadastroUsuario();
        
                // console.log("cadastrando...");

                var usuarioBDR = this.fabricaBDR.criarRepositorioUsuario();

                var status = await Promise.all([
                    usuarioBDR.hasUsuarioByCPF(cpf), 
                    usuarioBDR.hasUsuarioByLogin(login)
                ]);

                if (status[0] || status[1]) return reject("CPF e/ou Login existente(s)");

                var usuario = await usuarioBDR.inserirUsuario(
                    cpf,
                    nome,
                    login,
                    senha,
                    email,
                    telefone
                );

                return resolve(true);


            }
        );

        
    }

    async autenticar(
        login, 
        senha,
        session_hash
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {

                    var usuarioBDR = this.fabricaBDR.criarRepositorioUsuario();

                    const usuario = await usuarioBDR.getByLogin(login);

                    if (usuario.senha !== senha) return reject("Login/Senha incorreto(s)");

                    usuarioBDR.atualizarSessionHash(usuario.id, session_hash);

                    resolve({...usuario, session_hash});

                } catch (e) {
                    return reject(e);
                }

            }
        );

    }

}

module.exports = ControladorUsuario;