const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require("../../secrets");
const jwt = require('jsonwebtoken')
const User = require('../users/users-model')
const { checkUsernameExists } = require('./auth-middleware')

router.post(
    '/register',   
    checkUsernameExists, (req, res, next) => {
        let user = req.body
        const hash = bcrypt.hashSync(user.password, 8)
        user.password = hash
        User.add(user)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
    
})

router.post('/login', (req, res, next) => {
    // user can login to an authenticated session using the credentials provided at account creation / signup.
    let { username, password } = req.body

  User.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = buildToken(user)
        res.status(200).json({ message: `welcome ${user.username}`, token })
      } else {
        next({ status: 401, message: 'invalid Credentials' })
      }
    })
    .catch(next)
})

function buildToken(user) {
    const payload = {
        username: user.username,
        password: user.password,
    }
    const options = {
        expiresIn: '2d',
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

// endpoints for testing
router.get('/login', (req, res, next) => {
    res.json({message: 'login endpoint successful call'})
})
router.get('/register', (req, res, next) => {
    res.json({message: 'register endpoint successful call'})
})

module.exports = router