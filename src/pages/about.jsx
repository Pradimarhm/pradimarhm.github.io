import React, { useState } from 'react'
// UI
import CustomStrokeButton from "../components/ui/strokeButton"
import ImageVideoTilt from '../components/ui/imageVideoTilt';

// layout
import Footer from '../components/layouts/footer';

// contanta
import { TechCategory1, TechCategory2 } from "../constants/techCategory"
import { TechStack } from '../constants/techStack';

export default function About() {
    const [activeTech, setActiveTech] = useState("Core Langguage");
    const handleActive = (name) => setActiveTech(name);

    return (
        <div>
            {/* mainsection about */}
            <section className="relative flex justify-center items-center pt-40 min-h-screen">
                <div className="z-10 flex flex-row w-7xl gap-8 px-2 sm:px-4 md:px-6 lg:px-10">

                    <div className="flex flex-col w-full h-full gap-4">
                        {/* Gambar Utama (Atas) */}
                        <ImageVideoTilt
                            imageUrl={'../images/8s8sud9d88e5r7fw/IMG_2192.webp'}
                        />

                        {/* Baris Gambar Bawah */}
                        <div className="flex flex-row gap-4 w-full">
                            <ImageVideoTilt
                                imageUrl={'../images/8s8sud9d88e5r7fw/IMG_0319.webp'}
                            />
                            
                            <ImageVideoTilt
                                imageUrl={'../images/8s8sud9d88e5r7fw/IMG_0404.webp'}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-8">
                        <h1 className="flex flex-col text-7xl font-bold leading-none text-brand-0">
                            <span>TENTANG</span>
                            <span>SAYA</span>
                        </h1>
                        <p className=' text-brand-50 text-justify '>Saya adalah mahasiswa semester 6 jurusan Teknik Informatika di Politeknik Negeri Jember. Saya memiliki pengalaman Fullstack Developer & Designer yang berfokus pada pengalaman pengguna. Memiliki pengalaman dalam membangun aplikasi web modern menggunakan React dan Laravel, serta dalam otomasi sistem melalui IoT dan manajemen database yang efisien., dengan menguasai HTML, CSS, JavaScript, PHP, Python, dan Java.</p>
                    </div>
                </div>
                <img className="absolute z-0 aspect-video w-full object-cover bottom-0 left-0 brightness-25" src="https://images.unsplash.com/photo-1648071343677-fac075603d3c?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </section>

            {/* Tech Section */}
            <section className="flex justify-center items-center bg-brand-0 min-h-screen">
                <div className="flex flex-row w-7xl h-fit gap-8 py-8 px-2 sm:px-4 md:px-6 lg:px-10">
                    <div className="w-full">
                        <h2 className="text-7xl font-medium text-brand-1000 mb-4">TECH STACK</h2>
                        <div className="flex flex-col w-full gap-4">
                            <div className="flex flex-row w-fit gap-4">
                                {
                                    TechCategory1.map((item) => (
                                            <CustomStrokeButton 
                                                label={item.name}
                                                onClick={() => handleActive(item.name)}
                                                variant={activeTech === item.name}
                                                type="button"
                                            />
                                    ))
                                }
                            </div>

                            <div className="flex flex-row w-fit gap-4">
                                {
                                    TechCategory2.map((item) => (
                                            <CustomStrokeButton 
                                                label={item.name}
                                                onClick={() => handleActive(item.name)}
                                                variant={activeTech === item.name}
                                                type="button"
                                            />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-4 grid-rows-2 gap-4 w-full'>
                        {
                            TechStack.filter((item) => item.category === activeTech).map((item)=> (
                                <div className='w-36 h-auto'>
                                    <div className='w-36 h-auto'>
                                        <img className='w-full h-full aspect-square object-cover' src={item.imageUrl} alt="" loading="lazy" />
                                    </div>
                                    <p className='text-brand-1000'>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
