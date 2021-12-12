const Sequelize = require('sequelize');
const database  = require('../db');
const Usuario   = require("./Usuario");
const Curso     = require("./Curso");
const Cartao    = require("./Cartao");

const Transacao = database.define('Transacao', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
    },
    transacao_id: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DECIMAL
    },
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

Transacao.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'aluno_id'
});

Transacao.belongsTo(Curso, {
    constraint: true,
    foreignKey: 'curso_id'
});

Transacao.belongsTo(Cartao, {
    constraint: true,
    foreignKey: 'cartao_id'
});

module.exports = Transacao;