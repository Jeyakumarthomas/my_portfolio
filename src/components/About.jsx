import AboutImg from "../assets/about.png"

const About = () => {
    const config = {
        line1:"Myself Jeyakumar,I'm a M.Sc.IT graduate, I build websites with React.js and Tailwind CSS",
        line2:"I am proficient with Frontend skils like React.js, Axios, Tailwind CSS, CSS# and many more...",
        line3:"In Backend I know node.js, Express.js, MongoDB, Mongoose."
    }
    return(
        <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
            <div className="md:w-1/2 py-5">
                <img src={AboutImg} alt="About Page Image" />
            </div>
            <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col justify-center text-white">
                <h2 className="text-4xl border-b-4 border-[#5551e3] mb-4 w-[175px] font-bold">About Me</h2>
                <p className="pb-5">{config.line1}</p>
                <p className="pb-5">{config.line2}</p>
                <p className="pb-5">{config.line3}</p>
            </div>
                
            </div>
        </section>
    )
}
export default About