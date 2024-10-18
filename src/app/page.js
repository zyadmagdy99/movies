import React from 'react'

import Welcome from './Welcome/page'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topmovies from './Topmovies/page';
import Shows from './Shows/page';
import Popular from './Popular/page';
import Playing from './Playing/page';
import Coming from './Coming/page';

export default function page() {
  
  return (
    <div className='flex flex-col gap-6'>
      
      <Welcome />
      <Topmovies classname="mt-5"/>
      <Shows classname="mt-5"/>
      <Popular classname="mt-5"/>
      <Playing classname="mt-5"/>
      <Coming classname="mt-5"/>
    </div>
  )
}
