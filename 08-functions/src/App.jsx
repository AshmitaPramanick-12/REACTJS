
import React from 'react'

const App = () => {
// normal function for click event
 function btnclick(){
    console.log('button is clicked');
  }
// let make anaother function for anaother event ,making function normally
  function mouseentered(){ // function for mouse enter event
    console.log("mouse is entered");
  }




  // function inputChanging(){
  //   console.log('User is typing');
  // }
//  or
  function inputChanging(val){// function receiving value from input
    console.log(val);// value is recieved in event button using elem
  }
  return (
    <div>{/* onClick + onMouseEnter event */}
      <button onMouseEnter={mouseentered} onClick={btnclick}>Click here</button>
      <button onDoubleClick={btnclick}>Click here double</button>

      {/* or  ----> function used run without clicking i.r btnclick()*/   }
      {/* <button onDoubleClick={btnclick()}>Click here double</button> */}
       {/* ❌ wrong way → runs immediately */}
      {/* <button onDoubleClick={btnclick()}>Click</button> */}



      <button onMouseEnter={mouseentered}>Explore this</button>
     

       {/* or another way of writing function without declaring outside */}
        {/* inline function (no separate function needed) */}
       <button onClick={function(){
          console.log("Hello where function defined in event itself,arrow function");
       }}>CLICK ME</button>


         {/* arrow function inside event */}
        <input onChange={()=>{
          console.log("user is typing"); 
          //  we can do it like or or creating diff function 

        }}type="text" placeholder='Enter your name' />


        {/* <input onClick={function(elem){ */}
        <input onChange={function(elem){
          // console.log(elem)
          // console.log(elem.target)
          console.log(elem.target.value)    
          {/* accessing event object */}
        }}type="text" placeholder='enter'/>




          {/* passing value to another function */}
          <input onChange={function (elem){
            inputChanging(elem.target.value);
            // inputChanging();
          }} type="text" placeholder='ENTER'/>

        
    </div>
  )
}

export default App


