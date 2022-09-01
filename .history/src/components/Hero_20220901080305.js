import React from 'react'
import {heroData} from '../data'
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
   <button class>{btnText}</button>
     </div>
    </section>
  )
}

export default Hero