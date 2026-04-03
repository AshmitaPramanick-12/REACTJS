import React from 'react'

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    // in orderto avoid default behaviour of form 
    console.log("Form submitted")
  }
  return (
    <div>
    {/* <form onSubmit={submitHandler}> */} 
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>

      <input type="text" placeholder='Enter your name '/>
      <br />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App
// but  we are writing input directly to website here also ...but we have to consider 
// react to do it for us..here comes a concept of two way binding.
