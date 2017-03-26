const mongoose = require('mongoose');
const Schema = require('mongoose.Schema');



let registerUserSchema = new Schema({
      fristName:{
        type:string
      },
      lastName:{
        type:string
      },
      userName:{
        type:string,
        required:true,
        uniq
      },
      passW:{
        type:string,
        required:true
      }
    }
);

module.exports = mongoose.module('register',registerUserSchema);
