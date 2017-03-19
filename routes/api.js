const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



//Routes
const instructor = require('./instructor.js');
const student = require('./student.js');
const error404 = require('./error404.js');
router.use('/instructor',instructor);
router.use('/student',student);
router.use('**',error404);

module.exports = router;
