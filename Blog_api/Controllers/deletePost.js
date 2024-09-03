const Post = require("../models/postModel");

exports.deletePost =async(req,res)=>{
    try {
        const {_id}=req.body;

        const response = await Post.findByIdAndDelete(_id);
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry deleted Successfully'
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