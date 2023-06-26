import Search from './components/Search'
import VideoPlayer from './components/VideoPlayer'
import VideoList from './components/VideoList'
import data from './exampleVideoData.json'
import { useState } from 'react'

function App() {
  const[userInput,setUserInput] = useState('gibrish');
  const[vidKey,setVidKey] = useState('');

  const getSearchData = (data) =>{
    setUserInput(data)
  }

  const getVidKey = (key) =>{
     setVidKey(key);
  }
//   const[vid,setVid] = useState([])
  
//   useEffect(()=>{
    
//     fetch('./data.json')
//     .then(response => response.json())
//     .then((resJson)=>{
//       setVid(resJson)
//     })
//   },[])

//  vid.map((e,i)=> i===0 ?console.log(e.title):"")
//word=>setUserInput(word)

  return (
    
    <div className="App">
        
      
      <div className="Left">
        <div className="Search">
          <Search onSubmit={getSearchData}/>
        </div>
        <div className="VideoPlayer">
          <VideoPlayer fileData={data} vidKey={vidKey}/>
        </div>
      </div>
      <div className="Right">
        <div className='VideoList' >
          <VideoList fileData={data} searchData={userInput} getVidKey={getVidKey}/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
