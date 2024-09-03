const Post = require("../models/postModel");

exports.createPost =async(req,res)=>{
    try {
        const {content ,title,img,nature,date}=req.body;

        const response = await Post.create({title , content, img,nature,date});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.log("error occured in creating");
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        );
    }
}