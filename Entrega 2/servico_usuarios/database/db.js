const Sequelize = require('sequelize');

const sequelize = new Sequelize('usuarios_development', 'root', "root", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

module.exports = sequelize;