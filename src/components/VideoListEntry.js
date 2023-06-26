import React from 'react'
//import YouTube from 'react-youtube'


const VideoListEntry = ({data}) => {
   let post = ''
  //const post = data.forEach((dataItem)=> dataItem.id);
  //const youtubeID = post.id.videoId;
 

  return (
  <div className='entry'>
      <ul>
        {data.map((val,i)=>{
       return <li>
        <div className='thumb'>
        <img src={val.snippet.thumbnails.default.url} alt=''></img>
      </div>
      <div className='titleDescrip'>
        <h6 className='title'>{val.snippet.title}</h6>
        <h6>{val.snippet.description}</h6>
      </div>
        </li>
  })}
</ul>
     
    </div>
  )
}

export default VideoListEntry
