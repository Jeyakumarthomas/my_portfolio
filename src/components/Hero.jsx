import React from 'react'
import HeroImg from "../assets/hero.png"
import { AiOutlineLinkedin,AiOutlineWhatsApp,AiOutlineGithub } from "react-icons/ai";



const Hero = () => {

  const config={
      subHeading : `I am an M.Sc.(IT) graduate`,
      social : {
        linkedin:"https://www.linkedin.com/in/jeyakumar-arulraj-725a29374/",
        gitHub:"https://github.com/Jeyakumarthomas/my_portfolio",
        whatsapp:""
      }
  }

  return (
    <section className='flex flex-col md:flex-row px-5 py-36  bg-primary justify-center'>
        <div className="md:w-1/2 flex flex-col">
        <h1 className=' text-white text-6xl font-hero'>Hi, <br />I'm <span className='text-black hover:text-white'>Jeyakumar</span>
            <p className='text-2xl'>{config.subHeading}</p>
        </h1>
        
        <div className='flex py-10'>
            <a target="" href='' className='pr-5 hover:text-white'><AiOutlineWhatsApp size={40}/></a>
            <a target="_blank" href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a target="_blank" href={config.social.gitHub} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img src={HeroImg} alt="Hero Image" className='md:w-1/3'/>
    </section>
  )
}

export default Hero