import React from 'react';
import "./login.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";
const Login = ({onPopup}) => {
  return (
    <div className="loginBox">
      <div className="loginCard">
        <div className="titleCard_login">
          <YouTubeIcon sx={{fontSize:"54px"}} className="login_youtubeImage"/>
          Login
        </div>
        <input placeholder="Username" type="text" className="uploadFormInputLogin" />
        <input placeholder="Password" type="text" className="uploadFormInputLogin" />
        <div className="uploadBtns">
              <div style={{minWidth:"50px"}} className="uploadBtn-form uploadThumbnail">Login</div>
              <Link onClick={()=>(onPopup("Cancel"))} style={{textDecoration:"none",minWidth:"50px"}} to="/signup" className="uploadBtn-form uploadThumbnail">SignUp</Link>
              <div onClick={()=>(onPopup("Cancel"))} style={{minWidth:"50px"}} className="uploadBtn-form uploadThumbnail">Cancel</div>
          </div>
      </div>
    </div>
  )
}

export default Login