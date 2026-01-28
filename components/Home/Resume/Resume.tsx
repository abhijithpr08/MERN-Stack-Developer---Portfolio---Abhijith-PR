import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div id='resume' className='pt-20 pb-16'>
        <div className='w-[90% sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Work part */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My Work <span className='text-cyan-200'>Experience</span>
                 </h1>
                 <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen} role="MERN Stack Developer Intern"/>
                    <ResumeCard Icon={FaReact} role="Full-Stack Developer Intern"/>
                    <ResumeCard Icon={BsDatabase} role="Backend Developer"/>
                 </div>
            </div>
            {/* Education part */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-cyan-200'>Education</span>
                </h1>
                <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ResumeCard 
                        Icon={BiBadge} 
                        role="Design Institute of Technology"
                        date='Jan 2023 - Dec 2024'
                    />
                    <ResumeCard 
                        Icon={FaReact} 
                        role="Bachelor in computer Science"
                        date='Jan 2023 - Dec 2024'
                    /><ResumeCard 
                        Icon={BsDatabase} 
                        role="Full-Stack Developer"
                        date='Jan 2023 - Dec 2024'
                    />
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Resume