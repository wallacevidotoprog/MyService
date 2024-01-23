const { Sequelize } = require('sequelize');

const connection = new Sequelize('database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  connection.authenticate().then(()=>{
    console.log("Connect database OK")
  }).catch(()=>{
    console.log("Connect database ERR")
  });

  module.exports = connection;

