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
       <h2 className='h2 m'>
       {title}
       </h2>
       </div>
       </div>
      </section>
 );
};

export default Features;
