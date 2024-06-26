"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Counter from "./Counter";

import { FaArrowRight } from "react-icons/fa";

const HomeIntro = () => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="max-sm:h-[90vh] home mb-[5vh] rounded-bl-[10vh] relative overflow-hidden"
    >
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        id="myVideo"
      >
        <source src="/home/home2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-black opacity-30 absolute max-sm:h-[95vh] h-[100%] w-[100vw] rounded-bl-[10vh]"></div>

      <div className="md:flex relative max-lg:mx-4 z-10 h-full flex flex-col justify-center items-center">
        <div className="md:p-[5vh] md:pt-52 pt-24 lg:mt-20 gap-10 lg:gap-20 font-medium md:pr-0">
          <span
            data-aos="fade-up"
            data-aos-duration="400"
            className="text-white max-md:text-[3rem] md:text-[4rem] lg:text-[6rem] leading-tight shadow outline-8 font-bold drop-shadow-lg [text-shadow:_0_1px_0_rgb(1_1_1_/_40%)]"
          >
            <span className="text-black bg-blue-500 p-1 rounded-2xl">Om Trading</span><br />
            <span className="text-[#ac3f8d]">Corporation</span>
          </span>
          <p className="text-white max-sm:text-[0.9rem] md:mt-5 font-light [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Om Trading Corporation specializes in global trading and supply
            chain solutions. <br/> We deliver quality, efficiency, and
            sustainability across international markets.
          </p>
          <Link href="/contact">
            <div className="bg-blue-400 p-2 px-6 text-black rounded-lg w-44 mt-6 flex items-center space-x-4 h-12">
              <span>Contact Us</span>
              <FaArrowRight className="text-blue-100 font-extrabold text-xl" />
            </div>
          </Link>
        </div>
        {/* <div className="md:absolute md:bottom-0 md:right-0 ">
          <Counter />
        </div> */}
      </div>
    </div>
  );
};

export default HomeIntro;
