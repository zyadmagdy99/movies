import Link from 'next/link';
import React from 'react'


export default function Login() {
  return (
    <div className='h-screen flex justify-center items-center'>

      <div className='bg-[#171717] flex flex-col w-[95%] max-w-[35rem] p-5 gap-7 rounded-3xl justify-between min-h-[25rem]'>
            <p className='text-2xl text-red-500'>Register</p>
            <p>Signup now and get full access to our app.</p>
            <div className='flex gap-3 justify-center'>
            <div className='username rounded-3xl w-full bg-white shadow-inner shadow-black flex gap-3 px-5 py-2 items-center'>
                <input className='w-full h-full  outline-none' placeholder='First name' type="text" />
                 </div>    
            <div className='username rounded-3xl w-full bg-white shadow-inner shadow-black flex gap-3 px-5 py-2 items-center'>
            <input className='w-full h-full outline-none' placeholder='Last name' type="text" />
                 </div>    
                
            </div>   
            <div className='flex flex-col gap-6 justify-center '>
              
            <div className='username rounded-3xl bg-white shadow-inner w-full shadow-black  px-9 py-2 '>
            <input className='w-full h-full outline-none' placeholder='Email' type="text" />
                 </div>    
            <div className='username rounded-3xl bg-white shadow-inner w-full shadow-black  px-9 py-2 '>
            <input className='w-full h-full outline-none' placeholder='Password' type="text" />
                 </div>    
            <div className='username rounded-3xl bg-white shadow-inner w-full shadow-black  px-9 py-2 '>
            <input className='w-full h-full outline-none' placeholder='Confirm password' type="text" />
                 </div>    
                
            </div>   
           
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3 w-full'>
                    <button className='bg-[#252525] w-full rounded-lg px-[3rem] py-3 hover:cursor-pointer hover:bg-red-500'>Submit</button>
                </div>
                <p className='text-center underline text-sm '>Already have an acount ? <Link className='hover:cursor-pointer text-red-500' href="/login">Login</Link></p>
                </div>     
      </div>
    </div>
   
  )
}
