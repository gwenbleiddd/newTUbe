import React from 'react'
//import YouTube from 'react-youtube'


const VideoListEntry = ({fileData,searchData}) => {
  
 

  return (
  <div className='entry'>
    
      <ul>

        {
        
        fileData.map((val,i)=>{
          if(val.snippet.title===searchData){//find a way to searh by a piece of the string
       return <li key={val.id.videoId}>
        <div className='thumb'>
        <img src={val.snippet.thumbnails.default.url} alt=''></img>
      </div>
      <div className='titleDescrip'>
        <h6 className='title'>{val.snippet.title}</h6>
        <h6>{val.snippet.description}</h6>
      </div>
        </li>
        
        }
        return null;   
  })}
</ul>
     
    </div>
  )
}

export default VideoListEntry
