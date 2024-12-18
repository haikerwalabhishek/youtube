import React from 'react'
import "./home.css"
import HomePage from '../../Component/HomePage/HomePage'

const Home = ({setPressButton,searchTerm,pressButton}) => {
  return (
    <div className="home">
        <HomePage setPressButton={setPressButton} pressButton={pressButton} searchTerm={searchTerm}/>
    </div>
  )
}

export default Home