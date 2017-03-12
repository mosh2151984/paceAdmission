const express = require('express');
const router = express.Router();


router.get('**',(req,res,next) =>{
  res.send('ERROR PAGE NOT FOUND');
});

module.exports = router;
