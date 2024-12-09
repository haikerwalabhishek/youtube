import React from 'react'
import "./profile.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div class="profile">
      <div className="profile_page">

        {/* top section */}
        <div className="profile_top_section">

          <div className="profile_top_section_profil/e">
            <img className="profile_top_section_img" src="/photo.png" alt=""/>
          </div>

        <div className="profile_top_section_About">
          <div className="profile_top_section_About_Name">
            Coding ji
          </div>
          <div className="profile_top_section_info">
            @user - 1.3k subscriber - 123 videos
          </div>
          <div className="profile_top_section_info">
            About Section of Channel
          </div>
        </div>
        </div>

        {/* bottom section */}
        <div className="profile_videos">
          <div className="profile_videos_title">Video &nbsp; <ArrowRightIcon/></div>
        </div>
        <hr />
        <div className="profileVideos">

          {/* div for a video */}
          {Array(10).fill(null).map((_,idx)=>(
            <Link key={idx-100} style={{"text-decoration":"none"}} to={`/watch/${idx-100}`} className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img className="profileVideo_block_thumbnail_img" src="/youtube.jpg" alt="thumbnail" />    
              </div>
              
              <div className='profileVideo_block_detail'>
                <div className="profile_block_detail_name">video title</div>
                <div className="profile_block_detail_about">Create at 2024-09-12</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile 