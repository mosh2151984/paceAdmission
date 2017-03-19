const express = require('express');
const router = express.Router();


router.post('/register',(req,res,next) =>{
  res.send('student REGISTER');
});

router.post('/profile',(req,res,next) =>{
  res.send('student profile');
});
router.get('/outh',(req,res,next) =>{
  res.send('student outh');
});

module.exports = router;
