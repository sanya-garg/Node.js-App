const express = require('express');

const router = express.Router();

const { getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser } = require('../controllers/user');

router.get('/', getAllUsers);

router.route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

router.post('/', createUser);

module.exports = router;
