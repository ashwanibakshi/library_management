const express = require('express');

const router  = express.Router();

router.use('/user',require('./userRoutes'));

router.use('/book',require('./bookRoutes'));

module.exports = router;