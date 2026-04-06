import React from 'react'

const App = () => {
  //   localStorage.clear() 
  //   sessionStorage.clear() 
   localStorage.setItem('user','Ashmita')
   localStorage.setItem('Age','21')
  //  const user= localStorage.getItem('user');
  //  const age= localStorage.getItem('Age');
  //  console.log(user);
  //  console.log(age);
  //  console.log(user,age);
    //  localStorage.clear() 
    // localStorage.removeItem('user')






    const user1={
          username:'Ashmita',
          age:21,
          city:'Kolkata'
    }

    // console.log(user1);
    // localStorage.setItem('user1',user1) -->  value should be store string form in key value pair
    // object into string ,convert

    

    // in order to store object or array of object
    localStorage.setItem('user1',JSON.stringify(user1))
    // this will store object  as string form 


    const ans= localStorage.getItem('user1');
    // console.log(ans);
    console.log(typeof(ans));// this is string
    // again convert to original form i.e into object use
   const original=JSON.parse(localStorage.getItem('user1'))// rectify again 
   console.log(original);
   console.log(typeof(original));//this is object
   
  return (
 <div>App

 </div>
  )
}

export default App
