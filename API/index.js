const express = require('express');
const server = express();
const User = require('./assets/models/UserController');
const { eAdmin } = require('./middlewares/auth')
const upImg= require('./middlewares/updateIMG')

server.use(express.json());


server.get("/",eAdmin, User.TesteAll);

server.post("/register",User.RegisterUser);

server.post("/update/user",eAdmin, User.UpdateUser);

server.post("/update/avatar",eAdmin, upImg.single('image'), User.UpdateAvatarUser);

server.post("/login", User.LoginUser);


server.listen(3000,()=>{
    console.log("Server na porta 3000: http://localhost:3000")
});