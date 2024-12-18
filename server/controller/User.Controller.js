const User = require("../model/User.Model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const cookieOptions = {
    httpOnly: true, // Prevents JavaScript access to the cookie
    secure: process.env.NODE_ENV === "production", // Enforce HTTPS in production
    sameSite: "Lax", // Prevents most CSRF attacks while allowing basic functionality
    maxAge: 24 * 60 * 60 * 1000, // Cookie expiry time (1 day)
};


exports.SignUp = async (req, res) => {
    try {
        const { channelName, username, password, about, profilePic } = req.body;

        // Validate required fields
        if (!username || !password || !channelName) {
            return res.status(400).json({
                error: "Missing required fields: channelName, username, or password.",
                success: false,
                status: 400,
            });
        }

        // Check if the username already exists
        const isExist = await User.findOne({ username });
        if (isExist) {
            return res.status(400).json({
                error: "Username already exists. Please use a different username.",
                success: false,
                status: 400,
            });
        }

        // Hash the password
        const updatedPassword = await bcrypt.hash(password, 10);

        // Create and save the user
        const user = new User({
            channelName,
            username,
            about,
            profilePic,
            password: updatedPassword,
        });

        await user.save();

        // Send success response
        res.status(201).json({
            message: "User created successfully.",
            success: true,
            status: 201,
        });
    } catch (error) {
        // Handle server errors
        res.status(500).json({
            error: error.message || "An unexpected error occurred.",
            success: false,
            status: 500,
        });
        console.error(error);
    }
};

exports.SignIn = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
            res.cookie("token", token, cookieOptions);
            console.log(res.getHeaders());
            res.status(200).json({
                message: "Logged in successfully.",
                success: true,
                status: 200,
                token,
                user,
            });
        } else {
            res.status(400).json({
                error: "Invalid credentials.",
                success: false,
                status: 400,
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false,
            status: 500,
        });
    }
};

exports.LogOut = async (req,res) =>{
    try {
        res.clearCookie("token",cookieOptions).json({
            message:"Logged out Successfully",
            success:true,
            status:200
        })
    } catch (error) {
        res.status(500).json({
            error:error.message,
            success:false,
            status:500
        })
    }
}
