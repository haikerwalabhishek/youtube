import React, { useRef, useState, useEffect } from "react";
import "./homepage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from "react-router-dom";
import axios from "axios";
import { PATH } from "../../constants";

const HomePage = ({setPressButton,searchTerm,pressButton}) => {

  const scrollContainerRef = useRef(null);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const [videoData,setVideoData] = useState([])
  const [options,setOptions] = useState([])

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsLeftVisible(scrollLeft > 0);
    setIsRightVisible(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const fetchVideos = async()=>{
    axios.get(`${PATH}watch/videos`)
    .then(res => {
      console.log(res);
      setVideoData(res?.data?.videos)
      setOptions((prevOptions) => {
        // Extract the videoTypes from the new data
        const newVideoTypes = res?.data?.videos?.map((video) => video.videoType);
        
        // Combine the previous options with the new videoTypes and eliminate duplicates
        const uniqueVideoTypes = [...new Set([...prevOptions, ...newVideoTypes])];
        
        return uniqueVideoTypes;
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  const fetchVideosBySearchTerm = async()=>{
    console.log(searchTerm,"searchTerm")
    const response = await axios.get(`${PATH}watch/videos/search/${searchTerm}`);
    // console.log("videoType: ",videoType)
    console.log(response,"videos")
    setVideoData(response?.data?.videos)
    // setPressButton(false);
  }

  const fetchVideosbyVideoType = async(videoType)=>{
    const response = await axios.get(`${PATH}watch/videos/type`, {
      params: { videoType: videoType }
    });
    console.log("videoType: ",videoType)
    console.log(response,"videos")
    setVideoData(response?.data?.videos)
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Check the scroll buttons visibility on scroll
    const handleScroll = () => updateScrollButtons();
    scrollContainer.addEventListener("scroll", handleScroll);

    // Initial check
    updateScrollButtons();

    const fetchData = async () => {
        await fetchVideos();
    };
    if(searchTerm && pressButton){fetchVideosBySearchTerm();}
    else{fetchData()};

    // Cleanup listener on unmount
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [pressButton]);

  return (
    <div className="homepage">
      {/* flitering options */}
      <div className="homepage_options" ref={scrollContainerRef}>
        {isLeftVisible && (
          <div className="left" onClick={scrollLeft}>
            <ArrowForwardIosIcon
              className="left"
              sx={{ color: "white", rotate: "180deg" }}
            />
          </div>
        )}
        {options.map((option, index) => (
          <div key={option} onClick={()=>fetchVideosbyVideoType(option)} className="homepage_option">
            {option}
          </div>
        ))}
        {isRightVisible && (
          <div className="right" onClick={scrollRight}>
            <ArrowForwardIosIcon className="right" sx={{ color: "white" }} />
          </div>
        )}
      </div>

      {/* main page */}
      <div className="home_mainPage">
        {videoData?.map((obj,idx)=>{
          return (
            <Link key={obj?._id} to={`/watch/${obj?._id}`} className="youtube_video">
            {/* thumbnail */}
            <div className="thumbnailBox">
              <img src={obj?.thumbnail} alt="thumbnail" className="thumbnailImg" />
              {/* <div className="timeStamp">
                28.05
              </div> */}
            </div>
  
            {/* title and pic */}
            <div className="youtube_titleBox">
              {/* PROFILE */}
              <div className="youtube_profilePic">
                <img src={obj?.user.profilePic} alt="profile picture" className="profilePic_youtube"/>
              </div>
  
              <div className="video_info_title">
                <div className="videoTitle">{obj?.title}</div>
                <div className="channelName">{obj?.user?.channelName}</div>
                <div className="video_views">{obj?.like}&nbsp;likes</div>
                {/* <div className="video_views">90k views</div> */}
              </div>
            </div>
  
          </Link>
          )
        })}
      </div>
    </div>
  );
};

export default HomePage;
