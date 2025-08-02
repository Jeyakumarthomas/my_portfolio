import resumeImg from "../assets/resume.jpg"

const Resume = () => {
    const config = {
        link : 'my_portfolio/public/resume2025c.pdf'
    }
    return(
        <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">

            <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
                <img src={resumeImg} alt="My Resume" className="w-[300px]"/>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h2 className="text-4xl border-b-4 border-[#5551e3] mb-4 w-[135px] font-bold">Resume</h2>
                    <p className="pb-5">You can view my resume. <a className="btn" href={config.link} >Download</a></p>
                </div>
            </div>

        </section>
    )
}
export default Resume