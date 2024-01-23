const jwt =require('jsonwebtoken');
const {promisify} = require('util');

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
        console.log("TOKEN:"+token);

        if(!token){
            return res.status(400).json({
                err: true,
                message: "Você não está logado."
            });
        }

        try{
            const decod = await promisify(jwt.verify)(token,"QW12ER34TY56UI78IO90");
            console.log(decod.id);
            req.userId = decod.id;
            return next();
            
        }catch(err){
            return res.status(400).json({
                err: true,
                message: "Você não está logado. "
            });
        }
    }
}