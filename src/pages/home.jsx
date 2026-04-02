import { Description } from "@headlessui/react";
import React, { useEffect, useMemo } from 'react'

import DotGrid from '../components/common/dotGrid.components'

// UI
import SkillCard from '../components/common/skillcard.components'
import BestProjectCard from "../components/common/bestProjectCard.components";
import Marque from "../components/ui/marque";

// layout
import Footer from "../components/layouts/footer";

// Constanta
import { bestProject } from '../constants/bestProject.constanta'
import { skill } from '../constants/skill.constanta'
// import { Tooltip } from 'flowbite-react';




const pathImage = "../images"

export default function Home() {

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  const imagePath = import.meta.glob('../assets/images/bestDesign/**/*.{png,jpg,jpeg,svg,webp}', { eager: true });

  const galery = useMemo(() => {
    return Object.keys(imagePath).map((path) => {
      // Vite eager import biasanya mengembalikan object dengan property 'default'
      return imagePath[path].default;
    });
  }, [imagePath]);

  console.log(galery);
  
  return (
    <div className="bg-transparent w-full flex flex-col justify-center">
      <section className="flex flex-col pt-40 w-full justify-center items-center">
        <div className="flex flex-col w-7xl gap-8 px-2 sm:px-4 md:px-6 lg:px-10">
          <div className=" flex flex-row w-full justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="flex flex-col text-3xl font-extrabold leading-none sm:text-5xl md:text-7xl lg:text-9xl">
                <span className="text-transparent [-webkit-text-stroke:1px_var(--color-brand-0)]">
                  Hello, I'm
                </span>
                <span className="text-transparent [-webkit-text-stroke:1px_var(--color-brand-0)]">
                  IVAN
                </span>
              </h1>
              
              <h2 className='text-white text-4xl font-normal'>PRADITYA IVAN RAHMADHANI</h2>
            </div>
            
            <img src= {pathImage + "/me.png"} alt="its me bro" className="h-full w-auto" />
          </div>

          <div className="flex flex-row gap-4 py-10 items-center">
            <h3 className='text-white text-2xl font-bold text-end'>I CAN DESIGN AND DEVELOP YOUR WEBSITE</h3>
            <p className='text-sm font-normal text-gray-300'>Full-Stack Developer & Designer with a focus on user experience. Experienced in building modern web applications using TailwindCss and Laravel, as well as in system automation via IoT and efficient database management.</p>
          </div>
        </div>

        <div className="flex flex-col w-full pt-8">
          <Marque direction="left"/>
          <Marque direction="right"/>
        </div>

        <div className='absolute inset-0 -z-10'>
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#000C1B"
            activeColor="#005AC6"
            proximity={80}
            shockRadius={80}
            shockStrength={5}
            resistance={250}
            returnDuration={1.5}
          />
        </div>
      </section>

      {/* SECTION SKILL */}
      <section className="flex min-h-screen justify-center items-center px-2 sm:px-4 md:px-6 lg:px-10 py-20 bg-brand-1000 ">
        <div className="flex flex-col w-7xl h-full gap-5">
          <h2 className="text-brand-0 text-7xl font-medium">MY SKILLS</h2>
            <div className="flex justify-center flex-row gap-4">
              {
                skill.map((item) => (
                  <SkillCard 
                    name={item.name}
                    imageUrl={item.imageUrl}
                    Description={item.Description}
                    techStack={item.techStack}
                  />
                ))
              }
            </div>
          <h3 className="text-5xl font-medium bg-linear-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent text-end">TECH STACK</h3>
        </div>
      </section>

      {/* best project */}
      <section className="flex min-h-screen justify-center items-center px-2 sm:px-4 md:px-6 lg:px-10 bg-brand-1000">
        <div className="w-7xl">
          <h2 className="text-7xl font-medium text-brand-0 mb-4">BEST PROJECT</h2>

          {
                bestProject.map((bp)=> (
                  <BestProjectCard
                    title={bp.name}
                    description={bp.description}
                    mainImageUrl={bp.mainImageUrl}
                    image1Url={bp.image1Url}
                    image2Url={bp.image2Url}
                    toolTech={bp.techStackApp}
                  />
                ))
              }
        </div>
      </section>

      {/* best design */}
      <section className="bg-brand-950 flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 py-10">
        <div className="w-7xl">
          <div className="relative mb-5">
            <div className="relative z-20 aspect-video p-4 w-full text-brand-0 text-7xl font-bold flex flex-col justify-between">
              <h2>BEST DESIGN</h2>
              <h3 className="text-end">2025</h3>
            </div>
            <img className="absolute bottom-0 left-0 z-10 aspect-video object-cover w-full" src={pathImage+"/galery/sampul/sampul_best_design.webp"} alt="" />
          </div>

          <div className="flex flex-col gap-5">
            {/* <div className="">
              <img className="w-full h-fit" src={"../assets/images/bestDesign/carousaleReor.webp"} alt="" />
            </div> */}
            <div className="flex flex-row w-full h-fit gap-5">
              <div className="w-full h-fit columns-4 space-y-5 gap-5 justify-start pl-5">
                {
                  galery.map((item, index)=> (
                    <div key={index} className="group h-fit relative bg-transparent">
                        <img 
                            src={item} 
                            alt={`preview ${index + 1}`}
                            className="w-96 transition-transform duration-500 group-hover:scale-105"
                            loading="lazy" 
                        />
                    </div>
                    // <img className="w-full h-fit" src={item1.url} alt='' />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}