const Sequelize = require('sequelize');
const database  = require('../db');
const Usuario   = require("./Usuario");

const Cartao = database.define('Cartao', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
    },
    numero: {
        type: Sequelize.STRING
    },
    bandeira: {
        type: Sequelize.STRING
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

Cartao.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'usuario_id'
});

module.exports = Cartao;