"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY <= 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md " : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center justify-between w-[90%] h-full mx-auto">
        {/* logo */}
        <a href="#">
          <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            Abhijith
          </h1>
        </div>
        </a>
        {/* navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-300 text-white
                font-medium transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {/* view resume in new tab */}
          <a
            href="/Resume/AbhijithPR_Mern Stack Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3.5 cursor-pointer rounded-lg border border-blue-500 text-blue-300 hover:bg-blue-900/40 transition-all duration-300"
            >
              View Resume
            </button>
          </a>

          {/* download cv button */}
          <a href="/Resume/AbhijithPR_Mern Stack Developer.pdf" download>
            <button
              className="px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm lg:px-8 lg:py-3.5 cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
            >
              <BiDownload className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </a>

          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
