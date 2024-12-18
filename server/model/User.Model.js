const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        channelName:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        about:{
            type:String,
            required:true,
        },
        profilePic:{
            type:String,
            required:true,
        },
        subs:{
            type:String,
            default:0,
        }
    },{timestamps:true}
)

const User = mongoose.model("User",UserSchema);
module.exports = User;