import React, { useEffect, useState } from 'react'

const App2 = () => {

    const [A, setA] = useState(0)
    const [B, setB] = useState(0)

    function achanging(){
        console.log('A is value change ho gayi');
        
    }
    function bchanging(){
        console.log('B is value change ho gayi');

    }

    useEffect(function(){
        achanging()
        // console.log(' Use effect is running.....');
        
    },[A] 
        // [A,B]
        )

    useEffect(function(){
        bchanging()
        // console.log(' Use effect is running.....');
        
    },[B] )

  return (
    <div>

        <h1>A is {A}</h1>
        <h1>B is {B}</h1>
        <button
        onClick={()=>{
            setA(A+1)
            
        }}
        >Change A</button>
        <button
           onClick={()=>{
            setB(B-1)
            
        }}
        >Change B</button>
    </div>
  )
}

export default App2
