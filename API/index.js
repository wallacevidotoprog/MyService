const express = require('express');
const server = express();
const User = require('./assets/models/User');
const  crypto = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { eAdmin } = require('./middlewares/auth')

server.use(express.json());


server.post("/teste", async (req,res)=>{
   
   const tt = await User.Register(req,res);
   return tt;
});

server.get("/",eAdmin, async (req,res)=>{
   const total = await User.User.findAll({
    attributes:['ID','name','email']
   }).then((users)=>{
    return res.json({
        err:false,
        DATA: users, 
        idUserLogado: req.userIdTK
       });
   }).catch((err)=>{
    return res.status(400).json({
        err:false,
        messge: err
       });
   });
   
});

server.post("/register", async (req,res)=>{return  await User.Register(req,res);})
server.post("/update/user",eAdmin, async (req,res)=>{
return await User.Update(req,res);
});

server.post("/login", async(req,res)=>{
    //const token = jwt.sign({id:req.body.ID},"QW12ER34TY56UI78IO90",{expiresIn:'1d'});
    console.log(req.body.ID);
    const user = await User.User.findOne({
        attributes:['ID','name','email','pass'],
        where:{
            email: req.body.email
        }
    });

    if(user ===null){
        return res.status(400).json({
            err: true,
            message: "Algo de errado ao digitar seu email ou senha."
        });
    }
    else{       
        if((await crypto.compare(req.body.pass,user.pass))){
            const token = jwt.sign({id:user.ID},"QW12ER34TY56UI78IO90",{expiresIn:'1d'});
            return res.status(200).json({
                err: false,
                message: "logado con sucesso",
                Token: token
            });        
        }
        else{
            return res.status(401).json({
                err: true,
                message: "Algo de errado ao digitar seu email ou senha."
            });
        }
    }

    // return res.json({
    //     TOKEN: token
    // });
});


server.listen(3000,()=>{
    console.log("Server na porta 3000: http://localhost:3000")
});