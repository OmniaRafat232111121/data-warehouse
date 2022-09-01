import React from 'react';
import {aboutData} from "../data"
const About = () => {
  const {image,title,subtitle}=aboutData;
  return(
 <section className='my-[30px] '>
 <div className='container mx-auto'>
<div>
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
