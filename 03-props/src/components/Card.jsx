import React from 'react'

const Card = (amannn) => {
    console.log(amannn);
    console.log(amannn.user);
    console.log(amannn.age);
    console.log(amannn.user,amannn.age);
  return (
    <div>
         
      <div className='card'>
        <img src={amannn.img} alt="" />
        <h1>{amannn.user},{amannn.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
