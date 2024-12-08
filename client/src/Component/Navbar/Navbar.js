import React, {useState,useRef, useEffect} from "react";
import "./navbar.css";


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

const Navbar = ({userPic, setToggleTheme,setToggleSidebar})=>{
    const [floatNav, setFloatNav] = useState(false);
    const [themeMenu, setThemeMenu] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const navRef = useRef(null);
    const navRef1 = useRef(null);

    const handleToggle = () => {
        setFloatNav((prev) => !prev);
    };

    const openThemeSelector = ()=>{
        setThemeMenu((prev)=> !prev);
    };

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

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
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
                    <input type="text" placeholder="search" className="nav_searchBoxImput" />
                    <div className="nav_searchIconBox">
                    <Tooltip
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
                                    <div className="nav-options-right">
                                    <VideoCallIcon sx={{color:"white", height:"30px", width:"30px"}}/>
                                    </div>
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
                                        {userPic ? <PersonIcon sx={{color:"white", height:"30px", width:"30px"}} onClick={handleToggle}/> : <img src="/photo.png" alt="user picture" style={{ height: "35px", width: "35px", borderRadius: "50%" }} onClick={handleToggle}/>}
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
                    {userPic ? "" : <MoreVertIcon className="circleSideNave" sx={{color:"white", height:"30px", width:"30px"}} onClick={handleToggle}/>}
                </div>
            </Tooltip>
                )}
                {userPic ? "":<div className="signIng">SignIn &nbsp;<LockIcon/></div>}
                {floatNav && (
                    <div className="nav-model" ref={navRef}>
                        <div className="nav-model-option" onClick={openThemeSelector}>
                            Theme &nbsp;&nbsp;&nbsp;
                            <ChevronRightIcon />
                        </div>
                        {!userPic ? "": (
                            <>
                            <div className="nav-model-option">Profile</div>
                            <div className="nav-model-option">Logout</div>
                        </>
                        )}
                    </div>
                )}
                {themeMenu && (
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
                )}
            </div>
            
        </div>
    )
};

export default Navbar;