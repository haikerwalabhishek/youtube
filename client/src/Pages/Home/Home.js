import React from 'react'
import "./home.css"
import SideNavbar from '../../Component/SideNavbar/SideNavbar'
import HomePage from '../../Component/HomePage/HomePage'

const Home = ({userPic,toggleSidebar,setToggleSidebar}) => {
  return (
    <div className="home">
        <SideNavbar userPic={userPic} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
        <HomePage/>
    </div>
  )
}

export default Home