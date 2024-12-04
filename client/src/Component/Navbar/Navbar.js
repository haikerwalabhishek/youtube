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

const Navbar = ()=>{
    const [userPic, setUserPic] = useState(false);
    const [floatNav, setFloatNav] = useState(false);
    const navRef = useRef(null);

    const handleToggle = () => {
        setFloatNav((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setFloatNav(false);
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
                <div className="nav-ham">
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
                        <MenuIcon sx={{color:"white", height:"30px", width:"30px"}}/>
                    </Tooltip>
                </div>
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
                <Tooltip
                    title="Create"
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
                </Tooltip>
                <Tooltip
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
                </Tooltip>
                <Tooltip
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
                        {/* <img 
                                src={userPic} 
                                alt="user picture" 
                                style={{ height: "35px", width: "35px", borderRadius: "50%" }} 
                        /> */}
                        {userPic ? "" : <PersonIcon sx={{color:"white", height:"30px", width:"30px"}} onClick={handleToggle}/>}
                    </div>
                </Tooltip>
                {userPic ? "":<div className="signIng">SignIn</div>}
                {floatNav &&
                    <div className="nav-model" ref={navRef}>
                        <div className="nav-model-option">Profile</div>
                        <div className="nav-model-option">Logout</div>
                        <div className="nav-model-option">Login</div>
                    </div>
                }
            </div>
        </div>
    )
};

export default Navbar;