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
      title: "Weather App",
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
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
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
        className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-16 py-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-3 sm:px-4 py-10">
              <div
                className="
                project-card group relative overflow-hidden rounded-2xl
                bg-gradient-to-br from-white/10 to-white/5
                border border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                backdrop-blur-lg
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-400/40
              "
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={800}
                    height={650}
                    className="rounded-xl w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition" />
                </div>

                {/* Text */}
                <div className="relative p-5">
                  <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
                    {project.title}
                  </h1>
                  <p className="mt-2 text-sm text-cyan-300 font-medium tracking-wider uppercase">
                    {project.subtitle}
                  </p>
                </div>

                {/* Glow Hover Effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
