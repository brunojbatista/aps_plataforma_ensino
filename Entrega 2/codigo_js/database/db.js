const Sequelize = require('sequelize');

const sequelize = new Sequelize('plataforma_ensino', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

// const testConnection = async function() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// testConnection().then(r => console.log(r))