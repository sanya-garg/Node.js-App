const auth = require('../models/auth');
const { v4: uuidv4 } = require('uuid');
const { setUser, getUser } = require('../services/auth');
async function handleSignUp(req, res) {
    const body = req.body;
    await auth.create({
        name: body.name,
        email: body.email,
        password: body.password
    });

    return res.status(201).json({ message: 'User created' });
}

async function handleLogin(req, res) {
    const { email, password } = req.body;
    const user = await auth.findOne({
        email, password
    });
    if (!user) {
        return res.status(201).json({ message: 'invalid user' });
    }

    const sessionid = uuidv4(); //for session Id - stateful
   // setUser(sessionid, user);
    const token = setUser(sessionid,user);
    //res.cookie('uid',sessionid); // for session Id - stateful
    res.cookie('uid',token); //stateless
    return res.status(201).json({ message: 'authenticated user' });

}

module.exports = {
    handleSignUp,
    handleLogin
}