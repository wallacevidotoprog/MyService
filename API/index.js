const DB = require('./assets/models/app');
const express = require('express');
const server = express();

server.get("/", async (req,res)=>{
    DB.Sequelize;
   return res.send("OI JOVEM");
});




server.listen(3000,()=>{
    console.log("Server na porta 3000: http://localhost:3000")
});