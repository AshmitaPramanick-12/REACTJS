import axios from 'axios'
import React, { useState } from 'react'

const App2 = () => {

  const [data, setdata] = useState([])

  const getData= async()=>{
   
   const response2= await axios.get('https://picsum.photos/v2/list')

    console.log(response2);
    console.log(response2.data);

    setdata(response2.data)
    
  }
  return (
    <div>
     <button onClick={getData}>Get data2</button>
    <div>
      {data.map(function(elem,idx){
        return <h3>helloo ,{elem.author} {idx}</h3>
      })}
    </div>
    </div>
  )
}

export default App2
