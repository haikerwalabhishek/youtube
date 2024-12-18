const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            // required:true,
        },
        videoLink:{
            type:String,
            required:true,
        },
        thumbnail:{
            type:String,
            required:true,
        },
        videoType:{
            type:String,
            required:true,
            default:"All",
        },
        like:{
            type:Number,
            default:0,
        },
        dislike:{
            type:Number,
            default:0,
        },
        likedBy: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
          ],
        dislikedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },{timestamps:true}
)

const Video = mongoose.model("Video",VideoSchema);
module.exports = Video;