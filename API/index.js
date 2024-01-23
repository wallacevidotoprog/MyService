const express = require('express');
const server = express();
const User = require('./assets/models/User');
const  crypto = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { eAdmin } = require('./middlewares/auth')

server.use(express.json());




server.get("/",eAdmin, async (req,res)=>{
   
   return res.json({
    Err:false,
    messge: "logado",    
    idUserLogado: req.userId
   });
});

server.post("/register", async (req,res)=>{
   
    req.body.pass = await crypto.hash(req.body.pass,10);
    await User.create(req.body).then(()=>{
        return res.json({
            err:false,
            message:"Cadastro comcluido.",
        });
    }).catch(()=>{
        return res.status(400).json({
            err:true,
            message:"Erro ao se cadastrar."
        });
    });
    
})

server.post("/login", async(req,res)=>{
    var token = jwt.sign({id:2},"QW12ER34TY56UI78IO90",{expiresIn:'1d'});
    return res.json({
        TOKEN: token
    });
});


server.listen(3000,()=>{
    console.log("Server na porta 3000: http://localhost:3000")
});