import React, { useState } from 'react'

const App2 = () => {

    const [num, setnm] = useState(2);

    function increase(){
            // console.log('increase');
            setnm(num+1)
        }
        
        function decrease(){
            // console.log('decrease');
            setnm(num-1)
         }

         function jumpby5(){
            setnm(num+5)
         }
  return (
    <div>
        <h1 className='H'>{num}</h1>
      <button onClick={increase}> increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jumpby5}>Jump by 5</button>
    </div>
  )
}

export default App2
