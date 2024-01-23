require('dotenv').config();

const { Sequelize } = require('sequelize');

const connection = new Sequelize(process.env.DB_DATA, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });

  connection.authenticate().then(()=>{
    console.log("Connect database OK")
  }).catch((err)=>{
    console.log("Connect database ERR("+err+")")
  });

  module.exports = connection;

