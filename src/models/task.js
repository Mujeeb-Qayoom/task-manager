const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Tasks',{
    discription :{
        type : String,
        trim :true,
        required : true

    },
      completed :{
        type :Boolean,
        optional : true,
        default : false
      }
    })


   module.exports = Task;