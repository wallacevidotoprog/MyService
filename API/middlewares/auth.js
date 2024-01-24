const jwt =require('jsonwebtoken');
const {promisify} = require('util');
require('dotenv').config();

module.exports = {
    eAdmin: async (req,res,next)=>{
        const auth = req.headers.authorization;
        if(!auth){
            return res.status(400).json({
                err: true,
                message: "Você não está logado."
            });
        }

        const [,token] = auth.split(' ');
        //console.log("TOKEN:"+token);

        if(!token){
            return res.status(400).json({
                err: true,
                message: "Você não está logado."
            });
        }

        try{
            const decod = await promisify(jwt.verify)(token,process.env.KEY_TOKEN);
            //console.log(decod.id);
            req.userIdTK = decod.id;
            req.userEmailTK = decod.email;
            //console.log(decod);
            return next();
            
        }catch(err){
            return res.status(400).json({
                err: true,
                message: "Você não está logado."
            });
        }
    }
}