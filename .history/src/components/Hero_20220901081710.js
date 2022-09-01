import React from 'react'
import {heroData} from '../data'
const Hero = () => {
  //desturcutre of hero Data
const {title,subtitle,btnText,image}=heroData;
  return (
    <section classname="py-12 lg:h-[900px]">
      <div className='container mx-auto h-full relative'>
       <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
      {/*text*/}
     </div>
     <div>
   <h1 className='h1 xl:max-w-[700px] mb-6 xl:mb-12'>{title}</h1>
   <p className='lead xl:max-w-[380px] lg:mb-12'>{subtitle}</p> 
   <button className='btn btn-primary mb-8 xl:mb-0'>{btnText}</button>
   </div>
     {/*image*/}
    <div className="xl-absolute xl:-right-12 xl:bottom-16">
    <img src={image} alt=""/>
    </div>
    </section>
  )
}

export default Hero