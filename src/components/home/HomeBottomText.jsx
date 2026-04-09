import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
    <div className='border-4 leading-[6vw] border-white rounded-full text-[5.5vw] px-10 mb-2 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
      <Link to='/projects' className='text-[6vw] mt-6'  > Projects </Link>
      </div>
      <div  className='border-4 leading-[6vw] border-white rounded-full text-[5.5vw] px-10 mb-2 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
      <Link to='/contact' className='text-[6vw] mt-6' > Contact </Link>
    </div>
    </div>
  )
}

export default HomeBottomText