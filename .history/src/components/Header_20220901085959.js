import React,{useState} from 'react';
import Logo from "../assets/img/logo.png"
import Nav from "../components/Nav"
import NavMobile from "../components/NavMobile"

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
return(
<header>
<div className='container mx-auto'>
<div>
{/*logo*/}
<a href="#">
<img src={Logo} alt=" "/>
</a>
</div>
{/*nav show in large screen */}
<div>
<Nav  classN/>
</div>
</div>
</header>
)
};

export default Header;
