const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



//Routes
const drivers = require('./drivers.js');
const users = require('./users.js');
const error404 = require('./error404.js');
router.use('/drivers',drivers);
router.use('/users',users);
router.use('**',error404);

module.exports = router;
