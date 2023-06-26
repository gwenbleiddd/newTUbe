import VideoListEntry from './VideoListEntry'



const VideoList = ({fileData,searchData,getVidKey}) => {
  //style={{ backgroundImage: `url(${background})` }}

  return (
    <div className='dispVidList'  >
      <h1>Video List</h1>
      
         
         <VideoListEntry fileData={fileData} searchData={searchData} getVidKey={getVidKey}/>
      
    </div>
  )
}

export default VideoList
