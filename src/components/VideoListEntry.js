import React from 'react'
import YouTube from 'react-youtube'
import data from '../exampleVideoData.json'

const VideoListEntry = () => {

  const post = data.find((dataItem)=> dataItem.id);
  //const youtubeID = post.id.videoId;

  return (
    <div className='entry'>
      <div className='thumb'>
        <img src={post.snippet.thumbnails.default.url}></img>
      </div>
      <div className='titleDescrip'>
        <h6 className='title'>{post.snippet.title}</h6>
        <h6>{post.snippet.description}</h6>
      </div>
    </div>
  )
}

export default VideoListEntry
