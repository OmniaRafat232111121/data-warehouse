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
 <h1 className='h1'>{title}</h1>
      </div>
    </section>
  )
}

export default Hero