const express = require('express');
require('../config/passport');

const router = express.Router();

const authRouter = require('./auth');

router.get('/', (req, res) => {
  res.json({
    message: 'This is API interface'
  });
});

router.use('/auth', authRouter);

module.exports = router;