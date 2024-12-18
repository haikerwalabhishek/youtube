const Comment = require("../model/Comment.Model.js");


exports.addComment = async(req,res)=>{
    try {
        let {video,message} = req.body;
        const comment = new Comment({user:req.user._id,video,message});
        await comment.save();

        res.status(201).json(
            {
                success:true,
                comment,
                status:201
            }
        )
    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false,
            status: 500,
        });
    }
}

exports.getCommentsByVideo = async (req, res) => {
    try {
        const { videoId } = req.params;
        // const { page = 1, limit = 10 } = req.query; // Default values for page and limit

        // Parse the page and limit to integers
        // const pageNumber = parseInt(page, 10);
        // const limitNumber = parseInt(limit, 10);

        // // Calculate the skip value
        // const skip = (pageNumber - 1) * limitNumber;

        // Fetch comments with pagination
        const comments = await Comment.find({ video: videoId }).populate("user","channelName username profilePic createdAt about")
            // .skip(skip)
            // .limit(limitNumber);

        // Count total comments for the given video
        // const totalComments = await Comment.countDocuments({ video: videoId });

        res.status(200).json({
            success: true,
            comments,
            // totalComments,
            // currentPage: pageNumber,
            // totalPages: Math.ceil(totalComments / limitNumber),
            status: 200
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false,
            status: 500,
        });
    }
};

exports.editComment = async(req,res) =>{
    try {
        const {commentId} = req.params;
        const {message} = req.body;
        const comment = await Comment.findById(commentId);

        if(String(comment.user._id) !== String(req.user._id)){
            return res.status(403).json({
                success: false,
                message: "You are not authorized to edit this comment",
                status: 403,
            });
        }

        comment.message = message || comment.message;
        await comment.save();

        res.status(200).json({
            success: true,
            message: "Comment updated successfully",
            comment,
            status: 200,
        });
        
    } catch (error) {
        res.status(500).json({
            error: error.message,
            success: false,
            status: 500,
        });
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { videoOwnerId } = req.body; 
        const userId = req.user._id;

        const comment = await Comment.findById(commentId).populate("video", "user");

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: "Comment not found",
                status: 404,
            });
        }

        if (
            String(comment.user._id) !== userId && // Logged-in user is not the comment author
            String(comment.video.user._id) !== videoOwnerId // Logged-in user is not the video owner
          ) {
            return res.status(403).json({
              success: false,
              message: "You are not authorized to delete this comment. Only the comment author or the video owner can delete it.",
              status: 403,
            });
          }
          

        await Comment.findByIdAndDelete(commentId);

        res.status(200).json({
            success: true,
            message: "Comment deleted successfully",
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
