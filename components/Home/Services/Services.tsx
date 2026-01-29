import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div id="services" className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        Solutions I <span className='text-cyan-400'>Deliver</span>
      </h1>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20
      items-center'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard 
            icon="/images/mern.png"
            name="MERN Stack Development"
            description="Building fast, scalable, and secure web applications using MongoDB, Express.js, React.js, and Node.js."
            />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServiceCard 
            icon="/images/api.png"
            name="Backend & API Development"
            description="Designing robust RESTful APIs and server-side logic to power seamless and secure application functionality."
            />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServiceCard 
            icon="/images/frontend.png"
            name="Frontend Web Development"
            description="Creating responsive, dynamic, and user-friendly interfaces using React.js and modern UI technologies."
            />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServiceCard 
            icon="/images/database.png"
            name="Database Design & Integration"
            description="Structuring and managing MongoDB databases with optimized queries for performance and reliability."
            />
        </div>
      </div>
    </div>
  )
}

export default Services