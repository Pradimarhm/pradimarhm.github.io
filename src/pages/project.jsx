import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// ui
import CustomStrokeButton2 from "../components/ui/strokeButton2"
import CustomButton from '../components/ui/button';
import Footer from "../components/layouts/footer";

// constant
import { ProjectCategory } from "../constants/projectCategory"
import { ProjectExample } from '../constants/projectExample';

export default function Project() {
    const [activeTech, setActiveTech] = useState("Semua");
    const handleActive = (name) => setActiveTech(name);

    const filteredProjects = ProjectExample.filter((project) => {
        if (activeTech === "Semua") return true; // Tampilkan semua jika klik "Semua"
        
        // Ubah input (contoh: "Mobile App") menjadi format yang sesuai di data (contoh: "mobile_app")
        const formattedActiveTech = activeTech.toLowerCase().replace(/\s+/g, '_');
        
        // Cek apakah kategori yang dipilih ada di dalam string category project
        return project.category.includes(formattedActiveTech);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* header section */}
                <section className='flex h-fit pt-20'>
                    <div className='flex flex-col items-center w-7xl h-fit gap-8 py-8 px-2 sm:px-4 md:px-6 lg:px-10'>
                        <h1 className='text-7xl font-medium text-brand-0 mb-4'>MY PROJECT</h1>
                        <div className="w-full flex flex-wrap justify-center gap-2.5">
                            {
                                ProjectCategory.map((item) => (
                                    <CustomStrokeButton2
                                        label={item.name}
                                        onClick={() => handleActive(item.name)}
                                        variant={activeTech === item.name}
                                        type="button"
                                        className='text-2xl'
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>

                <section className='flex w-full mb-10'>
                    <div className='flex flex-wrap w-full justify-start gap-5 pl-9'>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((item, index) => (
                                <div key={index} className='flex flex-col w-96 h-fit p-2.5 gap-5 border border-brand-0 bg-black'>
                                    <img className='w-full aspect-square object-cover'  loading="lazy" src={item.imageUrl} alt={item.name} />
                                    <div className='flex flex-col justify-between items-end gap-2.5'>
                                        <h2 className='text-white w-full text-2xl font-semibold flex flex-wrap'>{item.name}</h2>
                                        <div className="space-y-2 w-full text-left">
                                            {item.description
                                                .split('\n')
                                                .filter(line => line.trim() !== '')
                                                .slice(0, 2)
                                                .map((teks, idx) => (
                                                    <p key={idx} className="text-brand-50 text-md line-clamp-3">
                                                        {teks}
                                                    </p>
                                                ))
                                            }
                                        </div>

                                        <div className="flex w-full -space-x-4 transition-all duration-500">
                                            {item.techStack.map((tech, i) => (
                                                <img    
                                                    key={i} 
                                                    className="w-10 h-10 shadow-md shadow-black/80 border border-gray-800" 
                                                    src={tech.icon} 
                                                    alt={tech.name} 
                                                />
                                            ))}
                                        </div>
                                        <Link 
                                        to={`/project/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="w-full"
                                        >
                                            <CustomButton
                                                style='w-full px-10'
                                                label={'Lihat Detail'}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-white py-20 w-full flex flex-col items-center">
                                <img className='w-96 filter grayscale opacity-50' src="../ilustration/undraw_empty_4zx0.svg" alt="" />
                                <p className="text-gray-500 col-span-full text-center py-10">
                                    Tidak ada project.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <Footer/>
        </div>
    )
}