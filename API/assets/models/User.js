const express = require('express');const server = express(); server.use(express.json());
const Sequelize = require('sequelize');
const database = require('../connection/app');
const  crypto = require('bcryptjs');

// ############################ Base User
const User = database.define('users',{
    ID:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    }, 
    pass:{
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
// ############################ CRUD
async function Register(req,res){   
    if(!(await UserExist(req.body.email))){
        req.body.pass = await crypto.hash(req.body.pass,10);
        await User.create(req.body).then(()=>{
            return res.json({
                err:false,
                message: "Cadastrado com Sucesso."
            });
        }).catch((err)=>{
            return res.json({
                err:true,
                message: err.message
            });
        });
    }else{
       
        return res.json({
            err:true,
            message: "Erro ao se cadastrar."
        });
    }
}
async function Update(req,res){
    await User.update()
}
// ############################ Function de verificações
async function UserExist(email){
    try{
        const user = await User.findOne({
            attributes:['name','email'],
            where:{
                email: email
            }
        });
        if(!user){
            return false
        }else{
            return true
        }
    }catch(err){
        return err.message
    }
    
    
}
// ############################

//Cria tabela
//User.sync();
//altera a tabela com base na model
//User.sync({alter:true});

module.exports = {User,Register,Update};