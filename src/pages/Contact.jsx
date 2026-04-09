import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",

  ]

  gsap.registerPlugin(ScrollTrigger)
    
  useGSAP(function(){

    gsap.to(imageDivRef.current,{

      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:'top 10%',
        end:'top -70%',
        pin:true,
        onUpdate:(elem) => {
          let imageIndex;
          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
 
 
 return (
<div>
  <div className='section1'>
  <div ref={imageDivRef} className=' absolute overflow-hidden h-[20vw] rounded-3xl left-[30vw] w-[15vw] top-40'>
    <img ref={imageRef} className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="" />
  </div>
      <div className='relative font-[font2]'>
      <div className='mt-[50vh]'>
        <h1 className='text-[15vw] text-center uppercase leading-[15vw]'>Contact</h1>
      </div>
      <div className='pl-[50%] mt-20' >
        <p className='text-6xl w-1/2'>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quasi quos possimus facilis delectus magnam iusto culpa ab dolores.</p>
      </div>
    </div>
</div>
<div className='section2 h-screen'>

</div>
</div>
  )
}

export default Contact 