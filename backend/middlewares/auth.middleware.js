const jwt =require("jsonwebtoken");
const { BlacklistModel } = require("../models/blacklist.model");
const { UserModel } = require("../models/user.model");
require("dotenv").config()



const auth=async (req,res,next)=>{
    const token=req.cookies.accessToken;
    if(token){

        try {

           const isBlacklisted= await BlacklistModel.findOne({token});
           if(isBlacklisted){
            return res.status(401).send(`Token is blacklisted`)
           }

           let  decodedToken = jwt.verify(token, process.env.AccessToken);

           if(decodedToken){
            req.body.authorID=decodedToken.authorID;
            req.body.authorRole=decodedToken.authorRole
                next()
           }else{
            refreshcb(req,res,next)
           }

        } catch (error) {
            refreshcb(req,res,next)
        }

    }else{
        refreshcb(req,res,next)
        console.log('error==>',error.message);
            if (error.name === 'TokenExpiredError') {
                return res.status(401).send('Access token expired');
              }
            return res.status(401).json({ "msg": `${error.message}` });
    }
}



const refreshcb=async(req,res,next)=>{
    const refreshToken = req.cookies.rerefreshToken;
    try {
        let  decodedToken=jwt.verify(refreshToken, process.env.RerefreshToken);
        const {authorID}=decodedToken;
        const user = await UserModel.findOne({_id:authorID});
        if (!user) return res.status(401).send('Unauthorized');
        const token=jwt.sign({authorID:decodedToken.authorID,authorRole:decodedToken.authorRole},process.env.AccessToken,{expiresIn:30})
        res.cookie("accessToken",token)
        next()
    } catch (error) {
        console.log(error)
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send(error);
          }
        return res.status(401).json({ "msg": `${error.message}` });
    }
}



module.exports={auth}


