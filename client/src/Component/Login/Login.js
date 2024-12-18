import React, {useState} from 'react';
import "./login.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


const Login = ({onPopup,userPic,setUserPic}) => {

  const [loginFeild,setLoginFeild] = useState({"username":"","password":""})
  const [progresss,setProgresss] = useState(false)

  const handleOnChange =(event,name)=>{
    setLoginFeild({
      ...loginFeild,[name]:event.target.value
    })
  };

  const handleLogin =async()=>{
    setProgresss(true)
    axios.post("http://localhost:4000/auth/logIn",loginFeild,{ withCredentials: true }).then((res)=>{
      console.log(res)
      setProgresss(false)
      localStorage.setItem("token",res?.data?.token)
      localStorage.setItem("user",res?.data?.user?._id)
      localStorage.setItem("picture",res?.data?.user?.profilePic)
      // setUserPic((prev)=>true);
      // localStorage.setItem("userLogin",userPic)
      window.location.reload();
      
    }).catch((err)=>{
      setProgresss(false)
      toast.error(err.message,{
        className:"customToast"
      })
      console.log(err)
    })
  }

  console.log(loginFeild)

  return (
    <div className="loginBox">
      <div className="loginCard">
        <div className="titleCard_login">
          <YouTubeIcon sx={{fontSize:"54px"}} className="login_youtubeImage"/>
          Login
        </div>
        <input value={loginFeild.userName} onChange={(e)=>handleOnChange(e,"username")} placeholder="Username" type="text" className="uploadFormInputLogin" />
        <input value={loginFeild.password} onChange={(e)=>handleOnChange(e,"password")} placeholder="Password" type="text" className="uploadFormInputLogin" />
        {progresss && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        <div className="uploadBtns">
              <div style={{minWidth:"50px"}} onClick={()=>{handleLogin()}} className="uploadBtn-form uploadThumbnail">Login</div>
              <Link onClick={()=>(onPopup("Cancel"))} style={{textDecoration:"none",minWidth:"50px"}} to="/signup" className="uploadBtn-form uploadThumbnail">SignUp</Link>
              <div onClick={()=>(onPopup("Cancel"))} style={{minWidth:"50px"}} className="uploadBtn-form uploadThumbnail">Cancel</div>
          </div>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default Login