import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next';

// ui
import Footer from "../components/layouts/footer";
import CustomStrokeButton2 from "../components/ui/strokeButton2"

// constanta
import { DesignCategory } from "../constants/designCategory";
import { DesignList } from '../constants/designList';
// import { ProjectList } from '../constants/projectList';

const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

export default function Design() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [activeTech, setActiveTech] = useState("Semua");
    const handleActive = (name) => setActiveTech(name);

    // 1. Acak list design hanya SEKALI saat halaman pertama kali dibuka
    const shuffledDesign = useMemo(() => {
        return shuffleArray(DesignList);
    }, []); // Array kosong berarti hanya dijalankan saat mount

    // 2. Filter dilakukan terhadap list yang sudah diacak
    const filteredDesign = useMemo(() => {
        if (activeTech === "Semua") return shuffledDesign;
        
        const formattedActiveTech = activeTech.toLowerCase().replace(/\s+/g, '_');
        return shuffledDesign.filter((project) => 
            project.category.includes(formattedActiveTech)
        );
    }, [activeTech, shuffledDesign]);
    
    return (
        <div className="bg-transparent">   
            <div className="max-w-7xl min-h-screen mx-auto">
                <section className='flex h-fit'>
                    <div className='flex flex-col items-center w-7xl h-fit gap-8 py-8 px-2 sm:px-4 md:px-6 lg:px-10'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-medium text-brand-0 mb-4 uppercase'>{t('nav.design')}</h1>
                        <div className="w-full flex flex-wrap justify-center gap-2.5">
                            {
                                DesignCategory.map((item) => (
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
                    <div className='flex flex-wrap w-full justify-start gap-5'>
                        {
                            filteredDesign.length > 0 ? (
                                <div className='w-full h-fit columns-2 md:columns-3 lg:columns-4 space-y-5 gap-3 md:gap-4 lg:gap-5 px-3 md:px-3 lg:px-0'>
                                    {filteredDesign.map((src, index) => (
                                        <div key={index} className="group h-fit relative bg-transparent">
                                            <img 
                                                src={src.imageUrl} 
                                                // alt={`${project.name} preview ${index + 1}`}
                                                className="w-96 transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy" 
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-white py-20 w-full flex flex-col items-center">
                                    <img className='w-96 filter grayscale opacity-50' src="../ilustration/undraw_empty_4zx0.svg" alt="" />
                                    <p className="text-gray-500 col-span-full text-center py-10">
                                        Tidak ada design.
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>

            <Footer/>
        </div>
    )
}