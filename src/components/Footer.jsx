import { FaDribbble, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-scroll"

const Footer = () => {
    return (
        <div className="w-full bg-[#26313F] h-full py-6 md:py-10">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-white font-semibold text-2xl md:text-3xl">Hbzz.</h1>
                <div className="flex justify-between items-center gap-4 mt-2 text-white ">
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="hover:font-semibold transition-all duration-200 cursor-pointer">About</Link>
                    <Link to="projects" spy={true} smooth={true} offset={-40} duration={500} className="hover:font-semibold transition-all duration-200 cursor-pointer">Projects</Link>
                    <h1 className="hover:font-semibold transition-all duration-200 cursor-pointer">Contact</h1>
                </div>
                <div className="flex justify-center items-center mt-4 gap-4">
                    <a href="https://github.com/habbazettt" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaGithub /></a>
                    <a href="https://www.instagram.com/habbazettt_/" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/hubbal-kholiq-habbaza-000910237/" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaLinkedin /></a>
                    <a href="https://dribbble.com/Zeddtproject_" target="_blank" className="bg-white text-primary text-lg font-semibold p-2 rounded-md"><FaDribbble /></a>
                </div>
            </div>
            <hr className="w-full mt-6" />
            <h1 className="text-white text-sm text-center mt-4">© 2024 Habbaza. All Rights Reserved.</h1>
        </div>
    )
}

export default Footer