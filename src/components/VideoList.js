import React from 'react'
import VideoListEntry from './VideoListEntry'
import {useState} from 'react'
//import YouTube from 'react-youtube'

const VideoList = ({data}) => {
  


  return (
    <div>
      <h1>Video List</h1>
      <ul>
         <VideoListEntry />
      </ul>
    </div>
  )
}

export default VideoList
