

const verify=(roles)=>{

    return(req,res,next)=>{
        if(roles.includes(req.body.authorRole)){
           return next()
        }else{
            return res.status(403).send('Forbidden');
        }
    }
   
}

module.exports={verify}