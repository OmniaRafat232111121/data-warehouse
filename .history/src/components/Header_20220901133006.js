import React,{useState} from 'react';
import Logo from "../assets/img/logo.png"
import Nav from "../components/Nav"
import NavMobile from "../components/NavMobile"

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
return(
<header className='mb-12 lg:mb-0 z-20 relative px-4 lg:p'>
<div className='container mx-auto'>
<div>
{/*logo*/}
<a href="#">
<img src={Logo} alt=" "/>
</a>
</div>
{/*nav show in large screen */}
<div>
<Nav  className="hidden lg:flex"/>
</div>
<div className='lg-hidden'>
<NavMobile/>
</div>

<button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
Request Demo
<BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
</button>
 {/* nav trigger btn / only shows on mobile screens */}
 <div
 className='text-2xl text-primary cursor-pointer lg:hidden'
>
 <FaBars />
</div>
</div>
</header>
)
};

export default Header;
