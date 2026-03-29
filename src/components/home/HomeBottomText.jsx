import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-8'>
      <Link to='/projects' className='border-4 leading-[6vw] border-white rounded-full text-[5.5vw] px-8' > Projects </Link>
      <Link to='/contact' className='border-4 leading-[6vw] border-white rounded-full text-[5.5vw] px-8' > Contact </Link>
    </div>
  )
}

export default HomeBottomText