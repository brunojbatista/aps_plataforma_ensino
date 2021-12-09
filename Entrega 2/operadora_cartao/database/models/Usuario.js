const Sequelize = require('sequelize');
const database  = require('../db');

const Usuario = database.define('Usuario', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
    },
    nome: {
        type: Sequelize.STRING
    },
      login: {
        type: Sequelize.STRING
    },
      senha: {
        type: Sequelize.STRING
    },
      email: {
        type: Sequelize.STRING
    },
      cpf: {
        type: Sequelize.STRING
    },
      telefone: {
        type: Sequelize.STRING
    },
      session_hash: {
        type: Sequelize.STRING
    },
});

module.exports = Usuario;