import React from 'react'



const App2 = () => {
// scroll event function
    const pagescrolling=()=>{
        console.log('page scrolling.....'); 
    }
    // or   
    const pagescrolling1=(val)=>{
        // console.log('page scrolling 1..... at speed',val);
        if(val>0){
            console.log('seedha scrolling');
        }// scroll direction check
        else{
            console.log("ulta scrolling");
        }
    }
  return (
    <div> 
      <div onMouseMove={(elem)=>{  {/* mouse move event (tracking cursor) */}
        // console.log("nachooooooooooo");
        console.log(elem);
        console.log(elem.clientX);
        console.log(elem.clientY);

      }} className='box'></div>

    <div onWheel={pagescrolling}>    {/* basic scroll event */}
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
      </div>

      {/* or */}

    <div onWheel={(elem)=>{      {/* scroll with direction detection */}
        // console.log(elem)
        // console.log(elem.deltaY)
        // pagescrolling1(elem)
        pagescrolling1(elem.deltaY)
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
      </div>
    </div>
  )
}

export default App2
