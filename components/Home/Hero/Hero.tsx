"use client";
import Image from 'next/image'
import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs';
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticaleBachground';

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>

        <ParticlesHero/>

        <div className='relative z-10 flex flex-col items-center mt-15'>
            <div className='absolute z-[-10] top-8 w-screen h-70 bg-amber-50/5'></div>
            <Image 
             src="/images/my.png"
             alt='heroImage'
             width={250}
             height={250}
             className='rounded-full border-8 border-[#0c0c48aa]'
             data-aos="fade-up"
             />
             <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
                Creatig web products,<br />brands,
                <span className='text-cyan-200'> and experiences.</span>
             </h1>
             <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                Hi! I'm Abhijith - A Passionate
                <span className='text-cyan-200 font-bold'>
                    <Typewriter options={{
                        strings:[
                            " Frontend Developer",
                            " Backend Developer",
                            " Web Developer",
                        ],
                        autoStart:true,
                        loop:true,
                        delay:75,
                        deleteSpeed:50,
                        wrapperClassName:"pl-2",
                    }}/>
                </span>
             </h2>
             <a href="#work">
                <button data-aos="fade-up" data-aos-delay="600" className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
             cursor-pointer rounded-full text-lg font-medium'>
                <span>See my work</span>
                <BsArrowBarRight className='w-5 h-5 ml-2 inline-block'/>
             </button>
             </a>
        </div>
    </div>
  )
}

export default Hero