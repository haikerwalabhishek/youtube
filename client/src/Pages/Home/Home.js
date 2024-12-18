import React from 'react'
import "./home.css"
import HomePage from '../../Component/HomePage/HomePage'

const Home = ({searchTerm}) => {
  return (
    <div className="home">
        <HomePage searchTerm={searchTerm}/>
    </div>
  )
}

export default Home