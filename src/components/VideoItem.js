import './VideoItem.css'
import React from 'react'

const VideoItem = ({ item, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(item)} className="video-item item" key={item.id.videoId}>
            <img
                alt={item.snippet.title}
                className="ui image"
                src={item.snippet.thumbnails.medium.url}>
            </img>
            <div className="content">
                <div className="header">{item.snippet.channelTitle}</div>
            </div>
        </div>
    )
}

export default VideoItem