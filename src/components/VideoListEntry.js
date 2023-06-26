import React from 'react'

const VideoListEntry = ({data}) => {

  const post = data.find((dataItem)=> dataItem.id);
  //const youtubeID = post.id.videoId;
  const onReady = (e) => {
    console.log(e.target); 

  };
  return (
    <div>
      
    </div>
  )
}

export default VideoListEntry
