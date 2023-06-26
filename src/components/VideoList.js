import React from 'react'
import VideoListEntry from './VideoListEntry'



const VideoList = ({data}) => {
  


  return (
    <div>
      <h1>Video List</h1>
      
         <VideoListEntry data={data}/>
      
    </div>
  )
}

export default VideoList
