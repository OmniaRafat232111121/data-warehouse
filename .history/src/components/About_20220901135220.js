import React from 'react';
import {aboutData} from "../data"
const About = () => {
  const {image,title,subtitle}=aboutData;
  return(
 <section className='my-[30px] xl:mt-[100px]'>
 <div className='container mx-auto'>
<div className='bg-accent-secon'>
<img src={image}/>
</div>
<div>
<h2>{title}</h2>
<p>{subtitle}</p>
</div>
 </div>
 </section>
  );
};

export default About;
