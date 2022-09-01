import React from 'react';

// import navigation data
import { navigationData } from '../data';

const Nav = () => {
  return (
    <nav>
     <ul className='flex gap-x-8'>
     {
      navigationData.map((ite))
     }
     </ul>
    </nav>
  );
};

export default Nav;