'use client'
import React, { useEffect, useRef, useState } from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { FaGraduationCap } from 'react-icons/fa6'

const Resume = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      
      if (timelineTop < windowHeight && rect.bottom > 0) {
        const visibleStart = Math.max(0, windowHeight - timelineTop);
        const percentage = Math.min(100, (visibleStart / timelineHeight) * 100);
        setLineHeight(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TimelineRow = ({ leftCard, rightCard }: { leftCard: React.ReactNode; rightCard: React.ReactNode }) => (
    <div className='relative grid grid-cols-1 xl:grid-cols-[1fr_40px_1fr] gap-2 mb-3'>
      <div className='pl-10 xl:pl-0 xl:pr-2'>{leftCard}</div>
      <div className='hidden xl:flex items-center justify-center'>
        <div className='w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.6)] z-10' />
      </div>
      <div className='pl-10 xl:pl-2'>{rightCard}</div>
    </div>
  );

  const lineStyle = {
    height: `${lineHeight}%`,
    background: 'linear-gradient(to bottom, #22d3ee, #3b82f6, #22d3ee)',
    boxShadow: '0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.3)'
  };
  const lineStyleMobile = { ...lineStyle, boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)' };

  return (
    <div id='resume' className='pt-10 pb-16'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
          My <span className='text-cyan-400'>Resume</span>
        </h1>
        <p className='text-gray-400 mt-3 max-w-2xl mx-auto px-4 text-sm sm:text-base'>
          A timeline of my professional journey and educational background
        </p>
      </div>

      <div className='hidden xl:grid grid-cols-[1fr_40px_1fr] gap-2 w-[90%] lg:w-[80%] mx-auto mb-6'>
        <div className='text-center'><span className='text-cyan-400 font-semibold text-lg'>Work Experience</span></div>
        <div />
        <div className='text-center'><span className='text-cyan-400 font-semibold text-lg'>Education</span></div>
      </div>

      <div className='w-[95%] lg:w-[80%] mx-auto'>
        <div ref={timelineRef} className='relative'>
          <div className='hidden xl:block absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-cyan-900/30 rounded-full'>
            <div className='w-full rounded-full transition-all duration-1800 ease-out' style={lineStyle} />
          </div>
          <div className='xl:hidden absolute left-[14px] top-0 w-1 h-full bg-cyan-900/30 rounded-full'>
            <div className='w-full rounded-full transition-all duration-1800 ease-out' style={lineStyleMobile} />
          </div>
          <div className='xl:hidden'>
            {[12, 28, 44, 60, 76].map((pct) => (
              <div key={pct} className='absolute left-[10px] w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900 z-10' style={{ top: `${pct}%` }} />
            ))}
          </div>
          <TimelineRow
            leftCard={
              <ResumeCard 
                Icon={FaCodepen} 
                role="MERN Stack Developer Intern"
                date='Jul 2025 - Present'
                description="Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js."
              />
            }
            rightCard={
              <ResumeCard 
                Icon={FaReact} 
                role="Diploma in Information Technology"
                date='2022 - 2025'
                description="Government Polytechnic College, Purapuzha"
              />
            }
          />
          <TimelineRow
            leftCard={
              <ResumeCard 
                Icon={FaReact} 
                role="Full-Stack Developer Intern"
                date='Apr 2024 - May 2024'
                description="Built responsive user interfaces with React and TypeScript. Integrated RESTful APIs and worked on database optimization."
              />
            }
            rightCard={
              <ResumeCard 
                Icon={BiBadge} 
                role="Higher Secondary Education"
                date='2022'
                description="GOVT HSS Muppathadam, Aluva, Kerala"
              />
            }
          />
          <TimelineRow
            leftCard={<div />}
            rightCard={
              <ResumeCard
                Icon={FaReact}
                role="Secondary Education"
                date='2021'
                description="GOVT HS West Kadungalloor, Aluva, Kerala"
              />
            }
          />

        </div>
      </div>
    </div>
  )
}

export default Resume