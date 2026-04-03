import React from 'react'
import { useState } from 'react'

const App = () => {
  const [Topic, setTopic] = useState('')


  const submitHandler=(e)=>{
    e.preventDefault()
    // in order to avoid default behaviour of form 
    console.log("Form submitted by",Topic);

    setTopic('');
  }
  return (
    <div>
    {/* <form onSubmit={submitHandler}> */} 
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>

      <input type="text" placeholder='Enter your name ' value={Topic} onChange={(f)=>{
        // console.log('Inputing.....');
        // console.log(f);
        // console.log(f.target);
        // console.log(f.target.value);
        setTopic(f.target.value);
        
      }}/>
      <br />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App
// but  we are writing input directly to website here also ...but we have to consider 
// react to do it for us..here comes a concept of two way binding.
