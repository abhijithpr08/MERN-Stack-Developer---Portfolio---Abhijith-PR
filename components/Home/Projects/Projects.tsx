"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: "/images/project1.png",
      title: "Double Barrel",
      subtitle: "E-Commerce, App",
    },
    {
      id: 2,
      src: "/images/project2.png",
      title: "agency.ai",
      subtitle: "Apps, UI",
    },
    {
      id: 3,
      src: "/images/project3.png",
      title: "Student Management",
      subtitle: "Web, Design",
    },
    {
      id: 4,
      src: "/images/project4.png",
      title: "WEATHER APP",
      subtitle: "App, UI",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    centerMode: true, 
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="work" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      <div
        className="w-[70%] mx-auto mt-16 py-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-4 py-10">
              <div
                className="
  project-card
  bg-white/5 p-4 rounded-xl backdrop-blur-sm
  transition-all duration-300 ease-out
  scale-100 opacity-80
  hover:scale-[1.03] hover:-translate-y-1 hover:opacity-100 hover:z-20
"

              >
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
  );
};

export default Projects;
