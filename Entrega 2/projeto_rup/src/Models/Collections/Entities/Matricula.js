class Matricula {

    constructor({
        id, 
        aluno_id, 
        curso_id,
        createdAt, 
        updatedAt
    }) {
        this.id = id;
        this.aluno_id = aluno_id;
        this.curso_id = curso_id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getMatricula() {
        return {
            id: this.id,
            aluno_id: this.aluno_id,
            curso_id: this.curso_id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    }

}

module.exports = Matricula;
