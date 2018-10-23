import React , { Component } from 'react';
import VideoTitle from './video-title';

const Titles = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoTitle onVideoSelect={props.onVideoSelect} key = {video.etag} video={video}  />
    })
        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
};

export default Titles;