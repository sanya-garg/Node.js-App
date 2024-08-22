const {getUser} = require('../services/auth');

async function retrictloginUser(req, res, next){
    const sessionId = req.cookies?.uid;
    console.log(sessionId);
    if(!sessionId){
        return res.json({message : 'Invalid sessionId'});
    }

    const user = getUser(sessionId,sessionId);
    console.log(user);
    if(!user){
        return res.json({message : 'Invalid user'});
    }

    req.user = user;
    next();
}

module.exports ={
    retrictloginUser
}