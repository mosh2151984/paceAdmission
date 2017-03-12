const express = require('express');
const router = express.Router();


router.get( '/register' , (req, res, next) =>{
  let ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];


  console.log(ip);
  res.send(ip);
});

module.exports = router;
