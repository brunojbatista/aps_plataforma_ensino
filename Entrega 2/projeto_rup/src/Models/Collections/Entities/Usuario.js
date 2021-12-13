class Usuario {

    constructor({
        id, 
        nome, 
        login, 
        senha, 
        cpf, 
        telefone, 
        session_hash, 
        createdAt, 
        updatedAt
    }) {
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.cpf = cpf;
        this.telefone = telefone;
        this.session_hash = session_hash;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.matriculas = [];
        this.cartoes = [];
        this.cursos = [];
        this.transacoes = [];
        this.sessao = null;
    }

    getUsuario() {
        return {
            id: this.id,
            nome: this.nome,
            login: this.login,
            senha: this.senha,
            cpf: this.cpf,
            telefone: this.telefone,
            session_hash: this.session_hash,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            matriculas: this.matriculas,
            cartoes: this.cartoes,
            cursos: this.cursos,
            transacoes: this.transacoes,
        }
    }

    setMatriculas(CadastroMatricula) {
        this.matriculas = [];
    }

    setCartoes(CadastroCartoes) {
        this.cartoes = [];
    }

    setCursos(CadastroCurso) {
        this.cursos = [];
    }

    setTransacoes(CadastroTransacao) {
        this.transacoes = [];
    }

    setSessao(CadastroSessao) {
        this.sessao = null;
    }

    // set id(id) {
    //     this.id = id;
    // }

    // set nome(nome) {
    //     this.nome = nome;
    // }

    // set login(login) {
    //     this.login = login;
    // }

    // set senha(senha) {
    //     this.senha = senha;
    // }

    // set cpf(cpf) {
    //     this.cpf = cpf;
    // }

    // set telefone(telefone) {
    //     this.telefone = telefone;
    // }

    // set session_hash(session_hash) {
    //     this.session_hash = session_hash;
    // }

    // set createdAt(createdAt) {
    //     this.createdAt = createdAt;
    // }

    // set updatedAt(updatedAt) {
    //     this.updatedAt = updatedAt;
    // }


    // get id() {
    //     return this.id;
    // }

    // get nome() {
    //     return this.nome;
    // }

    // get login() {
    //     return this.login;
    // }

    // get senha() {
    //     return this.senha;
    // }

    // get cpf() {
    //     return this.cpf;
    // }

    // get telefone() {
    //     return this.telefone;
    // }

    // get session_hash() {
    //     return this.session_hash;
    // }

    // get createdAt() {
    //     return this.createdAt;
    // }

    // get updatedAt() {
    //     return this.updatedAt;
    // }

}

module.exports = Usuario;
