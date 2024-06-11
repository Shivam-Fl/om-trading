"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className="bg-blue-100 max-w-7xl mx-auto mt-[10vh] shadow-lg rounded-xl w-full p-[4vh] md:p-[8vh] flex lg:flex-row flex-col justify-center items-center">
      <div className="sm:basis-1/2  ">
        <video
          data-aos="fade-left"
          data-aos-duration="600"
          className=" rounded-3xl max-sm:h-[15vh] h-[10rem] mb-[3vh] ml-16 max-md:-mb-5 sm:ml-48 border-2 border-blue-700 md:mb-0 "
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src="/home/homV.mp4" type="video/mp4" />
        </video>
        <video
          data-aos="fade-left"
          data-aos-duration="600"
          className=" rounded-3xl h-[10rem] max-sm:h-[15vh] -mt-5 max-sm:-mt-16 max-md:-mt-16 border-2 border-blue-400  mb-[3vh] md:mb-0 "
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src="/home/home (2).mp4" type="video/mp4" />
        </video>
      </div>

      {/* <img
        
        className="w-[100%] h-[100%] md:w-[60vh] md:h-[60vh] mb-[3vh] md:mb-0"
        src={"/products/1.png"}
        alt="logo"
      /> */}
      <div
        className="md:p-[5vh] sm:basis-1/2"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <span className="text-black md:text-[9vh] text-5xl md:leading-tight leading-normal font-medium">
          About Us
        </span>
        <p className="md:leading-9 text-gray-800 text-justify">
          Laila Saif Mutlaq Al-Otaibi is a leading fit-out company in Saudi
          Arabia offering design and fit-out contracting services with a wide
          portfolio of projects ranging from decorating a simple office,
          residential, commercial design, that can provide the services of full
          turnkey projects. Its reputation in commercial & residential market
          have secured intuition interiors a prominent placement in the Saudi
          Arabia Interior design industry through its unique technical approach
          & effective execution plan.
        </p>
        <Link href="/about" data-aos="fade-up">
          <div className="bg-[#292F36] p-2 px-6 text-black rounded-lg w-44 mt-6 flex items-center space-x-4 h-12">
            <span className="text-white text-sm">Explore More</span>
            <FaArrowRight className="text-blue-50 font-extrabold text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
