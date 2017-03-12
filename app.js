const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const passport = require('passport');
const net = require('net');


//port
const port = process.env.PORT || 2505 ;

//inti server
const app = express();
app.enable('trust proxy');

// Get API routes & Set  api routes
const api = require('./routes/api');
app.use('/api', api);


// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//static folder
app.use(express.static(path.join(__dirname,'public')));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//start server
app.listen( port , () =>{
console.log('MOSH Server started on port '+port+" at "+new Date());

});
