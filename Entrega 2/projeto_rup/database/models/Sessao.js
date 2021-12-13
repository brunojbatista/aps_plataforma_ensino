const Sequelize = require('sequelize');
const database  = require('../db');
const Usuario   = require("./Usuario");

const Sessao = database.define('Sessao', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
    },
    session_hash: {
        type: Sequelize.STRING
    },
});

Sessao.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'usuario_id'
});

module.exports = Sessao;