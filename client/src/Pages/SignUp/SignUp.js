import React from 'react'
import "./signup.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp">
        <div className="signup_card">
            <div className="nav_youtubeTitle">
                <YouTubeIcon sx={{fontSize:"54px"}} className="login_uoutubeImage"/>
                SignUp
            </div>

            <div className="singUp_Inputs">
                <input placeholder="Channel Name" type="text" className="uploadFormInput" />
                <input placeholder="Username" type="text" className="uploadFormInput" />
                <input placeholder="Password" type="text" className="uploadFormInput" />
                <input placeholder="About Your Channel" type="text" className="uploadFormInput" />
                <div className="uploadThumbnail">
                <label htmlFor="thumbnailUpload" className="thumbnailLabel">
                    <span>Profile Photo</span>
                    <div className="uploadButton">
                    Choose File
                    </div>
                </label>
                <input 
                    type="file" 
                    id="thumbnailUpload" 
                    accept="image/*" 
                    className="thumbnailInput" 
                />
                </div>
                <div className="profile_top_section_profil/e">
                    <img style={{width:"100px", borderRadius:"50%"}} src="/photo.png" alt=""/>
                </div>
            </div>


            <div className="uploadBtns">
                <div style={{minWidth:"fit-content"}} className="uploadBtn-form uploadThumbnail">SingUp</div>
                <Link style={{textDecoration:"none", minWidth:"fit-content"}} to="/" className="uploadBtn-form uploadThumbnail">Home</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp