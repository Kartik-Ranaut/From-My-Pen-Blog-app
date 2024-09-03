const Post = require("../models/postModel");

exports.getPosts = async(req,res)=>{
    try{
        const response = await Post.find({});
        res.status(200)
            .json({
                success:true,
                data:response,
                message:"Entire Data is fetched",
            });
        
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}