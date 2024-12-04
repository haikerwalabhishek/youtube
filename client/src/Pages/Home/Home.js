import React from 'react'
import "./home.css"
import SideNavbar from '../../Component/SideNavbar/SideNavbar'
import HomePage from '../../Component/HomePage/HomePage'

const Home = () => {
  return (
    <div className="home">
        <SideNavbar/>
        <HomePage/>
    </div>
  )
}

export default Home