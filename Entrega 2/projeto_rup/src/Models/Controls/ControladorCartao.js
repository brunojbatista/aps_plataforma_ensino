const CadastroCartao   = require('../Collections/CadastroCartao');
const CadastroUsuario = require('../Collections/CadastroUsuario');
const GlobalUtils     = require('../../Utils/Global');


class ControladorCartao {

    constructor(fabricaRepositorio) {
        this.CadastroCartao = new CadastroCartao(
            fabricaRepositorio.criarRepositorioCartao()
        );
        this.CadastroUsuario = new CadastroUsuario(
            fabricaRepositorio.criarRepositorioUsuario()
        );
    }

    cadastrarCartao(
        numero,
        bandeira,
        req
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {
                    
                    const cookies = GlobalUtils.parseCookie(req);

                    if (!cookies.hasOwnProperty('logged')) reject("Usuário não logado!");

                    const session_hash = cookies.logged;

                    const usuario = await this.CadastroUsuario.getBySession(session_hash);

                    if (await this.CadastroCartao.hasNumero(numero)) return reject("Cartão ja existente");

                    var cartao = await this.CadastroCartao.inserirCartao(
                        numero,
                        bandeira,
                        usuario.id
                    );
                    
                    resolve(cartao);

                } catch (e) { reject(e); }

            }
        );

    }

    listarCartoes(
        req
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {
                    
                    const cookies = GlobalUtils.parseCookie(req);

                    if (!cookies.hasOwnProperty('logged')) reject("Usuário não logado!");

                    const session_hash = cookies.logged;

                    const usuario = await this.CadastroUsuario.getBySession(session_hash);

                    var cartoes = [];

                    // if (await this.CadastroCartao.hasNumero(numero)) return reject("Cartão ja existente");

                    var cartoes = await this.CadastroCartao.listarCartoes(
                        usuario.id
                    );
                    
                    resolve(cartoes);

                    // resolve(true);

                } catch (e) { reject(e); }

            }
        );

    }

    getCartao(
        cartao_id,
        req
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {
                    
                    const cookies = GlobalUtils.parseCookie(req);

                    if (!cookies.hasOwnProperty('logged')) reject("Usuário não logado!");

                    const session_hash = cookies.logged;

                    const usuario = await this.CadastroUsuario.getBySession(session_hash);

                    var cartao = await this.CadastroCartao.getCartao(
                        cartao_id,
                        usuario.id
                    );

                    resolve(cartao);

                } catch (e) { reject(e); }

            }
        );

    }


}

module.exports = ControladorCartao;