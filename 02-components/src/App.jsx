import React from 'react'
import Card from'./components/Card'
import Navbar from './components/navbar'
const App = () => {
  const user='Ashmita'
  const age=21
  return (
    <div >
     
    <Navbar/>
    <Navbar/>
      <div className='card'>
        
    <Card />
    <Card />
        <h1>HELLO I AM user</h1>
        <h1>HELLO I AM {user}</h1>
        <h2>and I AM {age} years old</h2>
      </div>
    </div>
  )
}

// export default App
export default Navbar 
