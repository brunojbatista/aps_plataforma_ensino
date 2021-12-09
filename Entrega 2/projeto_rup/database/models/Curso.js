const Sequelize = require('sequelize');
const database  = require('../db');
const Usuario   = require("./Usuario");

const Curso = database.define('Curso', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
    },
    nome: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DECIMAL
    },
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

Curso.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'professor_id'
});

module.exports = Curso;