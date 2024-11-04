import React from 'react'

const Card = ({item}) => {
  return (
    
    <div className='rounded-3xl p-10 bg-white text-black'>
        <a href={item.link}>
        <img src={item.image} alt="" className='w-full' />
        <p>{item.title}</p>
        <p>{item.about}</p>
        </a>  
    </div>
  )
}

export default Card
