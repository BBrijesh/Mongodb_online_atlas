var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
});

var usermodel = mongoose.model("table1",userschema);
module.exports = usermodel;