import axios from 'axios'
import React from 'react'

const App = () => {


  // function getData(){
  //   console.log('Data aa gaya');
  //   const response=fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
    
  // }// this will show pending as it i.e js  become asynchornous in api 

  //  async function getData(){
  //   console.log('Data aa gaya');
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  
  // }
  
  // const getData= async()=>{
    
  //   // const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   // const response= await fetch('https://jsonplaceholder.typicode.com/todos')
  //   const response= await fetch('https://jsonplaceholder.typicode.com/users')
     
  //   const data =  await response.json();
  //   console.log(data);
  //   // console.log(response.json());
  // }
  const getData= async()=>{
  //console.log('nacho');
   const response= await axios.get('https://jsonplaceholder.typicode.com/users')
   //or
   const {data}= await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    // or
    console.log(data);
      
  
  }
  

  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App
