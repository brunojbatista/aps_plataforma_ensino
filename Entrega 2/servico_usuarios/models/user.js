// 'use strict';
// const {
//   Model
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     nome: DataTypes.STRING,
//     email: DataTypes.STRING,
//     login: DataTypes.STRING,
//     cpf: DataTypes.STRING,
//     telefone: DataTypes.STRING,
//     session_hash: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };


// const User = sequelize.define("user", {
//   name: DataTypes.TEXT,
//   favoriteColor: {
//     type: DataTypes.TEXT,
//     defaultValue: 'green'
//   },
//   age: DataTypes.INTEGER,
//   cash: DataTypes.INTEGER
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();

// module.exports = User;