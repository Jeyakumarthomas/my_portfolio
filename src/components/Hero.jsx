import React from 'react'
import HeroImg from "../assets/hero.png"
import { AiOutlineLinkedin,AiOutlineWhatsApp,AiOutlineGithub } from "react-icons/ai";



const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 py-36  bg-primary justify-center'>
        <div className="md:w-1/2 flex flex-col">
        <h1 className=' text-white text-6xl font-hero'>Hi, <br />I'm <span className='text-black hover:text-white'>Jeyakumar</span>
            <p className='text-2xl'>I am an IT graduate</p>
        </h1>
        
        <div className='flex py-10'>
            <a href="#" className='pr-5 hover:text-white'><AiOutlineWhatsApp size={40}/></a>
            <a href="#" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href="#" className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img src={HeroImg} alt="Hero Image" className='md:w-1/3'/>
    </section>
  )
}

export default Hero