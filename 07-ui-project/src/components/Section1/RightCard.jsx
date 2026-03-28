import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div 
      className='relative h-full w-72 shrink-0 rounded-3xl overflow-hidden'
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <RightCardContent color={props.color} id={props.id + 1} tag={props.tag}/>
    </div>
  )
}

export default RightCard