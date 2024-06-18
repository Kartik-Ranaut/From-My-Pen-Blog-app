const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    
    content:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    },
    img:{
        type:String,
        required:true
    },
    nature:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Post",postSchema);