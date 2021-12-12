// const url   = require('url');
// const superagent = require('superagent');
// const http  = require('http');
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const querystring = require('querystring');
// const { curly } = require('node-libcurl');

const CadastroMatricula = require('../Collections/CadastroMatricula');
const CadastroUsuario   = require('../Collections/CadastroUsuario');
const CadastroCurso     = require('../Collections/CadastroCurso');
const CadastroTransacao = require('../Collections/CadastroTransacao');
const GlobalUtils       = require('../../Utils/Global');
// const { response } = require('../../../app');

const seconds = 3600;


class ControladorMatricula {

    constructor(fabricaRepositorio) {
        this.CadastroMatricula = new CadastroMatricula(
            fabricaRepositorio.criarRepositorioMatricula()
        );
        this.CadastroUsuario = new CadastroUsuario(
            fabricaRepositorio.criarRepositorioUsuario()
        );
        this.CadastroCurso = new CadastroCurso(
            fabricaRepositorio.criarRepositorioCurso()
        );
        this.CadastroTransacao = new CadastroTransacao(
            fabricaRepositorio.criarRepositorioTransacao()
        );
    }

    matricularCurso(
        curso_id,
        cartao_id,
        req
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {
                    
                    const cookies = GlobalUtils.parseCookie(req);

                    // console.log("cookies", cookies);

                    if (!cookies.hasOwnProperty('logged')) reject("Usuário não logado!");

                    const session_hash = cookies.logged;

                    // console.log("session_hash", session_hash);

                    const usuario = await this.CadastroUsuario.getBySession(session_hash);

                    console.log(usuario)

                    const aluno_id = usuario.id;

                    // -------------------------------------------------------------------

                    if (!await this.CadastroCurso.hasCurso(curso_id)) return reject("O curso não existe!");

                    if (await this.CadastroMatricula.hasMatricula(curso_id, aluno_id)) return reject("Aluno já está matriculado!");

                    const matricula = await this.CadastroMatricula.inserirMatricula(
                        curso_id,
                        aluno_id
                    );
                    
                    console.log(matricula.getMatricula())

                    // -------------------------------------------------------------------
                    // -------------------------------------------------------------------
                    // Pagamento

                    const transacao_id = GlobalUtils.makeID(32);

                    // Chamar a fachada de pagamento pra se comunicar


                    // -------------------------------------------------------------------
                    // -------------------------------------------------------------------
                    // Transação
                    
                    const transacao = await this.CadastroTransacao.inserirTransacao(transacao_id, aluno_id, curso_id, cartao_id);

                    console.log(transacao);

                    
                    // -------------------------------------------------------------------
                    // -------------------------------------------------------------------
                    // -------------------------------------------------------------------

                    resolve(matricula);


                    // const { statusCode, data, headers } = await curly.post(
                    //     'http://127.0.0.1:3333/teste', {
                    //     postFields: querystring.stringify({
                    //         field: 'value',
                    //     }),
                    //     // can use `postFields` or `POSTFIELDS`
                    // })










                    // http.post('http://127.0.0.1:3333/teste', function(response) {
                    //     console.log('Status:', response.statusCode);
                    //     console.log('Headers: ', response.headers);
                    //     response.pipe(process.stdout);
                    //     resolve(true)
                    // });

                    // const response = await axios({
                    //     method: 'post',
                    //     url: 'http://127.0.0.1:3333/teste',
                    //     data: {
                    //       firstName: 'Fred',
                    //       lastName: 'Flintstone'
                    //     }
                    //   });

                    // console.log("response", response);


                    // superagent
                    //     .post('http://127.0.0.1:3333/teste')
                    //     .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
                    //     .set('accept', 'json')
                    //     .end((err, res) => {
                    //         // Calling the end function will send the request
                    //         console.log("res", res);
                    //         resolve(true);
                    //     });




                    // const data = await const data = await .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
                    // .then(response => {
                    //     // console.log(response);
                    //     return response.data;
                    // });


                    // const params = new url.URLSearchParams({ foo: 'bar' });

                    // console.log(params);
                    // console.log(params.toString());

                    // //const data = 
                    // await const data = await .post(
                    //     "http://127.0.0.1:3333/teste",
                    //     params.toString()
                    // )
                    // .then(response => {
                    //     console.log(response);
                    //     return response.data;
                    // });


                    // params = {
                    //     'numero_cartao': '1564632165416',
                    //     // 'valor': 100
                    // };

                    // var options = { 
                    //     method: 'post',
                    //     body: JSON.stringify(params),
                    //     headers: {'Content-Type': 'application/json'}
                    // };

                    
                    // const response = await (await fetch('http://localhost:3333/teste', options)).json();
                    // const data = await response.json();

                    // console.log("data", data)

                    // resolve(matricula);

                    // resolve(true);

                } catch (e) { reject(e); }

            }
        );

    }

}

module.exports = ControladorMatricula;