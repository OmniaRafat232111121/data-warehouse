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
       </div>
       </div>
      </section>
 );
};

export default Features;
