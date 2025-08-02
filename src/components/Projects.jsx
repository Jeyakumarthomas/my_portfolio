import React from 'react'
import projectImg from '../assets/food-ecommerce.jpg'
import websiteImg from '../assets/ecommerce-websites.jpg'
import websiteBlog from '../assets/website-blog.jpg'

const Projects = () => {
    const config = {
        project : [
            {
                image :projectImg,
                description :"A Ecommerce website Build With MERN Stack",
                link : ""
            },
            {
                image :websiteImg,
                description :"A Ecommerce website Build With MERN Stack",
                link : ""
            },
            {
                image :websiteBlog,
                description :"A Ecommerce website Build With MERN Stack",
                link : ""
            }
        ] 
    }
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

            {config.project.map((project) =>( 
                <div className='relative'>
                    <img className='h-[200px] w-[500px] rounded' src={project.image} alt={project.description} />
                    <div className="project-desc">
                        <p className='text-center py-5'>{project.description}</p>
                        <div className='flex justify-center'>
                            <a className="btn" target="_blank" href="#">Details</a>
                        </div>
                    </div>
                </div>
            ))}

              
                
            </div>
        </div>
    </section>
  )
}

export default Projects