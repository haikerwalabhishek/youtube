import React from 'react';
import "./sideNavbar.css";
import Tooltip from '@mui/material/Tooltip';

import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Subscriptions from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';

const SideNavbar = () => {
  return (
    <div className="home-sideNav">
      <div className="home-sideNavTop">
        <div className={`home-sideNavTopOption`}>
          <Tooltip
              title="Home"
              className="home-sideNavTopOptionTitile"
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
            <HomeIcon/>Home
          </Tooltip>
          <Tooltip
              title="Shorts"
              className="home-sideNavTopOptionTitile"
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
            <VideoCallIcon/>Shorts
          </Tooltip>
          <Tooltip
              title="Subscriptions"
              className="home-sideNavTopOptionTitile"
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
            <Subscriptions/>Subscriptions
          </Tooltip>
          <hr />
          <div className="home-sideNavTopOptionTitile" style={{"paddingLeft":"10px"}}><span style={{"fontWeight":"600", "fontSize":"20px"}}>You</span><ChevronRightIcon/></div>
          <Tooltip
              title="History"
              className="home-sideNavTopOptionTitile"
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
            <HistoryIcon/>History
          </Tooltip>
          <Tooltip
              title="Playlists"
              className="home-sideNavTopOptionTitile"
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
            <PlaylistPlayIcon/>Playlists
          </Tooltip>
          <Tooltip
              title="Your Videos"
              className="home-sideNavTopOptionTitile"
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path clip-rule="evenodd" d="M3.5 5.5h17v13h-17v-13ZM2 5.5C2 4.672 2.672 4 3.5 4h17c.828 0 1.5.672 1.5 1.5v13c0 .828-.672 1.5-1.5 1.5h-17c-.828 0-1.5-.672-1.5-1.5v-13Zm7.748 2.927c-.333-.19-.748.05-.748.435v6.276c0 .384.415.625.748.434L16 12 9.748 8.427Z" fill-rule="evenodd"></path></svg>Your Videos
          </Tooltip>
          <Tooltip
              title="Watch Later"
              className="home-sideNavTopOptionTitile"
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
            <AccessTimeIcon/>Watch Later
          </Tooltip>
          <Tooltip
              title="Liked Vidoes"
              className="home-sideNavTopOptionTitile"
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
            <ThumbUpOffAltIcon/>Liked Videos
          </Tooltip>
          <hr/>
          <Tooltip
              title="Settings"
              className="home-sideNavTopOptionTitile"
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
            <SettingsIcon/>Settings
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar