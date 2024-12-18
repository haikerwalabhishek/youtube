const express = require("express");
const router = express.Router();
const UserController = require("../controller/User.Controller.js");

router.post("/signUp", UserController.SignUp)
router.post("/logIn", UserController.SignIn)
router.post("/logOut", UserController.LogOut)


module.exports = router;