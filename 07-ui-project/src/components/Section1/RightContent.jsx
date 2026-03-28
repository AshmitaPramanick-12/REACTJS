import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent = (props) => {
  console.log(props.users.color);
  return (
    <div id='right' className='h-full p-6 rounded-4xl shrink-0 overflow-x-auto flex flex-nowrap  flex-1 gap-10 m-4 '>
      {/* RightContent */}
   {props.users.map(function(elem,idx){
       return <RightCard key={idx} color={elem.color}id={idx} img={elem.img} tag ={elem.tag}/>
   })}
  
    
    </div>
  )
}

export default RightContent
