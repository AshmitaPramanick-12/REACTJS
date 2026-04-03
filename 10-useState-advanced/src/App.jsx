import React, { useState } from 'react'

const App = () => {


  const [num,setnum]=useState(10)
  const [user, setuser] = useState({user:'ashmita',age:21})
  const [Arrray, setArrray] = useState([1,5,8])
  const [Naam, setNaam] = useState({user:'Rishi',age:17})
  const btnClicked=()=>{
    //   setnum(num) 
    // //--> if u print it will not print anything on console as react avoid doing same thing twice
    // console.log(num);
      setnum(20);
      
      // console.log(num);//asynchorous process 
      // console.log(user);




      const newuser={...user};
      newuser.user='Aman';
      newuser.age=29;
      setuser(newuser)


      const newArrray=[...Arrray];
      newArrray.push(38);
      // console.log(newArray);
      setArrray(newArrray)



      setNaam(prev=>({...prev,age:50}))
      


      // setnum(num+1)
      // setnum(num+1)//batchupdate in react
      // setnum(num+1)
      setnum(prev=> (prev+1))
      setnum(prev=> (prev+1))
      setnum(prev=> (prev+1))
    }
  return (
    <div>
      <h1>{num}</h1>
      <h1>{user.user},{user.age}</h1>
      <h1>{Arrray}</h1>
      <h1>{Naam.user},{Naam.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
