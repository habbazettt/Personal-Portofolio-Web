const About = () => {

    return (
        <div className="container mx-auto p-8 md:py-40 flex justify-center flex-col md:flex-row" id="about">
            <div className="w-full md:w-[44%] flex justify-center items-center mt-10 sm:mt-0">
                <img src="/About.png" className="w-[200px] md:w-[400px]" alt="" />
            </div>
            <div className="relative w-full md:w-[50%] mt-8 sm:mt-0">
                <h1 className="text-4xl md:text-5xl">About Me</h1>
                <div className="absolute left-20 flex items-center gap-2">
                    <div className="w-10 md:w-20 h-1 bg-primary my-3" />
                    <p className="text-lg">Who Am I?</p>
                </div>

                <p className="mt-10 text-gray-600 text-xs sm:text-lg">
                    Enthusiastic Computer Science student with a passion for front end development and UI/UX design seeking opportunities to apply my skills and knowledge.
                    7th semester Computer Science student at UIN Sunan Gunung Djati Bandung
                    Experience in web development using ReactJS and UI/UX design
                    Proficient in web programming languages (HTML, CSS, JavaScript) and UI/UX principles
                    Committed to maintaining memorization of the Quran
                    Actively involved in extracurricular activities, including KM Jateng Bandung Raya, RITMA, BSO Ruang Grafis
                    Seeking opportunities to collaborate and contribute my skills to meaningful projects.</p>

                <div className="mt-4 md:mt-6 grid grid-cols-5 justify-start md:justify-start items-end gap-6">
                    <img src="/skills/figma.png" alt="" />
                    <img src="/skills/react.png" width={40} alt="" />
                    <img src="/skills/javascript.png" alt="" />
                    <img src="/skills/Nodejs.png" alt="" />
                    <img src="/skills/python.png" alt="" />
                    <img src="/skills/tailwindcss.png" alt="" />
                    <img src="/skills/Bootstrap.png" alt="" />
                    <img src="/skills/express.png" width={70} alt="" />
                    <img src="/skills/mongo.png" width={70} alt="" />
                    <img src="/skills/typescript.png" width={70} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About