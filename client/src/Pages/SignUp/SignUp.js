import React, {useState} from 'react'
import "./signup.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";

const SignUp = () => {

    const [signUpFeild,setSignUpFeild] = useState({"channelName":"","userName":"","Password":"","about":"",profilePic:""});
    const [uploadedImageUrl, setUploadedImageUrl] = useState("")

    const handleOnChange =(event,name)=>{
        setSignUpFeild({
        ...signUpFeild,[name]:event.target.value
      })
    };

  return (
    <div className="signUp">
        <div className="signup_card">
            <div className="nav_youtubeTitle">
                <YouTubeIcon sx={{fontSize:"54px"}} className="login_uoutubeImage"/>
                SignUp
            </div>

            <div className="singUp_Inputs">
                <input value={signUpFeild.channelName} onChange={(e)=>handleOnChange(e,"channelName")} placeholder="Channel Name" type="text" className="uploadFormInput" />
                <input value={signUpFeild.userName} onChange={(e)=>handleOnChange(e,"userName")} placeholder="Username" type="text" className="uploadFormInput" />
                <input value={signUpFeild.Password} onChange={(e)=>handleOnChange(e,"Password")} placeholder="Password" type="text" className="uploadFormInput" />
                <input value={signUpFeild.about} onChange={(e)=>handleOnChange(e,"about")} placeholder="About Your Channel" type="text" className="uploadFormInput" />
                <div className="uploadThumbnail">
                <label htmlFor="thumbnailUpload" className="thumbnailLabel">
                    <span className='ThumbnailLabelSpan'>Profile Photo</span>
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
                {
                    uploadedImageUrl && 
                    <div className="profile_top_section_profil/e">
                        <img style={{width:"100px", borderRadius:"50%"}} src={uploadedImageUrl} alt=""/>
                    </div>
                }
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