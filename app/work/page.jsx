'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import { Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
 } from '@radix-ui/react-tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderButtons from '@/components/ui/WorkSliderButtons';

const projects = [
  {
    num: '01',
    category: 'Front End',
    title: 'She Fits',
    description: 'A Simlple HTML, CSS, and Java Script website for a clothing designing project according to the user requirements',
    stack: [{name:'HTML'}, {name:'CSS'}, {name:'Java Script'}, {name:'Vercel'}],
    image: '/assets/Shefitscover.jpg',
    github: 'https://github.com/dileepa-dev/she-fits.git',
    live: 'https://she-fits.vercel.app',
  },
  {
    num: '02',
    category: 'Full Stack',
    title: 'Happy Paws',
    description: 'A full stack website for a pet care service with a ML model which can suggest the best pet food according to the pet type',
    stack: [{name:'React.js'}, {name:'Tailwind CSS'}, {name:'JavaScript'}, {name:'Vercel'}, {name:'Render'}, {name:'Python'}, {name:'Flask'}],
    image: '/assets/HappyPaws.jpg',
    github: 'https://github.com/dileepa-dev/SDGP-HappyPaws.git',
    live: 'https://sdgp-happy-paws.vercel.app',
  },
  {
    num: '03',
    category: 'Front end',
    title: 'Portfolio',
    description: 'A portfolio website for a software engineer',
    stack: [{name:'Next.js'}, {name:'Tailwind CSS'}, {name:'TypeScript'}, {name:'React'}],
    image: '/assets/portfolio25.jpg',
    github: 'https://github.com/dileepa-dev/portfolio-2025.git',
    live: 'https://portfolio-2025-two-tau.vercel.app',
  },
];

const Work = () => {
  const [project, setProjects] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    setProjects(projects[index]);
  }

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl: justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {}
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                  {project.num}
                </div>    
              {}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transistion-all duration-500 capitalize'>
                {project.category} Project
              </h2>
              {}
              <p className='text-white/60'>{project.description}</p>
              {}
              <ul>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent inline'>
                      {item.name}
                      {index !== project.stack.length - 1 && ', '}
                    </li>
                  );
                })}
              </ul>
              {}
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5
                      flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hoveer:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5
                      flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hoveer:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}>
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index}
                  className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black'></div>
                    <div className='relative w-full h-full'>
                      <Image src={project.image} alt=" " fill className='object-cover'>
                      </Image>
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/*Slider Navigation*/}
              <WorkSliderButtons 
              containerStyles= "flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xlLw-max xl:justify-none"
              btnStyles="bg-accent hover:bg-DEFAULT-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;