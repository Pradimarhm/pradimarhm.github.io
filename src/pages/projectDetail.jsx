import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProjectExample } from '../constants/projectExample';
import { Path } from 'three';
import { useTranslation } from 'react-i18next';

export default function ProjectDetail() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const { slug } = useParams();
    const imagePath = import.meta.glob('../assets/images/project/**/*.{png,jpg,jpeg,svg}', { eager: true });

    // Mencari data project berdasarkan slug URL
    const project = ProjectExample.find(
        (item) => item.name.toLowerCase().replace(/\s+/g, '-') === slug
    );

    // Auto scroll ke atas saat pindah halaman
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const galery = useMemo(() => {
        if (!project) return [];

        // Sesuaikan target folder dengan nama project (case-insensitive)
        // Misal: Hydrosee -> akan mencari folder yang mengandung kata "hydrosee"
        const folderTarget = project.name.toLowerCase().replace(/\s+/g, '_');

        return Object.keys(imagePath)
            .filter((path) => path.toLowerCase().includes(`/project/${folderTarget}/`))
            .map((path) => {
                // Ambil URL yang sudah diproses Vite (default property)
                return imagePath[path].default;
            });
    }, [project, imagePath]);

    // const galery = getProjectImages(project.name);
    // console.log(project.name.toLowerCase().replace(/\s+/g, '_'))
    // console.log(imagePath)

    if (!project) {
        return <div className="text-white text-center py-20 pt-40">Project not found.</div>;
    }

    return (
        <div className=' max-w-7xl mx-auto pt-8'>
            {/* <Link to="/myProject" className="text-brand-0 mb-8 inline-block bg-brand-500 py-2 px-4 hover:bg-brand-600">
                ← Kembali ke Project
            </Link>  */}
            <section className="grid grid-cols-8 grid-rows-7 gap-4 aspect-video">
                <div className="col-span-5 row-span-7 bg-brand-300 overflow-hidden">
                    <img className='w-full' src={project.imageUrl} alt="" loading="lazy" />
                </div>
                <div className="col-span-3 row-span-4 col-start-6 bg-brand-300 overflow-hidden flex items-center">
                    <img className='w-full' src={project.secImageUrl} alt="" loading="lazy" />
                </div>
                <div className="col-span-3 row-span-3 col-start-6 bg-brand-300 overflow-hidden flex items-center">
                    <img className='w-full' src={project.tridImageUrl} alt="" loading="lazy"  />
                </div>
            </section>

            <section className='flex flex-col gap-10 pb-20 px-10 pt-10'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-0'>{project.name}</h1>
                <div className='w-full h-fit flex flex-col gap-10'>
                    <div className='w-full h-fit flex flex-col lg:flex-row gap-5'>
                        <div className='w-full h-fit flex flex-col gap-5'>
                            <h2 className='text-xl md:text-2xl lg:text-3xl font-normal text-brand-0'>{t('projectDetail.duration')}</h2>
                            {
                                project.duration.length > 0 ? (
                                    <div className='w-full h-fit flex justify-center p-2 bg-transparent border border-brand-0'>
                                        <p className='text-sm md:text-md lg:text-lg font-normal text-brand-0'>{project.duration}</p>
                                    </div>
                                ) : <div className='w-full h-fit flex justify-center p-2 bg-transparent border border-red-500'>
                                        <p className='text-red-500 text-sm md:text-md lg:text-lg'>No Duration</p>
                                    </div>
                            }
                        </div>
                        
                        <div className='w-full h-fit flex flex-col gap-5'>
                            <h2 className='text-xl md:text-2xl lg:text-3xl font-normal text-brand-0'>{t('projectDetail.position')}</h2>
                            <div className='w-full h-fit flex flex-wrap gap-2.5'>
                                {
                                    project.position_on_team.length > 0 ? (
                                        project.position_on_team.map((item_position)=>(
                                            <div className='w-fit h-fit py-2 px-4 bg-brand-0 text-sm md:text-md lg:text-lg text-black'>
                                                <p>{item_position}</p>
                                            </div> 
                                        ))
                                    ) : <div className='w-fit h-fit py-2 px-4 bg-red-50 text-lg text-black'>
                                            <p className='text-sm md:text-md lg:text-lg text-red-500'>No Position</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-fit flex flex-col gap-5'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-normal text-brand-0'>{t('projectDetail.description')}</h2>
                        <p className='text-sm md:text-md lg:text-lg font-normal text-brand-100'>
                            {
                                project.description[lang].length > 0 ? (
                                    project.description[lang]
                                ) : 'no description yet'
                            }
                        </p>
                    </div>

                    <div className='w-full h-fit flex flex-col gap-5'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-normal text-brand-0'>Tech Stack</h2>
                        <div className='w-full h-fit flex flex-wrap gap-5 justify-between'>
                            {
                                project.techStack.length > 0 ? (
                                    project.techStack.map((item_stack)=> (
                                        <div className='w-xl h-fit flex flex-row gap-2 border'>
                                            <img className='aspect-square w-16' src={item_stack.icon} alt="" loading="lazy" />
                                            <div className='w-full h-fit flex flex-col justify-center'>
                                                <h3 className='text-md md:text-lg lg:text-xl font-normal text-brand-100'>{item_stack.name}</h3>
                                                <p className='text-sm md:text-md lg:text-lg font-normal text-brand-200'>{item_stack.describe[lang]}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className='w-full h-fit flex flex-col items-center'>   
                                        <img className='w-96 filter grayscale opacity-50' src="../ilustration/undraw_empty_4zx0.svg" alt="" />                                 
                                        <p className="text-gray-500 col-span-full text-center py-10">
                                            Belum ada tech stack di folder {project.name.toLowerCase()}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className='w-full h-fit flex flex-col gap-5'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-normal text-brand-0'>{t('projectDetail.galery')}</h2>
                        {galery.length > 0 ? (
                            <div className='w-full h-fit columns-2 md:columns-3 lg:columns-4 space-y-5 gap-5'>
                                {galery.map((src, index) => (
                                    <div key={index} className="group h-fit relative bg-transparent">
                                        <img 
                                            src={src} 
                                            alt={`${project.name} preview ${index + 1}`}
                                            className="w-96 transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy" 
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='w-full h-fit flex flex-col items-center'>   
                                <img className='w-96 filter grayscale opacity-50' src="../ilustration/undraw_empty_4zx0.svg" alt="" />                                 
                                <p className="text-gray-500 col-span-full text-sm md:text-md lg:text-lg text-center py-10">
                                    Belum ada gambar di folder {project.name.toLowerCase()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}