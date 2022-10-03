const { Router } = require('express');
const router = Router();
const { getAllUsers, getUserById, createUser, deleteUser, updateUser} = require('./routes.controller.js');

router.get('/users', getAllUsers);
router.get('/users/:cuil', getUserById);
router.post('/users', createUser);
router.delete('/users/:cuil', deleteUser);
router.put('/users/:cuil', updateUser);

module.exports = router;