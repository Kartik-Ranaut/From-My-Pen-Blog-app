const mongoose = require("mongoose");

module.exports = ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/Blog",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then(()=>{console.log("server connected")})
        .catch((err)=>{console.log("error occures")});
    }
    catch(err){
        console.log("cannot connect to database");
        console.error(err.message);
        //iska matlab kya h ?
        process.exit(1);
    }
}