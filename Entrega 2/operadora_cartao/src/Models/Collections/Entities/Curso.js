class Curso {

    constructor({
        id, 
        nome, 
        descricao, 
        valor, 
        createdAt, 
        updatedAt
    }) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getCurso() {
        return {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            valor: this.valor,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }


}

module.exports = Curso;
