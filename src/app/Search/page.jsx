"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


export default function search() {
let {search} = useSelector((state)=>state.search)
  
 

    const [movies, setmovies] = useState([])
    
    async function getMovies(search){
        await axios.get(`https://www.omdbapi.com/?apikey=eb5e937e&t=${search || "top"}`)
            .then((res)=>{ setmovies(res.data)
            console.log(res.data)
            }
        )
    
        }
    useEffect(() => {
      
    getMovies(search)
    }, [search])
    
    return (
      <div>
        
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-[5rem] items-center overflow-hidden'>
        <div className='lg:w-1/2 w-full lg:max-w-[40rem]'>
    
    
      <div className='w-full lg:h-[43rem] flex justify-center items-center'>
        <img className ='w-[30rem] object-cover' src={movies.Poster} alt="" />
      </div>
    
    
    
        </div>
        <div className='flex flex-col gap-8 justify-center px-3 items-center lg:items-start max-w-[40rem]'>
        <div className='flex text-2xl flex-col gap-4 lg:text-2xl'>
      <div className='flex justify-between items-center'>
        {movies.Title}
        
         </div>
      <p >{movies.Year} </p>
      <p className='text-red-500'>{movies.Genre} </p>
      <p>{movies.Country} </p>
     
     
    </div>
          <p className='text-[#ffffff67] p-2  text-center lg:text-start'>{movies.Plot}
          </p>
    </div>
        
      </div>
      </div>
      )
}