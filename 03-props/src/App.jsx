import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
    
      <Card user='Aman' age={80} img='https://images.unsplash.com/photo-1766179031087-088a7d0e9ae3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Ashmita' age={21} img='https://plus.unsplash.com/premium_photo-1765164894633-a9a920ee08b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4MnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
      <Card user='DISHA' age={18} img='https://images.unsplash.com/photo-1743105351262-3f9e6944920a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
      
    </div>
  )
}

export default App
