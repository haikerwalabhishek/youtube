import React, { useState, useEffect, useRef } from "react";
import "./video.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { data, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const Video = ({ setLogin }) => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const [dataSingleVideo, setDataSingleVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [fetched, setFetched] = useState(false);
  // const [toggle,setToggle] = useState(false);
  const [toggleCommentId, setToggle] = useState(null);
  const menuRef = useRef(null);
  const [editCommentId, setEditCommentId] = useState(null);
  const [editedMessage, setEditedMessage] = useState("");
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [likes, setLikes] = useState(null);
  const [dislikes, setDislikes] = useState(null);

  const handleEdit = async (commentId, newMessage) => {
    console.log(commentId, "cmntId");
    console.log(newMessage, "msg");
    try {
      await axios.put(
        `http://localhost:4000/messages/editComment/${commentId}`,
        { message: newMessage },
        { withCredentials: true }
      );
      // Update the UI locally after success
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === commentId
            ? { ...comment, message: newMessage }
            : comment
        )
      );
      setEditCommentId(null);
    } catch (err) {
      console.error("Error editing comment:", err);
    }
  };

  const handleDelete = async (commentId) => {
    console.log(commentId, "cmntId");

    try {
      const videoOwnerId = localStorage.getItem("user"); // Get the video owner ID from localStorage

      // Use 'data' to send body in a DELETE request
      await axios.delete(
        `http://localhost:4000/messages/deleteComment/${commentId}`,
        {
          data: { videoOwnerId }, // This is the key to send data in a DELETE request
          withCredentials: true,
        }
      );

      // Remove the deleted comment from the UI
      setComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );

      console.log("Comment deleted successfully");
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  // const handleLike = async () => {
  //   try {
  //     const res = await axios.put(
  //       `http://localhost:4000/watch/video/likes/${id}`,
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { like, dislike } = res.data;

  //     // Update state
  //     setLikes(like);
  //     setDislikes(dislike);

  //     // Toggle UI state
  //     setThumbsUp((prev) => !prev);
  //     if (thumbsDown) setThumbsDown(false); // Reset dislike state if active
  //   } catch (err) {
  //     console.error("Error toggling like:", err);
  //   }
  // };

  // const handleDislike = async () => {
  //   try {
  //     const res = await axios.put(
  //       `http://localhost:4000/watch/video/dislikes/${id}`,
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { like, dislike } = res.data;

  //     // Update state
  //     setLikes(like);
  //     setDislikes(dislike);

  //     // Toggle UI state
  //     setThumbsDown((prev) => !prev);
  //     if (thumbsUp) setThumbsUp(false); // Reset like state if active
  //   } catch (err) {
  //     console.error("Error toggling dislike:", err);
  //   }
  // };

  const handleReaction = async (reactionType) => {
    try {
      const endpoint =
        reactionType === "like"
          ? `http://localhost:4000/watch/video/likes/${id}`
          : `http://localhost:4000/watch/video/dislikes/${id}`;
      const res = await axios.put(endpoint, {}, { withCredentials: true });
      const { like, dislike } = res.data;

      setLikes(like);
      setDislikes(dislike);
      if (reactionType === "like") {
        setThumbsUp((prev) => !prev);
        if (thumbsDown) setThumbsDown(false);
      } else {
        setThumbsDown((prev) => !prev);
        if (thumbsUp) setThumbsUp(false);
      }
    } catch (err) {
      console.error(`Error toggling ${reactionType}:`, err);
    }
  };

  const fetchVideoById = async () => {
    await axios
      .get(`http://localhost:4000/watch/video/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setDataSingleVideo(res?.data?.video);
        setVideoUrl(res.data?.video?.videoLink);
        console.log(res.data?.video?.videoLink, "oye hoye");
        setLikes(res?.data?.video?.like);
        setDislikes(res?.data?.video?.dislike);
        setThumbsUp(res?.data?.userState?.liked);
        setThumbsDown(res?.data?.userState?.disliked);
        setFetched(true);
      })
      .catch((err) => console.log(err));
  };
  

  const getVideosByVideoType = async () => {
    if (dataSingleVideo?.videoType) {
      await axios
        .get(`http://localhost:4000/watch/videos/${dataSingleVideo?.videoType}`)
        .then((res) => {
          console.log("myname is:  ", res);
          // setDataSingleVideo(res?.data?.video)
          // setVideoUrl(res.data?.video?.videoLink)
          setSuggested(res.data?.videos);
        })
        .catch((err) => console.log(err));
    }
  };

  const getCommentByVideoId = async () => {
    await axios
      .get(`http://localhost:4000/messages/getComment/${id}`)
      .then((res) => {
        console.log(res);
        setComments(res?.data?.comments || []);
      })
      .catch((err) => console.log(err));
  };

  const postComment = async () => {
    const body = {
      message: message,
      video: id,
    };

    // Check if the user is logged in
    if (localStorage.getItem("user")) {
      try {
        // Send the comment to the server
        await axios.post(`http://localhost:4000/messages/addComment/`, body, {
          withCredentials: true,
        });
        console.log("Comment posted successfully");

        // Clear the message input after posting
        setMessage("");

        // Fetch updated comments after posting the new one
        getCommentByVideoId();
      } catch (err) {
        console.log("Error posting comment:", err);
      }
    } else {
      // If the user is not logged in, prompt them to log in
      setLogin(true);
    }
  };

  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId();
  }, [id]);

  useEffect(() => {
    if (dataSingleVideo?.videoType) {
      getVideosByVideoType();
    }
  }, [dataSingleVideo?.videoType]);

  // useEffect(() => {
  //   fetchVideoById();
  //   getCommentByVideoId();
  //   getVideosByVideoType();
  //   const handleOutsideClick = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setToggle(null); // Clear the toggle to hide the menu
  //     }
  //   };

  //   console.log("Video ID changed:", id);

  //   // Add event listener
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     // Cleanup event listener on unmount
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [fetched, id]);

  return (
    <div className="video">
      <div className="videoPostSection">
        <div className="video_youtube">
          {dataSingleVideo && (
            <video
              width="100%"
              key={videoUrl}
              height="100%"
              style={{ borderRadius: "10px" }}
              controls
              autoPlay
              className="video_youtube_video">
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              Your Browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="video_youtubeAbout">
          <div className="thisVideoTitle">{dataSingleVideo?.title}</div>
          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">
              <Link
                to={`/user/${data?.user?._id}`}
                style={{ textDecoration: "none" }}
                className="youtube_video_ProfileBlock_left_img">
                <img
                  className="youtube_video_ProfileBlock_left_image"
                  src={dataSingleVideo?.user?.profilePic}
                />
              </Link>
              <div className="youtubeVideo_subView">
                <Link
                  to={`/user/${dataSingleVideo?.user?._id}`}
                  style={{ textDecoration: "none" }}
                  className="youtubePostProfileName">
                  {dataSingleVideo?.user?.channelName}
                </Link>
                <div className="youtubePostProfileSubs">
                  {dataSingleVideo?.user?.subs}
                </div>
              </div>
              <div className="subscribeYoutube">Subscribe</div>
            </div>

            <div className="youtube_video_likeBlock">
              <div className="youtube_video_likeBlock_Like">
                {thumbsUp ? (
                  <ThumbUpAltIcon onClick={() => handleReaction("like")} />
                ) : (
                  <ThumbUpOffAltIcon
                    onClick={() => handleReaction("like")}
                  />
                )}
              </div>
              <div className="youtube_video_likeBlock_NoOfLikes">
                {likes}
              </div>
              <div className="youtubeVideoDivider"></div>
              <div className="youtube_video_likeBlock_Like">
                {thumbsDown ? (
                  <ThumbDownAltIcon onClick={() => handleReaction("dislike")} />
                ) : (
                  <ThumbDownOffAltIcon
                    onClick={() => handleReaction("dislike")}
                  />
                )}
              </div>
              <div className="youtube_video_likeBlock_NoOfLikes">
                {dislikes}
              </div>
            </div>
          </div>

          <div className="youtube_video_About">
            <div>{dataSingleVideo?.createdAt.split("T")[0]}</div>
            <div>{dataSingleVideo?.description}</div>
          </div>
          <div className="youtubeCommentSection">
            <div className="youtubeCommentSectionTitle">
              {comments?.length > 1
                ? `${comments?.length} comments`
                : `${comments?.length} comment`}
            </div>

            <div className="youtubeSelfComment">
              <img
                className="video_youtubeSelfCommentProfile"
                src={dataSingleVideo?.user?.profilePic}
                alt="profile picture"
              />
              <div className="addComment">
                <input
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="text"
                  className="addCommentInput"
                  placeholder="Add a comment"
                />
                <div className="cancelSubmitComment">
                  <div className="cancelCommentBtn">Cancel</div>
                  <div
                    onClick={() => {
                      postComment();
                    }}
                    className="cancelComment">
                    Comment
                  </div>
                </div>
              </div>
            </div>

            <div className="youtubeOthersComments">
              {comments?.map((obj) => (
                <div className="youtubeSelfComment" key={obj._id}>
                  <img
                    className="video_youtubeSelfCommentProfile"
                    src={obj?.user?.profilePic}
                    alt="profile picture"
                  />
                  <div className="othersCommentSections">
                    <div className="others_commentSectionHeaderBox">
                      <div className="others_commentSectionHeader">
                        <div className="channelName_comment">
                          {obj?.user?.channelName}
                        </div>
                        <div className="commentTimingOthers">
                          {obj?.createdAt.split("T")[0]}
                        </div>
                      </div>
                      <MoreVertIcon
                        onClick={() =>
                          setToggle(
                            toggleCommentId === obj._id ? null : obj._id
                          )
                        }
                        style={{ cursor: "pointer" }}
                      />
                      {toggleCommentId === obj._id && (
                        <div
                          ref={menuRef} // Attach ref to the menu
                          className="others_commentSectionHeaderB">
                          <button
                            onClick={() => {
                              setEditCommentId(obj._id); // Enable edit mode
                              setEditedMessage(obj.message); // Pre-fill input
                            }}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                            className="ButtonControl">
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(obj._id)}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                            className="ButtonControl">
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="otherCommentSectionComment">
                      {editCommentId === obj._id ? (
                        <div className="otherCommentSectionComment">
                          {" "}
                          <input
                            style={{ color: "black", paddingLeft: "10px" }}
                            type="text"
                            value={editedMessage}
                            onChange={(e) => setEditedMessage(e.target.value)}
                            //   onBlur={() => setEditCommentId(null)} // Exit edit mode when input loses focus
                          />
                          <button
                            className="ButtonControl"
                            style={{ color: "black" }}
                            onClick={() => {
                              handleEdit(editCommentId, editedMessage);
                            }}>
                            submit
                          </button>
                        </div>
                      ) : (
                        obj.message
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        {suggested
          ?.filter((vdo) => vdo._id !== id)
          .map((obj, idx) => (
            <Link
              key={obj._id}
              to={`/watch/${obj._id}`}
              style={{ textDecoration: "none" }}
              className="videoSuggestionBlock">
              <div className="videoSuggestionThumbnail">
                <img
                  src={obj.thumbnail}
                  alt="thumbnail"
                  className="video_suggestion_thumbnail_img"
                />
              </div>

              <div className="video_suggestions_About">
                <div className="video_suggestions_About_title">
                  {obj.description?.length > 20
                    ? obj.description.slice(0, 20) + "..."
                    : obj.description}
                </div>
                <div className="video_suggestions_About_profile">
                  {obj.user.channelName}
                </div>
                <div className="video_suggestions_About_profile">
                  {obj.user.createdAt.split("T")[0]}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Video;
