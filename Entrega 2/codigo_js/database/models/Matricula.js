const Sequelize = require('sequelize');
const database  = require('../db');
const Usuario   = require("./Usuario");
const Curso     = require("./Curso");

const Matricula = database.define('Matricula', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
    },
    // numero: {
    //     type: Sequelize.STRING
    // },
    // bandeira: {
    //     type: Sequelize.STRING
    // },
    // valor: {
    //     type: Sequelize.DECIMAL
    // },
    // professor_id: {
    //     type: Sequelize.STRING
    // },

    //   cpf: {
    //     type: Sequelize.STRING
    // },
    //   telefone: {
    //     type: Sequelize.STRING
    // },
    //   session_hash: {
    //     type: Sequelize.STRING
    // },
});

Matricula.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'aluno_id'
});

Matricula.belongsTo(Curso, {
    constraint: true,
    foreignKey: 'curso_id'
});

module.exports = Matricula;