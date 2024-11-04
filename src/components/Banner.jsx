import React from 'react'
import banner_image from '../assets/portfolio.png' 
const Banner = () => {
  return (
    <div className='flex flex-col-reverse  md:grid grid-cols-2 md:px-10 py-5'>
      <div className='flex justify-center  items-center'>
        <div className='w-2/3 pt-10'>
        <p className='text-xl '>Hello ,</p>
        <h2 className='text-4xl font-bold py-3'>I AM VINAY</h2>
        <p className='py-2 texr-xl'>A detail-oriented fresher with strong foundation in frontend development, proficient in HTML, CSS, JavaScript , Bootstrap and React.js. Eager to contribute to a dynamic team, create visually appealing, user-friendly, and  responsive interfaces to drive organizational success.</p>
        <button className='px-5 py-2 bg-gradient-to-t from-purple-500 to-pink-500 rounded-xl' >Hire me</button>
        </div>
      </div>
      <div className='rounded flex justify-center'>
        <img src={banner_image} alt="my image protrait image " className="w-2/3 rounded-3xl overflow-hidden"  />
      </div>
    </div>
  )
}

export default Banner
