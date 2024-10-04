import { Swiper, SwiperSlide } from "swiper/react"
import Card from "../components/Card"
import CardDesign from "../components/CardDesign"

import 'swiper/css';
import 'swiper/css/pagination';

import '../style.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Projects = () => {
    return (
        <div className="container mx-auto p-8 md:p-40 flex justify-center flex-col" id="projects">
            <div className="mx-auto">
                <h1 className="text-center mt-8 text-4xl md:text-5xl">Projects</h1>
            </div>
            <div className="w-full items-center justify-center md:mt-10 gap-y-8 md:gap-x-36 md:gap-y-20 mx-auto">
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    loop={true}
                    className="mySwiper"
                    pagination={{
                        dynamicBullets: true,
                    }}
                >
                    <SwiperSlide>
                        <Card
                            cover='/Projects/Mahadtahfidz.png'
                            title="Mahad Tahfidz Official Website"
                            desc="Build Official Website of Mahad Tahfidz UIN Sunan Gunung Djati with ReactJS and TailwindCSS, and deployed on Netlify."
                            images={['/reactIcon.png', '/jsIcon.png', '/tailwindIcon.png']}
                            liveDemo='https://mahadtahfidz.netlify.app'
                            github="https://github.com/habbazettt/MahadTahfidz-Official-Website"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            cover='/Projects/UserManagement.png'
                            title="User Management Website"
                            desc="Build User Management Website with NodeJS and Bootstrap, and deployed on Cyclic."
                            images={['/mongo.png', '/nodeIcon.png', '/bootstrapIcon.png']}
                            liveDemo='https://spotless-plum-loafers.cyclic.app/'
                            github="https://github.com/habbazettt/User-Management-System"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            cover='/Projects/ImageAudio.png'
                            title="Image and Audio Compression"
                            desc="Build Image and Audio Compression with ReactJS and TailwindCSS, and deployed on Netlify."
                            images={['/reactIcon.png', '/jsIcon.png', '/tailwindIcon.png']}
                            liveDemo='https://image-audio-processing-habbaza.netlify.app/'
                            github="https://github.com/habbazettt/Image-Audio-Process---React"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            cover='/Projects/Codewars.png'
                            title="200+ Codewars Solutions"
                            desc="200+ Codewars Solutions with JavaScript for Beginners."
                            images={['/jsIcon.png']}
                            liveDemo='https://www.codewars.com/users/habbazettt'
                            github="https://github.com/habbazettt/Code-Wars_JS"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardDesign
                            cover='/Projects/E-Journal.png'
                            title="E-Journal UIN Sunan Gunung Djati Website"
                            desc="Build E-Journal UIN Website Design with Figma"
                            images={['/figmaIcon.png']}
                            liveDemo='https://www.figma.com/proto/1tzB9b4w5V8QgiJDkySKMx/E-JOURNAL-UIN-Project?page-id=0%3A1&type=design&node-id=2-18&viewport=-836%2C271%2C0.29&t=q7S9ShYJ1qkreO40-1&scaling=min-zoom&mode=design'
                            figma='https://www.figma.com/file/1tzB9b4w5V8QgiJDkySKMx/E-JOURNAL-UIN-Project?type=design&node-id=0%3A1&mode=design&t=NsXYP6xGQPkt1eST-1'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardDesign
                            cover='/Projects/eduCenter.png'
                            title="Education Center Website"
                            desc="Build Education Center Design with Figma"
                            images={['/figmaIcon.png']}
                            liveDemo='https://www.figma.com/proto/HLy4GyVPUVIV69qMYPOczQ/Edu-Center?page-id=0%3A1&type=design&node-id=18-24&viewport=824%2C298%2C0.14&t=PXvY1BvfNhttgZA1-1&scaling=min-zoom&starting-point-node-id=18%3A24&mode=design'
                            figma='https://www.figma.com/file/HLy4GyVPUVIV69qMYPOczQ/Edu-Center?type=design&node-id=18%3A24&mode=design&t=kjj9klVssJ7DYH8A-1'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardDesign
                            cover='/Projects/itCup.png'
                            title="IT Cup 2023"
                            desc="Build IT Cup 2023 Quiz Web Design with Figma"
                            images={['/figmaIcon.png']}
                            liveDemo='https://www.figma.com/proto/7AZDrMNiCSvSzrlSOzJczL/IT-CUP?page-id=39%3A1650&type=design&node-id=63-38&viewport=285%2C725%2C0.19&t=rnYQW1Ez1PHj46CR-1&scaling=min-zoom&starting-point-node-id=63%3A38&show-proto-sidebar=1&mode=design'
                            figma='https://www.figma.com/file/7AZDrMNiCSvSzrlSOzJczL/IT-CUP?type=design&node-id=63%3A38&mode=design&t=b2Z8SLQS8OfZdR2E-1'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects