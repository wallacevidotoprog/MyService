const Sequelize = require('sequelize');
const database = require('./app');

const User = database.define('user',{
    ID:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    user:{
        type:Sequelize.STRING
    },
    pass:{
        type:Sequelize.STRING
    },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    img:{
        type:Sequelize.BLOB
    },
    ID_Google:{
        type:Sequelize.STRING
    },
    accont_google:{
        type:Sequelize.BOOLEAN
    },
});

//Cria tabela
//User.sync();
//altera a tabela com base na model
//User.sync({alter:true});

module.exports = User;