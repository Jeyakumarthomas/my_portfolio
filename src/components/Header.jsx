import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'


const Header = () => {
    const[toggleMenu,setToggleMenu]= useState(false)
  return (
    <header className="flex justify-between px-5 py-2 bg-primary h-10 items-center">
    <a href="#" className='font-bold text-black'>Jeyakumar</a>
    <nav className='hidden sm:block'>
        <ul className='flex text-white'>
            <li className='hover:text-blue-400'><a href="/">Home</a></li>
            <li className='hover:text-blue-400'><a href="#about">About</a></li>
            <li className='hover:text-blue-400'><a href="#projects">Projects</a></li>
            <li className='hover:text-blue-400'><a href="#resume">Resume</a></li>
            <li className='hover:text-blue-400'><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    {toggleMenu&&<nav className='block sm:hidden'>
        <ul onClick={()=>{setToggleMenu(!toggleMenu)}} className='flex flex-col text-white mobile-nav'>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>}

    <button onClick={()=>{setToggleMenu(!toggleMenu)}} className='block sm:hidden'><Bars3Icon className='text-white h-5'/></button>
    
    </header>
  )
}

export default Header