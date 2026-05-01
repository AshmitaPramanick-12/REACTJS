import React, { useEffect, useState } from 'react'

const App = () => {


  // function random(){
    // const a=Math.random()
    // console.log("helllo");
    // console.log(a);
    
    
  // }


  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    console.log('useEffect is running...');
    
  },[num])
  // passing dependency ka array so components get mount but by one
  return (
    <div>
      <h1>value of num is {num}</h1>
      <h1>value of num2 is {num2}</h1>
      <button 
      onMouseEnter={()=>{
          // setnum(10)
          setnum(num+1) // mounting
          // setnum2(num2+100) // mounting
      }}
      onMouseLeave={()=>{
        setnum2(num2+10)
      }}
      >Hover
      </button>


    </div>
  )
}

export default App
