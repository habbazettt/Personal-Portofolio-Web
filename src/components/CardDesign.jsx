/* eslint-disable react/prop-types */
import { FaFigma } from "react-icons/fa"

const CardDesign = ({ title, cover, desc, images, liveDemo, figma }) => {
    return (
        <div className="mt-10 w-full md:w-[500px] rounded-xl shadow-md bg-primary pb-6">
            <img src={cover} className="w-full object-cover" alt="" />
            <div className="flex flex-col justify-center items-center px-6">
                <h1 className="text-xl md:text-2xl text-white py-2 font-semibold text-center">{title}</h1>
                <p className="text-white/45 text-sm">{desc}</p>
                <p className="text-white text-center mt-3 text-lg">Tech Stack</p>
                <div className="flex justify-between items-center mt-3 gap-6">
                    {
                        images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))
                    }
                </div>
                <div className="flex justify-center items-center gap-4">
                    <a href={liveDemo} target="_blank" className="bg-white text-primary text-sm md:text-lg font-semibold px-4 py-2 rounded-sm mt-6">Live Demo</a>
                    <a href={figma} target="_blank" className="bg-transparent text-white border border-white text-sm md:text-lg font-semibold px-4 py-2 rounded-sm mt-6 flex justify-center items-center gap-2"><FaFigma />Figma File</a>
                </div>
            </div>
        </div>
    )
}

export default CardDesign