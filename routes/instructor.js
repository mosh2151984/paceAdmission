const express = require('express');
const router = express.Router();


router.post('/register',(req,res,next) =>{
  res.send('instructor REGISTER');
});

router.post('/profile',(req,res,next) =>{
  res.send('instructor profile');
});
router.get('/outh',(req,res,next) =>{
  res.send('instructor outh');
});
module.exports = router;
