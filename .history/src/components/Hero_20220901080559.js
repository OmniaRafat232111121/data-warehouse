import React from 'react'
import {heroData} from '../data'
import image from '../assets/img/hero-img.png'
const Hero = () => {
  //desturcutre of hero Data
  const {title,subtitle,btnText,image}=heroData;

  return (
    <section classname="py-12 lg:h-[900px]">
      <div className='container mx-auto'>
 <div>
      {/*text*/}
 </div>
 <h1 className='h1 xl:max-w-[700px] mb-6 xl:mb-12'>{title}</h1>
  <p className='lead xl:max-w-[300px] lg:mb-12'>{subtitle}</p> 
   <button className='btn btn-primary mb-8 xl:mb-0'>{btnText}</button>
     </div>
     {/*image*/}
     <img src={image}/>
    </section>
  )
}

export default Hero