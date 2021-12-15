const CadastroUsuario   = require('../Collections/CadastroUsuario');
const md5           = require('md5');
const GlobalUtils     = require('../../Utils/Global');

const seconds = 3600;


class ControladorUsuario {

    constructor(fabricaRepositorio) {
        this.CadastroUsuario = new CadastroUsuario(
            fabricaRepositorio.criarRepositorioUsuario()
        );
    }

    cadastrarUsuario(
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    ) {

        return new Promise(
            async (resolve, reject) => {

                var [hasCPF, hasLogin] = await Promise.all([
                    this.CadastroUsuario.hasUsuarioByCPF(cpf), 
                    this.CadastroUsuario.hasUsuarioByLogin(login)
                ]);

                if (hasCPF || hasLogin) return reject("CPF e/ou Login existente(s)");

                var usuario = await this.CadastroUsuario.inserirUsuario(
                    cpf,
                    nome,
                    login,
                    senha,
                    email,
                    telefone
                );

                return resolve(usuario);


            }
        );


    }

    autenticar(
        login,
        senha,
        res,
        req
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {

                    var session_hash;

                    while (true) {
                        session_hash = md5(Date.now());
                        try {
                            await this.CadastroUsuario.getBySession(session_hash);
                        } catch (e) {
                            break;                            
                        }
                    }

                    // const { logged } = GlobalUtils.parseCookie(req);

                    var usuario = await this.CadastroUsuario.getByLogin(login);

                    if (usuario.senha !== senha) return reject("Login/Senha incorreto(s)");

                    usuario = await this.CadastroUsuario.atualizarSessionHash(usuario.id, session_hash);

                    res.cookie('logged', session_hash, {maxAge: seconds*1000});

                    resolve(usuario);

                } catch (e) {
                    reject(e);
                }

            }
        );

    }

}

module.exports = ControladorUsuario;