import React, { useState } from "react";
import "./signup.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { PATH } from "../../constants";

const SignUp = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [signUpFeild, setSignUpFeild] = useState({
    channelName: "",
    username: "",
    password: "",
    about: "",
    profilePic: uploadedImageUrl,
  });
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (event, name) => {
    setSignUpFeild({
      ...signUpFeild,
      [name]: event.target.value,
    });
  };

  const handleSignup = async () => {
    console.log(signUpFeild)
    setProgress(true);
    axios
      .post(`${PATH}auth/signUp`, signUpFeild)
      .then((res) => {
        console.log(res);
        toast.success(res?.data?.message,{
          className:"customToast"
        });
        setProgress(false);
        navigate("/");
      })
      .catch((e) => {
        setProgress(false);
        toast.error(e.message,{
          className:"customToast"
        });
        console.log(e);
      });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      console.error("No file selected");
      return;
    }

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube_clone");
    setProgress(true);
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dystsps0w/image/upload",
        data
      );
      setProgress(false);
      console.log("Upload Successful:", response.data);
      const imageUrl = response.data.secure_url;
      console.log("Image URL:", imageUrl);
      setUploadedImageUrl(imageUrl);

      setSignUpFeild({
        ...signUpFeild,
        profilePic: imageUrl,
      });
    } catch (error) {
      setProgress(false);
      console.error(
        "Upload Failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="signUp">
      <div className="signup_card">
        <div className="nav_youtubeTitle">
          <YouTubeIcon
            sx={{ fontSize: "54px" }}
            className="login_uoutubeImage"
          />
          SignUp
        </div>

        <div className="singUp_Inputs">
          <input
            value={signUpFeild.channelName}
            onChange={(e) => handleOnChange(e, "channelName")}
            placeholder="Channel Name"
            type="text"
            className="uploadFormInput"
          />
          <input
            value={signUpFeild.userName}
            onChange={(e) => handleOnChange(e, "username")}
            placeholder="Username"
            type="text"
            className="uploadFormInput"
          />
          <input
            value={signUpFeild.Password}
            onChange={(e) => handleOnChange(e, "password")}
            placeholder="Password"
            type="text"
            className="uploadFormInput"
          />
          <input
            value={signUpFeild.about}
            onChange={(e) => handleOnChange(e, "about")}
            placeholder="About Your Channel"
            type="text"
            className="uploadFormInput"
          />
          <div className="uploadThumbnail">
            <label htmlFor="thumbnailUpload" className="thumbnailLabel">
              <span className="ThumbnailLabelSpan">Profile Photo</span>
              <div className="uploadButton">Choose File</div>
            </label>
            <input
              onChange={(e) => uploadImage(e)}
              type="file"
              id="thumbnailUpload"
              accept="image/*"
              className="thumbnailInput"
            />
          </div>
          {uploadedImageUrl && (
            <div className="profile_top_section_profil/e">
              <img
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                src={uploadedImageUrl}
                alt=""
              />
            </div>
          )}
        </div>

        <div className="uploadBtns">
          <div
            onClick={() => handleSignup()}
            style={{ minWidth: "fit-content" }}
            className="uploadBtn-form uploadThumbnail">
            SingUp
          </div>
          <Link
            style={{ textDecoration: "none", minWidth: "fit-content" }}
            to="/"
            className="uploadBtn-form uploadThumbnail">
            Home
          </Link>
        </div>
        {progress && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
