import { Description } from "@headlessui/react";

import DotGrid from '../components/common/dotGrid.components'

import SkillCard from '../components/ui/skillcard'
import { skill } from '../constants/skill'
// import { Tooltip } from 'flowbite-react';


const pathImage = "../images"

const bestProject = [{
  name: "HYDROSEE APP",
  mainImageUrl: pathImage+"/bestProject/smpl.png",
  image1Url: pathImage+"/bestProject/1.png",
  image2Url: pathImage+"/bestProject/2.png",
  techStackApp: [pathImage+"/techStack/Figma.svg", pathImage+"/techStack/Tinkercad.svg", pathImage+"/techStack/Python.svg", pathImage+"/techStack/Firebase.svg", pathImage+"/techStack/Dart.svg", pathImage+"/techStack/Flutter.svg"],
  description: "Pada Project Semester 5, Saya dan tim  membuat sebuah aplikasi mobile yang terintegrasi dengan sistem IoT. Di project kali ini kami menyelesaikan masalah terkait pertanian hidroponik yang selalu menjadi tempat main serangga belalang karena letakny yang di pinggir sawah. Dengan mengintegrasikan Sistem Cerdas berbasis machine learning yang dikolaborasikan dengan Sistem Pengolahan Citra dan Vision dalam mendeteksi belalang, Hasil dari deteksi ini digunakan untuk mentrigger Sistem IoT untuk bertindak.",
}]

const galery1 = [
  {
    url: pathImage+"/galery/feedEpim.webp",
    name: "Feed Epim"
  },
  {
    url: pathImage+"/galery/feedWorkshop.webp",
    name: "Feed Workshop Kelas Kreatif"
  },
  {
    url: pathImage+"/galery/posterHarlahPancasila.webp",
    name: "Poster Harlah Pancasila"
  },
]

const galery2 = [
  {
    url: pathImage+"/galery/oprec.webp",
    name: "Flyer Oprec Imun"
  },
  {
    url: pathImage+"/galery/flyerGerakJalan.webp",
    name: "Flyer Gerak Jalan Kabupaten Nganjuk"
  },
  {
    url: pathImage+"/galery/posterWaisak.webp",
    name: "Poster Waisak"
  },
]

const galery3 = [
  {
    url: pathImage+"/galery/demisioner.webp",
    name: "Feed Demisioner"
  },
  {
    url: pathImage+"/galery/feedSubSektorApp.webp",
    name: "Feed SubSektor Aplikasi"
  },
  {
    url: pathImage+"/galery/posterUAS.webp",
    name: "Poster UAS"
  },
]

const galery4 = [
  {
    url: pathImage+"/galery/posterMaulid.webp",
    name: "Poster Maulid"
  },
  {
    url: pathImage+"/galery/bannerWorkshop.webp",
    name: "Banner Workshop"
  },
  {
    url: pathImage+"/galery/posterImlek.webp",
    name: "Poster Imlek"
  },
]

export default function Home() {
  return (
    <div className="bg-transparent">
      <section className="flex flex-col pt-40 w-full justify-center items-center">
        <div className="flex flex-col w-7xl gap-8 px-2 sm:px-4 md:px-6 lg:px-10">
          <div className=" flex flex-row w-full justify-between gap-4">
            <div className="flex flex-col">
              {/* bg-linear-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent*/}
              {/* <h1 className='flex flex-col lg:text-9xl leading-none font-extrabold text-transparent stroke-1 stroke-brand-0 md:text-7xl sm:text-5xl text-3xl'>
                <span>Hello, I’AM </span>
                <span>IVAN</span>
              </h1> */}
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
            
            <img src= {pathImage + "/no_bg_gradient.webp"} alt="its me bro" className="h-full w-auto" />
          </div>
            {/* <div className="col-span-2 row-span-3 row-start-2">
              
            </div> */}
            {/* <div className="col-span-2 row-span-3 col-start-3 row-start-2">
              
              <img src="" alt=""/>
            </div> */}

          <div className="flex flex-row gap-4 py-10">
            <h3 className='text-white text-2xl font-bold text-end'>I CAN DESIGN AND DEVELOP YOUR WEBSITE</h3>
            <p className='text-sm font-normal text-gray-300'>Fullstack Developer & Designer yang berfokus pada pengalaman pengguna. Memiliki pengalaman dalam membangun aplikasi web modern menggunakan React dan Laravel, serta dalam otomasi sistem melalui IoT dan manajemen database yang efisien.</p>
          </div>
            {/* <div className="col-span-2 col-start-5 row-start-4">
              
            </div> */}
        </div>

        <div className="flex flex-col w-full pt-8 overflow-hidden">
          <div className='flex gap-0 w-full justify-end bg-brand-1000  text-brand-100 border-brand-100 text-lg whitespace-nowrap mb-4'>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Graphic Designer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>UI/UX</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>IOT Dev</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Web Developer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Graphic Designer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>Video Editor</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Graphic Designer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>UI/UX</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>IOT Dev</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Web Developer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Graphic Designer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>Video Editor</span>
          </div>

          <div className='flex gap-0 w-full justify-start bg-brand-1000 text-brand-100 border-brand-100 text-lg whitespace-nowrap mb-4'>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>Video Editor</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>UI/UX</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>IOT Dev</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Graphic Designer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Web Developer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>Video Editor</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>UI/UX</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>IOT Dev</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Graphic Designer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Web Developer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>Video Editor</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>UI/UX</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 py-2.5 px-4'>IOT Dev</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Graphic Designer</span>
            <span className='bg-brand-1000 border-y-2 py-2.5'>•</span>
            <span className='bg-brand-1000 border-y-2 font-semibold py-2.5 px-4'>Web Developer</span>
          </div>
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
          {/* <Ballpit
            count={100}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={false}
            colors={[0x000C1B, 0x002D64, 0x004495]}
            ambientColor={0x000102}
            className="bg-brand-1000"
          /> */}
        </div>
      </section>

      {/* SECTION SKILL */}
      <section className="flex min-h-screen px-2 sm:px-4 md:px-6 lg:px-10 py-20 bg-brand-1000 ">
        <div className="flex flex-col w-full h-full gap-5">
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

      <section className="bg-brand-1000 px-2 sm:px-4 md:px-6 lg:px-10">
        <h2 className="text-7xl font-medium text-brand-0 mb-2">BEST PROJECT</h2>

        {
          bestProject.map((bp)=> (
            <div className="flex flex-row gap-4 h-fit">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-fit">
                  <div className="col-span-2">
                    <img className="aspect-video object-cover w-full" src={bp.mainImageUrl} alt="" />
                  </div>
                  <div className="row-start-2">
                    <img className="aspect-video object-cover w-full" src={bp.image1Url} alt="" />
                  </div>
                  <div className="row-start-2">
                    <img className="aspect-video object-cover w-full" src={bp.image2Url} alt="" />
                  </div>
              </div>
              <div className="flex flex-col gap-5 w-full">
                <h3 className="text-5xl font-bold text-brand-0">{bp.name}</h3>
                <p className="text-lg font-normal text-brand-50 ml-8">{bp.description}</p>
                
                
                <div className="flex flex-row gap-4">
                  {bp.techStackApp.map((icon, i)=> (
                    // <Tooltip content={bp-icon-{i}} placement="top">
                    //   {/* <div id="tooltip-jese" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                    //       {bp-icon-{i}}
                    //       <div className="tooltip-arrow" data-popper-arrow></div>
                    //   </div> */}
                    //   <img data-tooltip-target="tooltip-jese" key={i} className="w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300" src={icon} alt={bp-icon-{i}}/>
                    // </Tooltip>
                    <img key={i} className="w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300" src={icon} alt={bp-icon-{i}} />
                  ))}
                </div>

              </div>
            </div>
          ))
        }

        
      </section>

      <section className="bg-brand-950 px-2 sm:px-4 md:px-6 lg:px-10 pb-10">
        <div className="">
          <div className="relative mb-5">
            <div className="relative z-20 aspect-video p-4 w-full text-brand-0 text-7xl font-bold flex flex-col justify-between">
              <h2>BEST DESIGN</h2>
              <h3 className="text-end">2025</h3>
            </div>
            <img className="absolute bottom-0 left-0 z-10 aspect-video object-cover w-full" src={pathImage+"/galery/sampul/bgBestDesign2025.webp"} alt="" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="">
              <img className="w-full h-fit" src={pathImage+"/galery/carousaleReor.webp"} alt="" />
            </div>
            <div className="flex flex-row w-full h-fit gap-5">
              <div className="flex flex-col w-full h-fit gap-5">
                {
                  galery1.map((item1)=> (
                    <img className="w-full h-fit" src={item1.url} alt={item1.name} />
                  ))
                }
              </div>
              <div className="flex flex-col w-full h-fit gap-5">
                {
                  galery2.map((item2)=> (
                    <img className="w-full h-fit" src={item2.url} alt={item2.name} />
                  ))
                }
              </div>
              <div className="flex flex-col w-full h-fit gap-5">
                {
                  galery3.map((item3)=> (
                    <img className="w-full h-fit" src={item3.url} alt={item3.name} />
                  ))
                }
              </div>
              <div className="flex flex-col w-full h-fit gap-5">
                {
                  galery4.map((item4)=> (
                    <img className="w-full h-fit" src={item4.url} alt={item4.name} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="flex flex-row justify-between py-4 px-10">
          <a className="text-lg font-medium text-gray-500" href="#">← previous</a>
          <a className="text-lg font-medium text-brand-0" href="/contact">
            <p>Next →</p>
            {/* <div>
              <p>TENTANG</p>
            </div> */}
          </a>
        </div>
      </footer>
    </div>
  );
}