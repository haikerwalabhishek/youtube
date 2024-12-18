import React from "react";
import "./sideNavbar.css";
import {useEffect, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";

import HomeIcon from "@mui/icons-material/Home";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Subscriptions from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import MenuIcon from "@mui/icons-material/Menu";
import LockIcon from '@mui/icons-material/Lock';


import {Link} from "react-router-dom"

const SideNavbar = ({userPic, toggleSidebar, setToggleSidebar }) => {
  const sidenavRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target) &&
    toggleSidebar === true) {
        setToggleSidebar(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  return (
    <div
      ref={sidenavRef}
      className={`home-sideNav custom-scrollbar ${
        toggleSidebar===null ? "hide" :toggleSidebar===false ? "moveLeft" : "moveRight"
      }`}>
      <div className="home-sideNavTop">
        <div className={`home-sideNavTopOption`}>
          {/* ===================================== home ============================= */}
          <div
            className="sidenav-ham">
            <Tooltip
              className="sidenav-ham"
              onClick={() => setToggleSidebar((prev) => !prev)}
              title="Menu"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "rgb(58,57,57)", // Background color
                    color: "white", // Text color
                    fontSize: "14px", // Font size
                    borderRadius: "4px", // Rounded corners
                    padding: "8px", // Padding
                  },
                },
                arrow: {
                  sx: {
                    color: "black", // Arrow color matching the tooltip background
                  },
                },
              }}>
              <MenuIcon
                className="ham-btn"
                sx={{
                  color: "white",
                  height: "33px!important",
                  width: "33px!important",
                }}
              />
             <Link to="/" style={{textDecoration:"none",display:"flex", gap:"2px"}}>
                <img src="/youtube.png" className="nav_youtubeImage" />
                <span className="sidenav_youtubeTitle">YouTube</span>
              </Link>
            </Tooltip>
          </div>
          <Link to="/" style={{textDecoration:"none"}}>
            <Tooltip
              title="Home"
              className="home-sideNavTopOptionTitile"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "rgb(58,57,57)", // Background color
                    color: "white", // Text color
                    fontSize: "14px", // Font size
                    borderRadius: "4px", // Rounded corners
                    padding: "8px", // Padding
                  },
                },
                arrow: {
                  sx: {
                    color: "black", // Arrow color matching the tooltip background
                  },
                },
              }}>
              <HomeIcon />
              Home
            </Tooltip>
          </Link>
          {/* ===================================== shorts ============================= */}
          <Tooltip
            title="Shorts"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <VideoCallIcon />
            Shorts
          </Tooltip>
          {/* ===================================== subscriptions ============================= */}
          <Tooltip
            title="Subscriptions"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <Subscriptions />
            Subscriptions
          </Tooltip>
          <hr />
          {/* ===================================== you section ============================= */}
          <div
            className={`home-sideNavTopOptionTitile ${userPic ? "":"hide"}`}
            style={{ paddingLeft: "10px" }}>
            <span style={{ fontWeight: "600", fontSize: "20px" }}>You</span>
            {userPic ? <ChevronRightIcon />:""}
          </div>
          {userPic ? [
          // {/* ===================================== your channel ============================= */},
          <Tooltip
            title="Your Channel"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <RecentActorsIcon />
            Your Channel
          </Tooltip>,
          // {/* ===================================== history ============================= */},
          <Tooltip
            title="History"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <HistoryIcon />
            History
          </Tooltip>,
          // {/* ===================================== playlists ============================= */},
          <Tooltip
            title="Playlists"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <PlaylistPlayIcon />
            Playlists
          </Tooltip>,
          // {/* ===================================== your videos ============================= */},
          <Tooltip
            title="Your Videos"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true">
              <path
                clip-rule="evenodd"
                d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z"
                fill-rule="evenodd"></path>
            </svg>
            Your Videos
          </Tooltip>,
          // {/* ===================================== watch later ============================= */},
          <Tooltip
            title="Watch Later"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <AccessTimeIcon />
            Watch Later
          </Tooltip>,
          // {/* ===================================== liked videos ============================= */},
          <Tooltip
            title="Liked Vidoes"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <ThumbUpOffAltIcon />
            Liked Videos
          </Tooltip>,
          <hr />,
          // {/* ===================================== subscriptions ============================= */},
          <Tooltip
            title="Subscriptions"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            Subscriptions
          </Tooltip>,
          <hr />,
          // {/* ===================================== Settings ============================= */},
          <Tooltip
            title="Settings"
            className="home-sideNavTopOptionTitile"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "rgb(58,57,57)", // Background color
                  color: "white", // Text color
                  fontSize: "14px", // Font size
                  borderRadius: "4px", // Rounded corners
                  padding: "8px", // Padding
                },
              },
              arrow: {
                sx: {
                  color: "black", // Arrow color matching the tooltip background
                },
              },
            }}>
            <SettingsIcon />
            Settings
          </Tooltip>
          ]:""}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
