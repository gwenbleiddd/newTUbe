import Search from './components/Search'
import VideoPlayer from './components/VideoPlayer'
import VideoList from './components/VideoList'
//import {useState ,useEffect } from 'react'
//import data from './data.json'
import data from './exampleVideoData.json'

function App() {
//   const[vid,setVid] = useState([])
  
//   useEffect(()=>{
    
//     fetch('./data.json')
//     .then(response => response.json())
//     .then((resJson)=>{
//       setVid(resJson)
//     })
//   },[])

//  vid.map((e,i)=> i===0 ?console.log(e.title):"")


  return (
    
    <div className="App">
      <div className="Left">
        <div className="Search">
          <Search />
        </div>
        <div className="VideoPlayer">
          <VideoPlayer data={data}/>
        </div>
      </div>
      <div className="Right">
        <div className='VideoList'>
          <VideoList />
        </div>
      </div>
     
    </div>
  );
}

export default App;
