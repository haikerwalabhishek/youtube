import './App.css';
import Navbar from './Component/Navbar/Navbar.js';
import Home from "./Pages/Home/Home.js"
import { useState } from 'react';
import {Route, Routes} from "react-router-dom"
import Video from './Pages/Video/Video.js';
import SideNavbar from "./Component/SideNavbar/SideNavbar.js"
import Profile from './Pages/Profile/Profile.js';
import VideoUpload from './Pages/VideoUpload/VideoUpload.js';
import SignUp from './Pages/SignUp/SignUp.js';

function App() {
  const [toggleTheme,setToggleTheme] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(null);
  const [userPic, setUserPic] = useState(true);
  // const [isSignUpPage, setIsSignUpPage] = useState(false)

  
  return (
    <>
      <div className="App">
        <Navbar userPic={userPic} setUserPic={setUserPic}  setToggleSidebar={setToggleSidebar} setToggleTheme={setToggleTheme} toggleTheme={toggleTheme}/>
        <SideNavbar userPic={userPic} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
        <Routes>
          <Route path="/" element={<Home userPic={userPic} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>}/>
          <Route path="/watch/:id"  element={<Video userPic={userPic} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>}/>
          <Route path="/user/:id" element={<Profile/>}/>
          <Route path="/:id/upload" element={<VideoUpload/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
