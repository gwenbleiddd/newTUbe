import React from 'react'
import YouTube from 'react-youtube'


const VideoPlayer = ({fileData}) => {

   const post = fileData.find((dataItem)=> dataItem.id);
   const youtubeID = post.id.videoId;
   const onReady = (e) => {
    console.log(e.target); 
  };
  
  

  return (
    <div>
      <h1>Video Player</h1>
      <h3>{post.snippet.title}</h3>
      <p>{post.snippet.description}</p>
      <div className="player">
            <YouTube videoId={youtubeID} onReady={onReady} />
      </div>
    </div>
  )
}

export default VideoPlayer
