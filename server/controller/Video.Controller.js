const Video = require("../model/Video.Model.js");

exports.UploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, thumbnail, videoType } = req.body;
    const videoUpload = new Video({
      user: req.user._id,
      title,
      description,
      videoLink,
      thumbnail,
      videoType,
    });
    await videoUpload.save();

    res.status(201).json({
      success: true,
      videoUpload,
      status: 201,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      status: 500,
    });
  }
};

exports.getVideos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;

    const totalVideos = await Video.countDocuments();

    const videos = await Video.find()
      .populate("user", "channelName username profilePic createdAt about")
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      success: true,
      videos,
      totalVideos,
      totalPages: Math.ceil(totalVideos / limit),
      currentPage: page,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      status: 500,
    });
  }
};

exports.getVideo = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user ? req.user: null; // Check if user is logged in
    console.log(userId);
    const video = await Video.findById(id).populate(
      "user",
      "channelName username profilePic createdAt about"
    );

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
        status: 404,
      });
    }

    let userState = { liked: false, disliked: false }; // Default to false if no user is logged in
    if (userId) {
      // Check if the user has liked or disliked the video
      const hasLiked = video.likedBy.includes(userId);
      const hasDisliked = video.dislikedBy.includes(userId);

      userState = {
        liked: hasLiked,
        disliked: hasDisliked,
      };
    }

    res.status(200).json({
      success: true,
      video,
      userState,
      status: 200,
    });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({
      error: error.message,
      success: false,
      status: 500,
    });
  }
};

exports.getVideosOfUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;

    const totalVideos = await Video.countDocuments({ user: userId });

    const videos = await Video.find({ user: userId })
      .populate("user", "channelName username profilePic createdAt about")
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      success: true,
      videos,
      totalVideos,
      totalPages: Math.ceil(totalVideos / limit),
      currentPage: page,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      status: 500,
    });
  }
};

exports.getVideosByVideoType = async (req, res) => {
  try {
    const { videoType } = req.query; // Get videoType from query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    
    const totalVideos = await Video.countDocuments({ videoType });
    const videos = await Video.find({ videoType })
      .populate("user", "channelName username profilePic createdAt about")
      .skip(startIndex)
      .limit(limit);

    return res.status(200).json({
      success: true,
      videos,
      totalVideos,
      totalPages: Math.ceil(totalVideos / limit),
      currentPage: page,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      status: 500,
    });
  }
};


exports.toggleLike = async (req, res) => {
  try {
    const { id } = req.params; // Video ID
    const userId = req.user; // Assuming user ID is available in req.user (middleware)
    if(!userId){
     return 
    }

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    const hasLiked = video.likedBy.includes(userId);
    const hasDisliked = video.dislikedBy.includes(userId);

    if (hasLiked) {
      // Remove the like
      video.like -= 1;
      video.likedBy.pull(userId);
    } else {
      // Add like
      video.like += 1;
      video.likedBy.push(userId);

      // Remove dislike if previously disliked
      if (hasDisliked) {
        video.dislike -= 1;
        video.dislikedBy.pull(userId);
      }
    }

    await video.save();

    res.status(200).json({
      success: true,
      like: video.like,
      dislike: video.dislike,
      likedBy: video.likedBy,
      dislikedBy: video.dislikedBy,
    });
  } catch (error) {
    console.error("Error toggling like:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.toggleDislike = async (req, res) => {
  try {
    const { id } = req.params; // Video ID
    const userId = req.user; // Assuming user ID is available in req.user (middleware)
    if(!userId){
      return 
     }

    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    const hasLiked = video.likedBy.includes(userId);
    const hasDisliked = video.dislikedBy.includes(userId);

    if (hasDisliked) {
      // Remove the dislike
      video.dislike -= 1;
      video.dislikedBy.pull(userId);
    } else {
      // Add dislike
      video.dislike += 1;
      video.dislikedBy.push(userId);

      // Remove like if previously liked
      if (hasLiked) {
        video.like -= 1;
        video.likedBy.pull(userId);
      }
    }

    await video.save();

    res.status(200).json({
      success: true,
      like: video.like,
      dislike: video.dislike,
      likedBy: video.likedBy,
      dislikedBy: video.dislikedBy,
    });
  } catch (error) {
    console.error("Error toggling dislike:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.getVideosByVideoType = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const videoType = req.query.videoType; // Get video type from query parameter

    const startIndex = (page - 1) * limit;

    const filter = videoType ? { videoType } : {}; // Only filter by videoType if provided

    const totalVideos = await Video.countDocuments(filter); // Apply filter in count

    const videos = await Video.find(filter) // Apply filter in find
      .populate("user", "channelName username profilePic createdAt about")
      .skip(startIndex)
      .limit(limit);

    res.status(200).json({
      success: true,
      videos,
      totalVideos,
      totalPages: Math.ceil(totalVideos / limit),
      currentPage: page,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      status: 500,
    });
  }
};

exports.getVideosBySearchTerm = async (req, res) => {
  try {
    const { searchTerm } = req.params;
    console.log("Search Term:", searchTerm); // Debugging log

    if (!searchTerm || searchTerm.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Search term cannot be empty",
      });
    }

    let search = searchTerm.trim().toLowerCase();

    const videos = await Video.find({
      title: { $regex: search, $options: "i" }
    })
      .populate("user", "channelName username profilePic createdAt about")
      .lean();

    return res.status(200).json({
      success: true,
      videos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};





