const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        video:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video",
            required:true,
        },
        message:{
            type:String,
            required:true,
        }
    },{timestamps:true}
)

const Comment = mongoose.model("Comment",CommentSchema);
module.exports = Comment;