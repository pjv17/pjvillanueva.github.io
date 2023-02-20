import React from "react";
import './styles/Header.scss'; 
import { Link } from 'react-router-dom';
import pjlogo from './assets/image/PJ Logo.png'

const Header = () => {

var nav = document.getElementById('site-menu');
var header = document.getElementById('top');

window.addEventListener('scroll', function() {
  if (window.scrollY >=400) { // adjust this value based on site structure and header image height
    nav.classList.add('nav-sticky');
    header.classList.add('pt-scroll');
  } else {
    nav.classList.remove('nav-sticky');
    header.classList.remove('pt-scroll');
  }
});

/*
in progress
function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}*/

    return (
        <div id="top-header" className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
            <div className="container">
                <nav id="site-menu" className="flex flex-col sm:flex-row w-full sm:justify-between justify-center items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900">
                    <div className="w-full sm:w-auto sm:self-start self-center sm:self-center flex flex-row sm:flex-none flex-no-wrap sm:justify-between justify-center items-center">
                    <Link className="no-underline py-1" to='/'><h1 className="font-bold text-lg tracking-widest"><img className="pj-logo" src={pjlogo} alt="Peter John Villanueva Logo" /></h1></Link>
                    </div>
                     {/*
                     <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button" onClick={navToggle}>
                        <span className="hamburger__top-bun text-white"></span><span className="hamburger__bottom-bun"></span>
                    </button>
                    </div>
                   
                    In Progress
                    <div id="menu" className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
                    <Link className="no-underline py-1 mr-2" to='/'>About</Link>
                    <Link className="no-underline py-1 mr-2" to='/'>Portfolio</Link>                
                    </div> */}
                </nav>
            </div>
        </div>

    )
}

export default Header;