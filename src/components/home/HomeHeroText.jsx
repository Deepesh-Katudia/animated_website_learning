import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center ' >
      <div className='text-[5vw] uppercase leading-[5vw] justify-center flex items-center' >Hi! I am Deepesh Katudia</div>
      <div className='text-[4vw] uppercase leading-[5vw] justify-center flex items-start' >Building Scalable <div className='h-[4.5vw] w-[12vw] rounded-full overflow-hidden'><Video /></div> Full-Stack Systems</div>
      <div className='text-[5vw] uppercase leading-[5vw] justify-center flex items-center' >powered by intelligent Systems and Real-world impact</div>
    </div>
  )
}

export default HomeHeroText