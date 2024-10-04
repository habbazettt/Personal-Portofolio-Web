import { FaDribbble, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-scroll"

const Hero = () => {
    return (
        <div className="container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2  px-8 md:px-24 justify-between items-center py-10 bg-primary" id='hero'>
            <div className="order-last xl:order-first ">
                <p className="text-xl text-left md:text-2xl font-semibold text-white">Hi, I&apos;m Hubbal Kholiq Habbaza</p>
                <h1 className="text-2xl text-left md:text-4xl font-bold text-secondary mt-1">Fullstack Web Developer & UI/UX Designer</h1>
                <p className="text-sm text-left md:text-xl  text-white mt-3">
                    A Computer Science student who specialize in designing and building immersive website using the latest frontend and backend technologies and frameworks to bring your vision to life.
                </p>
                <div className="flex justify-start items-center mt-6 gap-4 ml-2">
                    <a href="https://github.com/habbazettt" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaGithub /></a>
                    <a href="https://www.instagram.com/habbazettt_/" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/hubbal-kholiq-habbaza-000910237/" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaLinkedin /></a>
                    <a href="https://dribbble.com/Zeddtproject_" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaDribbble /></a>
                </div>
                <button className="bg-secondary text-primary text-lg font-semibold px-6 py-2 rounded-md mt-6"><Link to="about" smooth={true} duration={500} spy={true} offset={-70}>Get In Touch</Link></button>
            </div>
            <div className="w-[150px] md:w-[320px] mt-[68px] mb-4 md:mb-0 md:mt-0 mx-auto">
                <img src="/Silver.png" alt="" />
            </div>
        </div>
    )
}

export default Hero