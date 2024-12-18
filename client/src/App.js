import './App.css';
import Navbar from './Component/Navbar/Navbar.js';
import Home from "./Pages/Home/Home.js"
import { useState,useEffect } from 'react';
import {Route, Routes} from "react-router-dom"
import Video from './Pages/Video/Video.js';
import SideNavbar from "./Component/SideNavbar/SideNavbar.js"
import Profile from './Pages/Profile/Profile.js';
import VideoUpload from './Pages/VideoUpload/VideoUpload.js';
import SignUp from './Pages/SignUp/SignUp.js';


function App() {
  const [toggleTheme,setToggleTheme] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(null);
  const [userPic, setUserPic] = useState(Boolean(localStorage.getItem("token"))|| false);
  const [login,setLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  const [pressButton,setPressButton] = useState(false);
  // const [srchBtn,setSrchBtn] = useState(false);
  // const [isSignUpPage, setIsSignUpPage] = useState(false)

  // useEffect(() => {
  //   axios.get("http://localhost:4000/watch/videos")
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  
  return (
    <>
      <div className="App">
        <Navbar pressButton={pressButton} setPressButton={setPressButton}  searchTerm={searchTerm} setSearchTerm={setSearchTerm} login={login} setLogin={setLogin} userPic={userPic} setUserPic={setUserPic}  setToggleSidebar={setToggleSidebar} setToggleTheme={setToggleTheme} toggleTheme={toggleTheme}/>
        <SideNavbar userPic={userPic} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
        <Routes>
          <Route path="/" element={<Home setPressButton={setPressButton} pressButton={pressButton}  userPic={userPic} searchTerm={searchTerm} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>}/>
          <Route  path="/watch/:id"  element={<Video setLogin={setLogin} userPic={userPic} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>}/>
          <Route path="/user/:id" element={<Profile/>}/>
          <Route path="/:id/upload" element={<VideoUpload/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
