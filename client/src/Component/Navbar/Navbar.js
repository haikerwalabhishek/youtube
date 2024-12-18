import React, {useState,useRef, useEffect} from "react";
import "./navbar.css";
import Login from "../Login/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//icons
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckIcon from '@mui/icons-material/Check';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {Link} from "react-router-dom"

const Navbar = ({login,setLogin,userPic,setUserPic, setSearchTerm,searchTerm,setToggleSidebar})=>{
    const [floatNav, setFloatNav] = useState(false);
    const [themeMenu, setThemeMenu] = useState(false);
    
    // const [isToggled, setIsToggled] = useState(false);
    // const [login,setLogin] = useState(false);
    const [profilePic,setProfilePic] = useState("/photo.png")
    const navRef = useRef(null);
    const navRef1 = useRef(null);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); 
      };

    const handleToggle = () => {
        setFloatNav((prev) => !prev);
    };

    // const openThemeSelector = ()=>{
    //     setThemeMenu((prev)=> !prev);
    // };

    const handleClickOutside = (event) => {
        if ((navRef.current && !navRef.current.contains(event.target))) {
            setFloatNav(false);
            // setThemeMenu(false);
        }
        if ((navRef1.current && !navRef1.current.contains(event.target))) {
            // setFloatNav(false);
            setThemeMenu(false);
        }
    };

    const getLogout = async()=>{
        axios.post("http://localhost:4000/auth/logOut",{},{withCredentials:true}).then((res)=>{
            console.log(res);
        }).catch((err)=>console.log(err))
    }

    const onPopup = (button)=>{
        if(button==="Login"){
            setLogin(true);
        }else if (button==="Logout"){
            setUserPic((prev)=>false);
            localStorage.clear();
            console.log("heelo");
            getLogout();
            setTimeout(()=>{
                navigate("/")
                window.location.reload();
            },1000);
        }
        else{setLogin(false)}
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        let Pic = localStorage.getItem("picture");

        if(Pic){
            setProfilePic(Pic)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);
    
    return (
        <div className="navbar">
            {/* navbar left */}
            <div className="nav-left">
                <div className="nav-ham" onClick={() =>
                setToggleSidebar((prev) => (prev === null ? true : !prev))
                }
                >
                    <Tooltip
                        title="Menu"
                        arrow
                        componentsProps={{
                            tooltip: {
                            sx: {
                                bgcolor: "rgb(58,57,57)", // Background color
                                color: 'white',  // Text color
                                fontSize: '14px', // Font size
                                borderRadius: '4px', // Rounded corners
                                padding: '8px', // Padding
                            },
                            },
                            arrow: {
                            sx: {
                                color: 'black', // Arrow color matching the tooltip background
                            },
                            },
                        }}
                        >
                        <MenuIcon className="iconbg" sx={{color:"white", height:"30px", width:"30px"}}/>
                    </Tooltip>
                </div>
                <Link to="/" style={{textDecoration:"none"}}>
                <Tooltip
                    className="nav_youtubeImg"
                    title="Youtube Home"
                    arrow
                    componentsProps={{
                        tooltip: {
                        sx: {
                            bgcolor: "rgb(58,57,57)", // Background color
                            color: 'white',  // Text color
                            fontSize: '14px', // Font size
                            borderRadius: '4px', // Rounded corners
                            padding: '8px', // Padding
                        },
                        },
                        arrow: {
                        sx: {
                            color: 'black', // Arrow color matching the tooltip background
                        },
                        },
                    }}
                    >
                    <img  src="/youtube.png" className="nav_youtubeImage"/>
                    <div className="nav_youtubeTitle">YouTube</div>
                </Tooltip>
                </Link>
            </div>

            {/* navbar middle */}
            <div className="nav-middle">
                <div className="nav_searchBox">
                    <input type="text" placeholder="search" value={searchTerm} onChange={handleInputChange} className="nav_searchBoxImput" />
                    <div className="nav_searchIconBox">
                    <Tooltip
                        // onClick={()=>fetchVideosBySearchTerm()}
                        title="Search"
                        arrow
                        componentsProps={{
                            tooltip: {
                            sx: {
                                bgcolor: "rgb(58,57,57)", // Background color
                                color: 'white',  // Text color
                                fontSize: '14px', // Font size
                                borderRadius: '4px', // Rounded corners
                                padding: '8px', // Padding
                            },
                            },
                            arrow: {
                            sx: {
                                color: 'black', // Arrow color matching the tooltip background
                            },
                            },
                        }}
                        >
                        <SearchIcon sx={{ color: "white", fontSize: "28px" }} />
                    </Tooltip>
                    </div>
                </div>

                {/* mic */}
                <div className="nav_mic">
                    <Tooltip
                        title="Search with your voice"
                        arrow
                        componentsProps={{
                            tooltip: {
                            sx: {
                                bgcolor: "rgb(58,57,57)", // Background color
                                color: 'white',  // Text color
                                fontSize: '14px', // Font size
                                borderRadius: '4px', // Rounded corners
                                padding: '8px', // Padding
                            },
                            },
                            arrow: {
                            sx: {
                                color: 'black', // Arrow color matching the tooltip background
                            },
                            },
                        }}
                        >
                        <MicIcon sx={{color:"white", fontSize:"28px"}}/>
                    </Tooltip>
                </div>
            </div>

            {/* navbar right*/}
            <div className="nav-right">
                {userPic ? [
                                <Tooltip
                                    title="Create"
                                    className="nav-ham"
                                    arrow
                                    componentsProps={{
                                        tooltip: {
                                        sx: {
                                            bgcolor: "rgb(58,57,57)", // Background color
                                            color: 'white',  // Text color
                                            fontSize: '14px', // Font size
                                            borderRadius: '4px', // Rounded corners
                                            padding: '8px', // Padding
                                        },
                                        },
                                        arrow: {
                                        sx: {
                                            color: 'black', // Arrow color matching the tooltip background
                                        },
                                        },
                                    }}
                                    >
                                    <Link to="/id/upload" style={{textDecoration:"none"}} className="nav-options-right">
                                        <VideoCallIcon sx={{color:"white", height:"30px", width:"30px"}}/>
                                    </Link>
                                </Tooltip>,
                                <Tooltip
                                    className="nav-ham"
                                    title="Notifications"
                                    arrow
                                    componentsProps={{
                                        tooltip: {
                                        sx: {
                                            bgcolor: "rgb(58,57,57)", // Background color
                                            color: 'white',  // Text color
                                            fontSize: '14px', // Font size
                                            borderRadius: '4px', // Rounded corners
                                            padding: '8px', // Padding
                                        },
                                        },
                                        arrow: {
                                        sx: {
                                            color: 'black', // Arrow color matching the tooltip background
                                        },
                                        },
                                    }}
                                    >
                                    <div className="nav-options-right">
                                        <NotificationsIcon sx={{color:"white", height:"30px", width:"30px"}}/>
                                    </div>
                                </Tooltip>,
                                <Tooltip
                                    className="nav-ham"
                                    title="Profile"
                                    arrow
                                    componentsProps={{
                                        tooltip: {
                                        sx: {
                                            bgcolor: "rgb(58,57,57)", // Background color
                                            color: 'white',  // Text color
                                            fontSize: '14px', // Font size
                                            borderRadius: '4px', // Rounded corners
                                            padding: '8px', // Padding
                                        },
                                        },
                                        arrow: {
                                        sx: {
                                            color: 'black', // Arrow color matching the tooltip background
                                        },
                                        },
                                    }}
                                    >
                                    <div className="nav-options-right">
                                        {userPic ?   <img src={profilePic} style={{width:"100%", height:"100%"}} alt="user picture" style={{ height: "35px", width: "35px", borderRadius: "50%" }} onClick={handleToggle}/> : <PersonIcon sx={{color:"white", height:"30px", width:"30px"}} onClick={handleToggle}/>}
                                    </div>
                                </Tooltip>
                ]:(
                    <Tooltip
                title="Settings"
                arrow
                componentsProps={{
                    tooltip: {
                    sx: {
                        bgcolor: "rgb(58,57,57)", // Background color
                        color: 'white',  // Text color
                        fontSize: '14px', // Font size
                        borderRadius: '4px', // Rounded corners
                        padding: '8px', // Padding
                    },
                    },
                    arrow: {
                    sx: {
                        color: 'black', // Arrow color matching the tooltip background
                    },
                    },
                }}
                >
                <div className="nav-options-right">
                    {/* <img 
                            src={userPic} 
                            alt="user picture" 
                            style={{ height: "35px", width: "35px", borderRadius: "50%" }} 
                    /> */}
                    {/* {userPic ? "" : <MoreVertIcon className="circleSideNave" sx={{color:"white", height:"30px", width:"30px"}} onClick={handleToggle}/>} */}
                </div>
            </Tooltip>
                )}
                {userPic ? "":<div className="signIng" onClick={()=>onPopup("Login")}>SignIn &nbsp;<LockIcon onClick={()=>onPopup("Login")}/></div>}
                {floatNav && (
                    <div className="nav-model" ref={navRef}>
                        {/* <div className="nav-model-option" onClick={openThemeSelector}>
                            Theme &nbsp;&nbsp;&nbsp;
                            <ChevronRightIcon />
                        </div> */}
                        {!userPic ? "": (
                            <>
                            <Link to={`/user/${localStorage.getItem("user")}`} style={{textDecoration:"none"}} className="nav-model-option">Profile</Link>
                            <div onClick={()=>onPopup("Logout")} className="nav-model-option">Logout</div>
                        </>
                        )}
                    </div>
                )}
                {/* {themeMenu && (
                    <div className="nav-model" ref={navRef1}>
                        <div className="nav-model-back" onClick={()=>{setThemeMenu(false); setFloatNav(true)}}><ArrowBackIcon/></div>
                        <div className="nav-model-option" onClick={()=>{setToggleTheme(true); setIsToggled(true)}}>
                            <CheckIcon sx={{ visibility: isToggled ? 'visible' : 'hidden' }} />
                            Light Theme
                        </div>
                        <div className="nav-model-option" onClick={()=>{setToggleTheme(false); setIsToggled(false)}}>
                            <CheckIcon sx={{ visibility: isToggled ? 'hidden' : 'visible' }} />
                            Dark Theme
                        </div>
                    </div>
                )} */}
            </div>

            {
                login && <Login onPopup={onPopup} setUserPic={setUserPic} userPic={userPic}/>
            }
            
        </div>
    )
};

export default Navbar;