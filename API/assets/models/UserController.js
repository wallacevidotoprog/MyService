const express = require('express'); const server = express(); server.use(express.json());
const Sequelize = require('sequelize');
const database = require('../connection/app');
const crypto = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const update = require('.../middlewares/updateIMG')
require('dotenv').config();

// ############################ Base User
const User = database.define('users', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    pass: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.BLOB
    },
    ID_Google: {
        type: Sequelize.STRING
    },
    accont_google: {
        type: Sequelize.BOOLEAN
    },
});
// ############################ Login
async function LoginUser(req, res) {
    const user = await User.findOne({
        attributes: ['ID', 'name', 'email', 'pass'],
        where: {
            email: req.body.email
        }
    });

    if (user === null) {
        return res.status(400).json({
            err: true,
            message: "Algo de errado ao digitar seu email ou senha."
        });
    }
    else {
        if ((await crypto.compare(req.body.pass, user.pass))) {
            const token = jwt.sign({ id: user.ID, email: user.email }, process.env.KEY_TOKEN, { expiresIn: '1d' });
            return res.status(200).json({
                err: false,
                message: "Logado con sucesso",
                Token: token
            });
        }
        else {
            return res.status(400).json({
                err: true,
                message: "Algo de errado ao digitar seu email ou senha."
            });
        }
    }
}
// ############################ CRUD
async function RegisterUser(req, res) {
    if (!(await UserExist(req.body.email))) {
        req.body.pass = await crypto.hash(req.body.pass, 10);
        await User.create(req.body).then(() => {
            return res.status(200).json({
                err: false,
                message: "Cadastrado com Sucesso."
            });
        }).catch((err) => {
            return res.status(400).json({
                err: true,
                message: err.message
            });
        });
    } else {

        return res.status(400).json({
            err: true,
            message: "Erro ao se cadastrar."
        });
    }
}
async function UpdateUser(req, res) {
    
    const user = await User.findOne(req.body,{ where: { ID: req.userIdTK, email: req.userEmailTK } });

    if (user) {
        //req.body.pass = await crypto.hash(req.body.pass, 10);
        await User.update(req.body, { where: { ID: req.userIdTK, email: req.userEmailTK } }).then((ss) => {
            return res.status(200).json({
                after: user,
                before: req.body,
                msg: "Teste Ok"
            });
        }).catch((err) => {
            return res.status(400).json({
                err: true,
                msg: "Nada encontrado."
            });
        });
    }
}
async  function  UpdateAvatarUser(req, res) {
    if (req.file) {
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
    });




    const xt = false;

    if(xt){
    const user = await User.findOne(req.body,{ where: { ID: req.userIdTK, email: req.userEmailTK } });

    if (user) {
        //req.body.pass = await crypto.hash(req.body.pass, 10);
        await User.update(req.body, { where: { ID: req.userIdTK, email: req.userEmailTK } }).then((ss) => {
            return res.status(200).json({
                after: user,
                before: req.body,
                msg: "Teste Ok"
            });
        }).catch((err) => {
            return res.status(400).json({
                err: true,
                msg: "Nada encontrado."
            });
        });
    }}
}
async function TesteAll(req, res) {
    await User.findAll({
        attributes: ['ID', 'name', 'email']
    }).then((users) => {
        return res.json({
            err: false,
            DATA: users,
            idUserLogado: req.userIdTK,
            email: req.userEmailTK
        });
    }).catch((err) => {
        return res.status(400).json({
            err: false,
            messge: err
        });
    });
}

// ############################ Function de verificações
async function UserExist(email) {
    try {
        const user = await User.findOne({
            attributes: ['name', 'email'],
            where: {
                email: email
            }
        });
        if (!user) {
            return false
        } else {
            return true
        }
    } catch (err) {
        return err.message
    }


}
// ############################

//Cria tabela
//User.sync();
//altera a tabela com base na model
//User.sync({alter:true});

module.exports = { User, LoginUser, RegisterUser, UpdateUser,UpdateAvatarUser, TesteAll };