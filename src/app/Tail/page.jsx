"use client"
import React from 'react'

export default function Tail() {
  return (
    <div className='w-full text-sm lg: h-[7rem] flex justify-center items-center'>
      © 2024 <div className='flex items-center justify-center '><div className='flex items-center'>
            <div className='size-6'>
      <img className='w-full' src="/images.png" alt="" /> 
            </div>
            <div className=' font-semibold'> ETFLIX</div>
        </div></div> . All Rights Reserved. by <p className='ms-2 hover:cursor-pointer hover:text-red-500' onClick={()=>{window.location.href = "https://www.linkedin.com/in/zyad-magdy22"}} > Zyad Magdy</p>
    </div>
  )
}



