const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('./auth/auth-router')
const plantsRouter = require('./plants/plants-router')
const restricted = require('./restricted')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/plants', plantsRouter)

server.get('/testing', (req, res) => {
    res.json({message: 'testing message'})
})

server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server;