import React from 'react'
import axios from 'axios'
const App = () => {

  // const arr=[12,23,34];
  // const arr=[
  //   {
  //     user:'sarthak',
  //     age: 30
  //   },
  //   {
  //     user:'ashmita',
  //     age:21
  //   }
  // ]

  // so data we got from api is in JSON format 
// How React Gets Data from API

// Usually React calls APIs using:

// fetch()
// axios

//What is an API?

// An API (Application Programming Interface) is a way for the frontend and backend to communicate.


// React Frontend
//    ↓
// Calls API
//    ↓
// Backend Receives Request
//    ↓
// Backend Fetches Data from Database
//    ↓
// Backend Sends JSON Response
//    ↓
// React Stores Data in State
//    ↓
// UI Updates and Displays Data


//Why Use Axios Instead of Fetch?

// Automatic JSON parsing
// Better error handling
// Supports interceptors
// Cleaner syntax
// Handles request/response transformation

//JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format used to exchange data between frontend and backend. JSON can contain objects, arrays, strings, numbers, booleans, and null values.
  const getData=()=>{
    console.log('data aa gaya');
    
  }
  return (
    <div className='bg-black h-screen p-4  text-white'>
      <button 
      onClick={getData}
      className='bg-green-600  active:scale-95  mb-3  px-5 py-2 rounded text-white'>
        Get data
        </button>
    </div> 
  )
}

export default App
