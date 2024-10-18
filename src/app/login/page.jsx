import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
  return (
    <div className='h-screen flex justify-center items-center'>

      <div className='bg-[#171717] flex flex-col w-[95%] max-w-[35rem] gap-7 rounded-3xl justify-center items-center min-h-[25rem]'>
            <p className='text-2xl'>Login</p>
            <div className='flex flex-col gap-3'>
            <div className='username rounded-3xl shadow-inner shadow-black flex gap-3 px-5 py-2 items-center'>
            <FaUserAlt />
                <input className='w-full h-full bg-[#171717] outline-none' placeholder='Username' type="text" />
                 </div>    
            <div className='username rounded-3xl shadow-inner shadow-black flex gap-3 px-5 py-2 items-center'>
            <RiLockPasswordLine />
            <input className='w-full h-full  bg-[#171717] outline-none' placeholder='Password' type="text" />
                 </div>    
                
            </div>   
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                    <button className='bg-[#252525] max-w-[130px] rounded-lg px-[3rem] py-3 hover:cursor-pointer hover:bg-red-500'>Login</button>
                    <button className='bg-[#252525] max-w-[130px] flex justify-center items-center rounded-lg px-[3rem] py-3 hover:cursor-pointer hover:bg-red-500'>Register</button>
                </div>
                <p className='text-center underline text-sm hover:cursor-pointer hover:text-red-500'>Forget Password</p>
                </div>     
      </div>
    </div>
   
  )
}
