const express = require('express');
const router = express.Router();
const { createUser, recommendDestinations, getUser, deleteUser } = require('../controllers/userController');

router.post('/', createUser);
router.get('/:userId/recommendations', recommendDestinations);
router.get('/', getUser)
router.delete('/:userId', deleteUser)

module.exports = router;
