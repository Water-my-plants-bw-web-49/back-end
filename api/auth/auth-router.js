const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require("../../secrets");
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
    // user can sign-up / create an account by providing a unique username, a valid mobile phoneNumber and a password.
    res.json({message: 'register endpoint successful call'})
})

router.post('/login', (req, res, next) => {
    // user can login to an authenticated session using the credentials provided at account creation / signup.
    res.json({message: 'login endpoint successful call'})
})

// endpoints for testing
router.get('/login', (req, res, next) => {
    res.json({message: 'login endpoint successful call'})
})
router.get('/register', (req, res, next) => {
    res.json({message: 'register endpoint successful call'})
})

module.exports = router