import React from "react";

const VideoListItem = (props) => {

    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const onVideoSelect = props.onVideoSelect;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-heading">
                    <div className="media-body">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;