import React from 'react'
import "./videoUpload.css"
import {Link} from "react-router-dom"

const VideoUpload = () => {
  return (
    <div className='videoUpload'>
        <div className="uploadBox">
            <div className="uploadVideoTitle">
                <img  src="/youtube.png" className="nav_youtubeImage"/>
                <div className="nav_youtubeTitle">Upload Video</div>
            </div>

            <div className="uploadForm">
                <input placeholder="Title of video" type="text" className="uploadFormInput" />
                <input placeholder="Description" type="text" className="uploadFormInput" />
                <input placeholder="Category" type="text" className="uploadFormInput" />
                <div className="uploadThumbnail">
                <label htmlFor="thumbnailUpload" className="thumbnailLabel">
                    <span className='ThumbnailLabelSpan'>Thumbnail</span>
                    <div className="uploadButton">
                    Choose File
                    </div>
                </label>
                <input 
                    type="file" 
                    id="thumbnailUpload" 
                    accept="image/*" 
                    className="thumbnailInput" 
                />
                </div>
                <div className="uploadThumbnail">
                <label htmlFor="thumbnailUpload" className="thumbnailLabel">
                    <span>Video</span>
                    <div className="uploadButton">
                    Choose File
                    </div>
                </label>
                <input 
                    type="file" 
                    id="thumbnailUpload" 
                    accept="video/*" 
                    className="thumbnailInput" 
                />
                </div>
                <div className="uploadBtns">
                    <div className="uploadBtn-form uploadThumbnail">Upload</div>
                    <Link style={{textDecoration:"none"}} to="/" className="uploadBtn-form uploadThumbnail">Home</Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default VideoUpload