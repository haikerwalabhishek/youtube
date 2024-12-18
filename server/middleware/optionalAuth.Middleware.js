const JWT = require("jsonwebtoken");
const User = require("../model/User.Model.js");
const dotenv = require("dotenv");
dotenv.config();

const optionalAuth = async (req, res, next) => {
  const token = req.cookies?.token; // Optional token check

  if (token) {
    try {
      const decode = JWT.verify(token, process.env.JWT_SECRET);
      req.user = decode.userId;
    } catch (error) {
      console.warn("Invalid token, proceeding as unauthenticated user");
      req.user = null; // Ensure req.user remains null if token is invalid
    }
  } else {
    req.user = null; // No token, user is unauthenticated
  }

  next();
};

module.exports = optionalAuth;
