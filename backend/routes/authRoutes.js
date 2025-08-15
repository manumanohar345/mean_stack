const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');
const { getProfile } = require('../controllers/userController');
const auth = require('../middlewares/auth'); // Ensure this path is correct




router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/profile', auth, getProfile);

module.exports = router;
