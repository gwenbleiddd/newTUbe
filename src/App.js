import Search from './components/Search'
import VideoPlayer from './components/VideoPlayer'
import VideoList from './components/VideoList'
//import {useState ,useEffect } from 'react'
//import data from './data.json'
import data from './exampleVideoData.json'
import { useState } from 'react'

function App() {
  const[userInput,setUserInput] = useState('balls');
  // const[word,setWord] = useState('nigga');
  // function onclick(){
  //   return setWord(userInput);
  // }
  const getSearchData = (data) =>{
    setUserInput(data)
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
          <VideoPlayer fileData={data}/>
        </div>
      </div>
      <div className="Right">
        <div className='VideoList'>
          <VideoList fileData={data} searchData={userInput}/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
