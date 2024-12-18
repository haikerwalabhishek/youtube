const express = require("express");
const router = express.Router();
const VideoController = require("../controller/Video.Controller.js");
const auth = require("../middleware/Auth.Middleware.js");
const optionalAuth  = require("../middleware/optionalAuth.Middleware.js");


router.post("/video",auth, VideoController.UploadVideo);
router.get("/videos",VideoController.getVideos);
router.get("/video/:id",optionalAuth, VideoController.getVideo);
router.get("/videos/:videoType",VideoController.getVideosByVideoType);
router.get("/:userId/videos",VideoController.getVideosOfUser);
router.get("/videos/type",VideoController.getVideosByVideoType);
router.put("/video/likes/:id",optionalAuth, VideoController.toggleLike);
router.put("/video/dislikes/:id",optionalAuth, VideoController.toggleDislike);
router.get("/videos/search/:searchTerm",VideoController.getVideosBySearchTerm);

module.exports = router;