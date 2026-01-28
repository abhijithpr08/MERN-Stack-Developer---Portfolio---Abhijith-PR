'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

//  Custom Next Arrow
const NextArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <button
      type="button"
      onClick={onClick}
      className={`!flex !items-center !justify-center !bg-white/10 hover:!bg-white/20 !text-white !rounded-full !w-10 !h-10 !absolute !right-2 !top-1/2 !-translate-y-1/2 !z-10 ${className || ''}`}
      style={style}
    >
      ›
    </button>
  )
}

//  Custom Prev Arrow
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props
  return (
    <button
      type="button"
      onClick={onClick}
      className={`!flex !items-center !justify-center !bg-white/10 hover:!bg-white/20 !text-white !rounded-full !w-10 !h-10 !absolute !left-2 !top-1/2 !-translate-y-1/2 !z-10 ${className || ''}`}
      style={style}
    >
      ‹
    </button>
  )
}

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: '/images/project1.png',
      title: 'Double Barrel',
      subtitle: 'E-Commerce, App',
    },
    {
      id: 2,
      src: '/images/project2.png',
      title: 'agency.ai',
      subtitle: 'Apps, UI',
    },
    {
      id: 3,
      src: '/images/project3.png',
      title: 'Portfolio X',
      subtitle: 'Web, Design',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div id="work" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      <div
        className="w-[70%] mx-auto mt-16"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-3">
              <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={800}
                  height={650}
                  className="rounded-lg w-full object-cover"
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                  {project.title}
                </h1>
                <h1 className="pt-2 font-medium text-white/80">
                  {project.subtitle}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Projects
