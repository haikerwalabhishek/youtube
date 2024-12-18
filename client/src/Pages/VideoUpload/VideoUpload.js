import React, { useState, useEffect } from "react";
import "./videoUpload.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const VideoUpload = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [videoFeild, setVideoFeild] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: "",
  });
//   const [data,setData] = useState(new FormData());

  const handleOnChange = (event, name) => {
    setVideoFeild({
      ...videoFeild,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async ()=>{
    console.log("videoFeild",videoFeild)
    axios.post(`http://localhost:4000/watch/video`,videoFeild,{
      withCredentials: true,
    }).then((res)=>console.log(res)).catch(err=>console.log(err))
    navigate(`/user/${localStorage.getItem("user")}`)
  };

  const uploadFiles = async (e, type) => {
    setLoader(true)
    const files = e.target.files;

    if (!files || files.length === 0) {
      console.error("No file selected");
      return;
    }


    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube_clone");

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/dystsps0w/${type}/upload`,
            data
        );
      console.log("Upload Successful:", response.data);
      const Url = response.data.secure_url;
      console.log(`${type} URL:`, Url);
      // setUploadedImageUrl(Url);

      let val = type === "image" ? "thumbnail" : "videoLink";

      setVideoFeild({
        ...videoFeild,
        [val]: Url,
      });
      setLoader(false)
    } catch (error) {
      setLoader(false)
      console.error(
        "Upload Failed:",
        error.response ? error.response.data : error.message
      );
    }
  };


  useEffect(()=>{
    let isLogin = localStorage.getItem("user");
    if(isLogin==null){
      navigate("/")
    }
  },[])

  return (
    <div className="videoUpload">
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <img src="/youtube.png" className="nav_youtubeImage" />
          <div className="nav_youtubeTitle">Upload Video</div>
        </div>

        <div className="uploadForm">
          <input
            value={videoFeild.title}
            onChange={(e) => handleOnChange(e, "title")}
            placeholder="Title of video"
            type="text"
            className="uploadFormInput"
          />
          <input
            value={videoFeild.description}
            onChange={(e) => handleOnChange(e, "description")}
            placeholder="Description"
            type="text"
            className="uploadFormInput"
          />
          <input
            value={videoFeild.category}
            onChange={(e) => handleOnChange(e, "videoType")}
            placeholder="Category"
            type="text"
            className="uploadFormInput"
          />

          <div className="uploadThumbnail">
            <label htmlFor="thumbnailUpload" className="thumbnailLabel">
              <span className="ThumbnailLabelSpan">Thumbnail</span>
              <div className="uploadButton">Choose File</div>
            </label>
            <input
              onChange={(e) => uploadFiles(e, "image")}
              type="file"
              id="thumbnailUpload"
              accept="image/*"
              className="thumbnailInput imageInput"
            />
          </div>
          <div className="uploadThumbnail">
            <label htmlFor="videoUpload" className="thumbnailLabel">
              <span className="ThumbnailLabelSpan">Video</span>
              <div className="uploadButton">Choose File</div>
            </label>
            <input
              onChange={(e) => uploadFiles(e, "video")}
              type="file"
              id="videoUpload"
              accept="video/*"
              className="thumbnailInput videoInput"
            />
          </div>

          {loader && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}

          <div className="uploadBtns">
            <div onClick={()=>handleSubmit()} className="uploadBtn-form uploadThumbnail">Upload</div>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              className="uploadBtn-form uploadThumbnail">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
