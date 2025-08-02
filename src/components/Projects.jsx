import React from 'react'
import projectImg from '../assets/food-ecommerce.jpg'
import websiteImg from '../assets/ecommerce-websites.jpg'
import websiteBlog from '../assets/website-blog.jpg'

const Projects = () => {
  return (
    <section id="projects" className='flex flex-col px-5 py-20 justify-center bg-primary text-white'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                 <h2 className="text-4xl border-b-4 border-[#2b2d77] mb-4 w-[135px] font-bold">Projects</h2> 
                 <p>These are some of my best projects, I have build this with React.js, MERN, and Tailwind CSS. Check them out.</p>
            </div>
        </div>

        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[200px] w-[500px] rounded' src={websiteImg} alt="Website Image" />
                    <div className="project-desc">
                        <p className='text-center py-5'>A Ecommerce website Build With MERN Stack</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px] rounded' src={projectImg} alt="Project Image" />
                    <div className="project-desc">
                        <p className='text-center py-5'>A Ecommerce website Build With MERN Stack</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px] rounded' src={websiteBlog} alt="Website Blog" />
                    <div className="project-desc">
                        <p className='text-center py-5'>A Ecommerce website Build With MERN Stack</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects