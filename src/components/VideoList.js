import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ itemList, onVideoSelect }) => {
    const video = itemList.map(item => {
        return (
            <VideoItem 
            key = {item.id.videoId}
            onVideoSelect={onVideoSelect} 
            item={item} />
        )
    })
    return <div className="ui relaxed divided list">{video}</div>
}

export default VideoList
