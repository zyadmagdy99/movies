"use client"
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";


export default function Shows() {

  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    
    slidesToScroll: 2,
    autoplay:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        }
      }
    ]
  };

    const [movies, setmovies] = useState([])
   async function getMovies(){
    await axios.get(`http://www.omdbapi.com/?apikey=eb5e937e&s=shows`)
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
        <div> 
        <h1 className= "text-3xl p-3 px-5 font-semibold">
        Top Rated TV Shows
      </h1></div>
       <Slider  {...settings}>
      {movies.map((movie)=> <Link href={`single/${movie.imdbID}`} key={movie.imdbID} className='px-4 h-[15rem]'>
        <img className='w-full' src={movie.Poster} alt="" />
      </Link>
      )}
    </Slider>
    </div>
  )
}
