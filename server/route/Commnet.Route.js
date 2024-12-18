const express = require("express");
const router = express.Router();
const CommentController = require("../controller/Comment.Controller.js");
const auth = require("../middleware/Auth.Middleware.js");

router.post("/addComment",auth,CommentController.addComment);
router.get("/getComment/:videoId",CommentController.getCommentsByVideo);
router.put("/editComment/:commentId",auth,CommentController.editComment);
router.delete("/deleteComment/:commentId",auth,CommentController.deleteComment);

module.exports = router;