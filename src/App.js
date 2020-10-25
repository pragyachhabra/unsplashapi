import React,{ useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("")
  const [results,setResult]=useState([])
  // const [sname,setSN]=useState("lakshman")
  const fetchimages =()=>{
   fetch(`https://api.unsplash.com/search/photos?client_id=YOUR_ACCESS_KEY&query=${value}&orientation=squarish`)     
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResult(data.results)

    })
  }
  // useEffect(()=>{
  //   newjoke(fname,sname)
  // },[fname,sname])
  return (
    <div className="App">
          <div className="mydiv">

            <span>Search:</span>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
       <button onClick={()=>fetchimages()}>Send</button>
      </div>
      <div className="gallery">
        {results.map((item)=>{
          return<img className="item" key={item.id}src={item.urls.regular}/>

        })}
      </div>
    </div>
  );
}

export default App;
