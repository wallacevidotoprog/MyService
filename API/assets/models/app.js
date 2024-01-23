const { Sequelize } = require('sequelize');

const connection = new Sequelize('database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  connection.authenticate().then(()=>{
    console.log("Connect database OK")
  }).catch((err)=>{
    console.log("Connect database ERR("+err+")")
  });

  module.exports = connection;

