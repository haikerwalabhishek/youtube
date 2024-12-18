const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/DB.Config.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// import
const AuthRoutes = require("./route/User.Route.js");
const VideoRoutes = require("./route/Video.Route.js");
const CommentRoutes = require("./route/Commnet.Route.js");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors(
    {
        origin:"http://localhost:3000",
        credentials:true,
        methods:"GET,POST,PUT,PATCH,POST,DELETE",
        allowedHeaders:["Content-Type","Authorization"],
    }
));


// use
app.use(express.json());
app.use(cookieParser());
app.use("/auth",AuthRoutes);
app.use("/watch",VideoRoutes);
app.use("/messages",CommentRoutes);



app.listen(PORT,()=>{
    console.log(`server is listining on http://localhost:${PORT}`)
});
