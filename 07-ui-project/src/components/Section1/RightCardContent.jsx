import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between bg-black/30'>
      
      <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>
        {props.id}
      </h2>

      <div>
        <p className='text-xl leading-relaxed text-white mb-6'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>

        <div className='flex items-center gap-3'>
          <button style={{backgroundColor: props.color}} className='text-white font-medium px-8 py-3 rounded-full text-lg'>
            {props.tag}
          </button>

          <button className='text-white font-medium px-4 py-3 shrink-0 rounded-full text-lg border border-white'>
            <i className='ri-arrow-right-line'></i>
          </button>
        </div>
      </div>

    </div>
  )
}

export default RightCardContent