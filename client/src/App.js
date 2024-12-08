import './App.css';
import Navbar from './Component/Navbar/Navbar.js';
import Home from "./Pages/Home/Home.js"
import { useState } from 'react';

function App() {
  const [toggleTheme,setToggleTheme] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(null);
  const [userPic, setUserPic] = useState(true);
  return (
    <>
      <div className="App">
        <Navbar userPic={userPic}  setToggleSidebar={setToggleSidebar} setToggleTheme={setToggleTheme} toggleTheme={toggleTheme}/>
        <Home userPic={userPic} setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}/>
      </div>
    </>
  );
}

export default App;
