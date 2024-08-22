const sessionIdTouserMap = new Map();
const jsonToken = require('jsonwebtoken');
const secret = 'sanya$12';

function setUser(id,user){
    const payload={
        id :user.id,
        email :user.email
    };
   return jsonToken.sign(payload, secret);
    //sessionIdTouserMap.set(id, user); // for session Id - stateful
} 

function getUser(id, token){
    if(!token){return null;}
    try {
        return jsonToken.verify(token, secret);
        
    } catch (error) {
        return null;
    }
   // return sessionIdTouserMap.get(id); for session Id - stateful
}

module.exports ={
    setUser,
    getUser
}