const express = require('express');
const server = express();
const User = require('./assets/models/User');

server.use(express.json());




server.get("/", async (req,res)=>{
   
   return res.send('123456789');
});

server.post("/register", async (req,res)=>{
    console.log(req.body);
    await User.create(req.body).then(()=>{
        return res.json({
            err:false,
            message:"Cadastro comcluido."
        });
    }).catch(()=>{
        return res.status(400).json({
            err:true,
            message:"Erro ao se cadastrar."
        });
    });
    
})



server.listen(3000,()=>{
    console.log("Server na porta 3000: http://localhost:3000")
});