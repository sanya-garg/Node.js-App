const User = require('../models/user');

async function getAllUsers(req, res){
    const dbAllUsers = await User.find({});
    res.setHeader('X-MyName', 'sanya garg'); // Custom header best practice is inintiaze custom header with X
    //return res.status(201).json(users); // Sending status code
    return res.status(201).json(dbAllUsers);
}

async function getUserById(req, res){
     // use to find from static file
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);

    //DB query
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function updateUser(req, res){
    await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed' });
    return res.json({ status: 'Pending' });
}

async function deleteUser(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: 'pending' });
}

async function createUser(req, res){
    const body = req.body;
    console.log(body);
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    // this was to create for mock json - static file
    // users.push({ ...body, id: users.length + 1 });
    // file.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     res.json({ status: 'pending' });
    // })

    //DB query
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender
    });
    console.log(result);
    return res.status(201).json({ message: 'user Created' });
} 
module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser


}