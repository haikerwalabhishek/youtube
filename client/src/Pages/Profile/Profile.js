import React, {useEffect,useState} from 'react'
import "./profile.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { PATH } from '../../constants.js';

const Profile = () => {
  const [profileData,setProfileData] = useState([]);
  const [user,setUser] = useState(null)
  const {id} = useParams();

  const fetchProfileData= async()=>{
    console.log(id)
    axios.get(`${PATH}watch/${id}/videos`).then((res)=>{
      console.log(res);
      setProfileData(res?.data?.videos);
      setUser(res?.data.videos[0]?.user);
    })
    .catch((e)=>console.log(e))
  }

  useEffect(()=>{
    fetchProfileData();
  },[]);

  return (
    <div class="profile">
      <div className="profile_page">

        {/* top section */}
        <div className="profile_top_section">

          <div className="profile_top_section_profil/e">
            <img className="profile_top_section_img" src={profileData[0]?.user?.profilePic} alt=""/>
          </div>

        <div className="profile_top_section_About">
          <div className="profile_top_section_About_Name">
           {user?.channelName}
          </div>
          <div className="profile_top_section_info">
            @{user?.username} - {profileData.length} videos
          </div>
          <div className="profile_top_section_info">
            About:&nbsp; {user?.about}
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
          {profileData.map((obj,idx)=>(
            <Link key={obj?._id} style={{"text-decoration":"none"}} to={`/watch/${obj?._id}`} className="profileVideo_block">
              <div className="profileVideo_block_thumbnail">
                <img className="profileVideo_block_thumbnail_img" src={obj?.thumbnail} alt="thumbnail" />    
              </div>
              
              <div className='profileVideo_block_detail'>
                <div className="profile_block_detail_name">{obj?.title}</div>
                <div className="profile_block_detail_about">Created at {obj?.createdAt.split("T")[0]}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile 