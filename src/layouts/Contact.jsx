import { FaEnvelope, FaLocationArrow, FaWhatsapp } from "react-icons/fa"

const Contact = () => {
    return (
        <div className="container mx-auto p-8 md:p-24 flex justify-center flex-col" id="contact">
            <h1 className="text-xl md:text-4xl text-center">Contact Me</h1>
            <div className="flex items-start lg:items-center flex-col mt-4 md:mt-8 gap-2">
                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-primary lg:w-5 lg:h-5" />
                    <h1 className="text-sm lg:text-lg">habbazahubbal@gmail.com</h1>
                </div>
                <div className="flex items-center gap-2">
                    <FaWhatsapp className="text-primary lg:w-5 lg:h-5" />
                    <h1 className="text-sm lg:text-lg">+62 8956 0442 8802</h1>
                </div>
                <div className="flex items-center gap-2">
                    <FaLocationArrow className="text-primary lg:w-5 lg:h-5" />
                    <h1 className="text-sm lg:text-lg">Bandung, Indonesia</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact