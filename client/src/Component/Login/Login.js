import React, {useState} from 'react';
import "./login.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";

const Login = ({onPopup}) => {

  const [loginFeild,setLoginFeild] = useState({"userName":"","password":""})

  const handleOnChange =(event,name)=>{
    setLoginFeild({
      ...loginFeild,[name]:event.target.value
    })
  };

  console.log(loginFeild)

  return (
    <div className="loginBox">
      <div className="loginCard">
        <div className="titleCard_login">
          <YouTubeIcon sx={{fontSize:"54px"}} className="login_youtubeImage"/>
          Login
        </div>
        <input value={loginFeild.userName} onChange={(e)=>handleOnChange(e,"userName")} placeholder="Username" type="text" className="uploadFormInputLogin" />
        <input value={loginFeild.password} onChange={(e)=>handleOnChange(e,"password")} placeholder="Password" type="text" className="uploadFormInputLogin" />
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