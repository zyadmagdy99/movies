"use client"
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

export default function Welcome() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        
        arrows: false
      };

    const [movies, setmovies] = useState([])
   async function getMovies(){
    await axios.get(`http://www.omdbapi.com/?apikey=eb5e937e&s=action`)
        .then((res)=>{ setmovies(res.data.Search)
        console.log(res.data.Search)
        }
    )

    }
    useEffect(() => {
      
    getMovies()
    }, [])
    
  return (
    <div>
   {movies.length > 0 ?<div className='flex flex-col lg:flex-row gap-5 lg:gap-[5rem] items-center '>
      <div className='lg:w-1/2 w-full'>
  <Slider {...settings}>
  {movies.map((movie) => (
    <Link href={`single/${movie.imdbID}`} key={movie.imdbID} className='w-full lg:h-[43rem] flex justify-center items-center'>
      <img className='w-full  object-contain' src={movie.Poster} alt={movie.Title} />
    </Link>
  ))}
</Slider>

      </div>
  <div className='flex flex-col gap-8 text-center'>
  <div className='flex items-center justify-center text-2xl lg:text-6xl'>Welcome to  <div className='flex items-center'>
            <div className='size-8 lg:size-16'>
      <img className='w-full' src="/images.png" alt="" /> 
            </div>
            <div className='lg:text-6xl font-semibold'> ETFLIX</div>
        </div></div>
        <p className='text-[#ffffff67] lg:text-2xl'>Millions of movies, TV shows and people to discover. Explore now.
        </p>
  </div>
    </div> :  <div className=' w-screen h-screen flex justify-center items-center'>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>

    </div> 
  }
    
    </div>
  )
}
