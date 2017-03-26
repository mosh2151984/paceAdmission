const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/register',(req,res,next) =>{

});

router.post('/profile',(req,res,next) =>{
  res.send('instructor profile');
});
router.get('/outh',(req,res,next) =>{
  res.send('instructor outh');
});
module.exports = router;
