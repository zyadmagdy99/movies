"use client"
import { setsearch } from '@/lib/search';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiAlignCenter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

export default function Nav() {
    let {search} = useSelector((state)=>state.search)
    let dispatch = useDispatch()
    function handlesearch(e){
        dispatch(setsearch(e.target.value))
        
        console.log(search);
        
       }
       const [hide, sethide] = useState(null)
       const [flex, setflex] = useState(null)
       function handleNav(){
            sethide("hidden")
            setflex("flex")
       }
       function handlex(){
        sethide("flex")
        setflex("hidden")
       }
  return (
    <>
    <div className='fixed top-0 right-0 bg-[#00000086] left-0 p-5 flex justify-between z-10'>
        <Link href="/" className={`flex items-center ${hide}`}>
            <div className='size-8'>
      <img className='w-full' src="/images.png" alt="" /> 
            </div>
            <div className='text-2xl font-semibold'> ETFLIX</div>
        </Link>
        <div>
        <div className='hidden lg:flex items-center translate-x-[-10rem] gap-4'>
                <div className='flex gap-4 px-3'>
                    <Link href="/" className='text-xl font-semibold hover:cursor-pointer hover:text-red-500'>Home</Link>
                    <Link href="/contact" className='text-xl font-semibold hover:cursor-pointer hover:text-red-500'>Contact</Link>
                    <Link href="/payment" className='text-xl font-semibold hover:cursor-pointer hover:text-red-500'>Subscribe</Link>
                   
                </div>
                <Link href="/Search" className='bg-white flex  h-[2rem] rounded-2xl px-3'> <input value={search} onChange={handlesearch} className='w-full h-full outline-none text-black' placeholder='Search...' type="text" /></Link>
                <div className='p-3 flex gap-3 text-xl items-center'>
                    <Link href="login" className='hover:cursor-pointer hover:text-red-500'>Login</Link>
                    <p className='text-3xl text-red-500'>|</p>
                    <Link href="register" className='hover:cursor-pointer hover:text-red-500'>Register</Link>
                </div>
            </div>
        </div>
        <div className='flex lg:hidden'>
        <FiAlignCenter onClick={handleNav} className={`text-3xl ${hide}`} />
        </div>
    </div>
    <div className={`${flex} ${flex?null:"hidden"}  flex-col p-5 `}>
            <div onClick={handlex} className='z-50 flex justify-end text-3xl'><IoMdClose />            </div>
            <div className='flex flex-col gap-4'>
            <div className='flex items-center'>
            <div className='size-10'>
      <img className='w-full' src="/images.png" alt="" /> 
            </div>
            <div className='text-3xl font-semibold'> NETFLIX</div>
        </div>
                <div className='flex flex-col gap-4 px-3'>
                <Link href="/" className='text-xl font-semibold hover:cursor-pointer hover:text-red-500'>Home</Link>
                    <Link href="/contact" className='text-xl font-semibold hover:cursor-pointer hover:text-red-500'>Contact</Link>
                    <Link href="/payment" className='text-xl font-semibold hover:cursor-pointer hover:text-red-500'>Subscribe</Link>
                   
                </div>
                <div className='bg-white flex  h-[2rem] rounded-2xl px-3'> <input className='w-full h-full outline-none text-black' placeholder='Search..' type="text" /></div>
                <div className='p-3 flex gap-3 text-xl items-center'>
                    <Link href="login" className='hover:cursor-pointer hover:text-red-500'>Login</Link>
                    <p className='text-3xl text-red-500'>|</p>
                    <Link href="register" className='hover:cursor-pointer hover:text-red-500'>Register</Link>
                </div>
            </div>
    </div>
    </>
  )
}
