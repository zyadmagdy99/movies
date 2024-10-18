"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Single() {
  let params = useParams()
    const [movies, setmovies] = useState(null)

 async function movie(id){
   await axios.get(`https://www.omdbapi.com/?apikey=eb5e937e&i=${id}`)
    .then((res)=>{ setmovies(res.data)
        console.log(res.data)
        })
 }
 
 const rottenTomatoesRating = movies?.Ratings?.[1]?.Value;

 useEffect(() => {
   let { id } = params
 movie(id)
 }, [])
 

  return (
<div>
  {movies ? (
    <div className='flex flex-col lg:flex-row gap-5 lg:gap-[5rem] items-center overflow-hidden'>
      <div className='lg:w-1/2 w-full lg:max-w-[40rem]'>
        <div className='w-full lg:h-[43rem] flex justify-center items-center'>
          <img className='w-[30rem] object-cover' src={movies.Poster} alt="" />
        </div>
      </div>

      <div className='flex flex-col gap-8 justify-center px-3 items-center lg:items-start max-w-[40rem]'>
        <div className='flex text-2xl flex-col gap-4 lg:text-2xl'>
          <div className='flex justify-between items-center'>
            {movies.Title}
            <p className='rounded-full border-2 p-2 text-sm border-red-600'>
              {rottenTomatoesRating || "Rating not available"}
            </p>
          </div>
          <p>{movies.Year}</p>
          <p className='text-red-500'>{movies.Genre}</p>
          <p>{movies.Country}</p>
        </div>
        <p className='text-[#ffffff67] p-2 text-center lg:text-start'>
          {movies.Plot}
        </p>
      </div>
    </div>
  ) : (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )}
</div>

  )
}
