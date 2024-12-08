import React, { useRef, useState, useEffect } from "react";
import "./homepage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomePage = () => {
  const scrollContainerRef = useRef(null);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);

  const options = ["All","Music","Gaming","Hip Hop", "Memes", "Trailers", "Comedy","Watched"]

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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Check the scroll buttons visibility on scroll
    const handleScroll = () => updateScrollButtons();
    scrollContainer.addEventListener("scroll", handleScroll);

    // Initial check
    updateScrollButtons();

    // Cleanup listener on unmount
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div key={index} className="homepage_option">
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
        {Array(6).fill(null).map((_,idx)=>{
          return (
            <div className="youtube_video">
            {/* thumbnail */}
            <div className="thumbnailBox">
              <img src="/youtube.jpg" alt="thumbnail" className="thumbnailImg" />
              <div className="timeStamp">
                28.05
              </div>
            </div>
  
            {/* title and pic */}
            <div className="youtube_titleBox">
              {/* PROFILE */}
              <div className="youtube_profilePic">
                <img src="https://yt3.ggpht.com/ukwasFtDX1b4_Qo7r2z2hsdUL4CFm6ewAmtw41SFbkY98fEeDEaomuzVQ9Lk7PBeSWqnjeAGOQ=s68-c-k-c0x00ffffff-no-rj" alt="profile picture" className="profilePic_youtube" />
              </div>
  
              <div className="video_info_title">
                <div className="videoTitle">Channel name</div>
                <div className="channelName">User 1</div>
                <div className="video_views">3 likes</div>
                <div className="video_views">90k views</div>
              </div>
            </div>
  
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default HomePage;
