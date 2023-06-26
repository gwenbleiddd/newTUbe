import React from 'react'
import VideoListEntry from './VideoListEntry'



const VideoList = ({fileData,searchData}) => {
  


  return (
    <div>
      <h1>Video List</h1>
      
         <VideoListEntry fileData={fileData} searchData={searchData}/>
      
    </div>
  )
}

export default VideoList
