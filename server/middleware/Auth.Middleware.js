const JWT = require("jsonwebtoken");
const User = require("../model/User.Model.js");
const dotenv = require("dotenv");
dotenv.config();



const auth = async (req,res,next)=>{
    const token = req.cookies?.token;

    if(!token){
        return res.status(401).json({
            error:"No token, authorization denied",
            status:401,
            success:false
        })
    };

    try {
        const decode = JWT.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decode.userId).select("-password");
        next();
    } catch (error) {
        res.status(500).json(
            {
                message:"Token is not Valid",
                error:error.message,
                success:false,
                status:500
            }
        )
    }
};


module.exports = auth;