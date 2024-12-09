import React from 'react'
import "./video.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {Link} from "react-router-dom";

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Video = ({userPic,toggleSidebar,setToggleSidebar}) => {

  return (
    <div className='video'>
        <div className="videoPostSection">
            <div className="video_youtube">
                <video width="100%" height="409px" style={{borderRadius:"10px"}} controls autoPlay className='video_youtube_video'>
                    <source src={"/videos/arptibala.mp4"} type="video/mp4"/>
                    <source src={"/videos/arptibala.mp4"} type="video/webm"/>
                    Your Browser does not support the video tag.
                </video>
            </div>
            
            <div className="video_youtubeAbout">
                <div className="thisVideoTitle">
                    {"Arpit Bala Meme"}
                </div>
                <div className="youtube_video_ProfileBlock">
                    <div className="youtube_video_ProfileBlock_left">
                        <Link to={`/user/id`} style={{textDecoration:"none"}} className="youtube_video_ProfileBlock_left_img">
                            <img className="youtube_video_ProfileBlock_left_image" src="https://yt3.ggpht.com/ukwasFtDX1b4_Qo7r2z2hsdUL4CFm6ewAmtw41SFbkY98fEeDEaomuzVQ9Lk7PBeSWqnjeAGOQ=s68-c-k-c0x00ffffff-no-rj" alt="profile picture"  />
                        </Link>
                        <div className="youtubeVideo_subView">
                            <Link to={`/user/id`} style={{textDecoration:"none"}} className="youtubePostProfileName">
                                {"User Name"}
                            </Link>
                            <div className="youtubePostProfileSubs">
                                {"10k"}
                            </div>
                        </div>
                        <div className="subscribeYoutube">Subscribe</div>
                    </div>

                    <div className="youtube_video_likeBlock">
                        <div className="youtube_video_likeBlock_Like">
                            <ThumbUpOffAltIcon/> 
                        </div>
                        <div className="youtube_video_likeBlock_NoOfLikes">{32}</div>
                        <div className="youtubeVideoDivider"></div>
                        <div className="youtube_video_likeBlock_Like">
                            <ThumbDownOffAltIcon/> 
                        </div>
                    </div>
                </div>

                <div className="youtube_video_About">
                    <div>2024-09-30</div>
                    <div>this is demo description</div>
                </div>
                <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">2 comments</div>

                    <div className="youtubeSelfComment">
                        <img className="video_youtubeSelfCommentProfile" src="https://yt3.ggpht.com/ukwasFtDX1b4_Qo7r2z2hsdUL4CFm6ewAmtw41SFbkY98fEeDEaomuzVQ9Lk7PBeSWqnjeAGOQ=s68-c-k-c0x00ffffff-no-rj" alt="profile picture" />
                        <div className="addComment">
                            <input type="text" className="addCommentInput" placeholder = "Add a comment"/>
                            <div className="cancelSubmitComment">
                                <div className="cancelCommentBtn">Cancel</div>
                                <div className="cancelComment">Comment</div>
                            </div>
                        </div>
                    </div>

                    <div className="youtubeOthersComments">
                        {Array(6).fill(null).map((_,idx)=>{return(
                            <div className="youtubeSelfComment">
                                <img className="video_youtubeSelfCommentProfile" src="https://yt3.ggpht.com/ukwasFtDX1b4_Qo7r2z2hsdUL4CFm6ewAmtw41SFbkY98fEeDEaomuzVQ9Lk7PBeSWqnjeAGOQ=s68-c-k-c0x00ffffff-no-rj" alt="profile picture" />
                                <div className="othersCommentSections">
                                    <div className="others_commentSectionHeaderBox">
                                        <div className="others_commentSectionHeader">
                                            <div className="channelName_comment">Username</div>
                                            <div className="commentTimingOthers">2024-09-30</div>
                                        </div>
                                        <MoreVertIcon style={{cursor:"pointer"}}/>
                                    </div>
                                    <div className="otherCommentSectionComment">
                                        wow nice
                                    </div>
                                </div>
                        </div>
                        )})}
                    </div>
                </div>


            </div>
        </div>

        <div className="videoSuggestions">
           { Array(20).fill(null).map((_,idx)=>(
                <Link key={idx+100} to={`/watch/${idx+100}`} style={{textDecoration:"none"}} className="videoSuggestionBlock">
                <div className="videoSuggestionThumbnail">
                    <img src="/youtube.jpg" alt="thumbnail" className="video_suggestion_thumbnail_img" />
                </div>

                <div className="video_suggestions_About">
                    <div className="video_suggestions_About_title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam libero
                    </div>
                    <div className="video_suggestions_About_profile">Cricket 320</div>
                    <div className="video_suggestions_About_profile">130K views - 1 day ago</div>
                </div>
                
            </Link>
            ))}
        </div>
    </div>
  )
}

export default Video