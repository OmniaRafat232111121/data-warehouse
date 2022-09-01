import React from 'react';
import {featuresData} from "../data"
//import icons 
import { BsArrowRight } from 'react-icons/bs';
const Features = () => {
  const {title,subtitle,list}=featuresData
 return(
      <section className='my-[70px] xl:my-[150px]'>
       <div className='container mx-auto'>
       <div className='text-center'>
       <h2 className='h2 mb-6 xl:mb-12' 
        data-aos='fade-down'
       data-aos-delay='100'>
       {title}
       </h2>
       <p
            className='lead max-w-[584px] mx-auto mb-16 xl:mb-24'
            data-aos='fade-down'
            data-aos-delay='400'
          >
            {subtitle}
          </p>
       </div>
       </div>
       
      </section>
 );
};

export default Features;
