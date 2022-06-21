const { Router } = require('express');
const { usersController } = require('../controllers/users.controller');
const router = Router();

router.post('/users', usersController.postUser);
router.get('/users', usersController.getUser);
router.patch('/users/:id/saved', usersController.addSaved)
router.delete('/users/:id', usersController.deleteUser)

module.exports = router;