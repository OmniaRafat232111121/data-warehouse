import React from 'react';
import {aboutData} from "../data"
const About = () => {
  const {image,title,subtitle}=aboutData;
  return(
 <section>
 <div className='container mx-auto'>
<div>
<img src={image}/>
</div>
<di
 </div>
 </section>
  );
};

export default About;
