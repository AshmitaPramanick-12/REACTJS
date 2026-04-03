import React, { useState } from 'react'

const App = () => {

//  let  a=20;

//   function ChangeA(){
//     console.log(a);
//     // a=30;
//     a++;   
// //---> it is going to print in console not in screen
//// so we are going to use usestate
//     console.log(a);
  // }

  // so if we wantto change by ourself own thing get re-render 
  // but using usestate 

const [a, seta] = useState(10);
const [name, setname] = useState('ashmita');
const [Users, setUsers] = useState([100,200,300,400])
 function changeA(){
  seta(22);
  setname('barbie');
  setUsers([500,600,700])
 }


  return (
    <div>


      {/* <h1>Value of a is {a}</h1>
      <button onClick={ChangeA}> Click</button> */}

      <h1>Value of a is {a} <br /> Name of user: {name}</h1>
      <h1><br />Array: {Users} </h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}

export default App
