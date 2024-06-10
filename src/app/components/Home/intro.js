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
      className=" h-[85vh] bg-home mb-[5vh] rounded-bl-[10vh] "
    >
      {/* <video className="border rounded-bl-[10rem] " autoPlay muted  id="myVideo">
  <source src="/home/homV.mp4" type="video/mp4" />
</video> */}

      <div className="md:flex relative">
        <div className="md:p-[5vh] md:pt-52 pt-36 md:pl-36 lg:mt-32  gap-10 lg:gap-20 font-medium md:pr-0 ">
          <span
            data-aos="fade-up"
            data-aos-duration="400"
            className="text-white md:text-8xl text-5xl sm:text-6xl lg:text-[10rem] leading-tight shadow outline-8 font-bold "
          >
            Om Trading <br />
            Corporation
          </span>
          <p className="text-white md:mt-5 font-light">
            Om Trading Corporation specializes in global trading and supply
            chain solutions. <br /> We deliver quality, efficiency, and
            sustainability across international markets.
          </p>
          <Link href="/contact" data-aos="fade-up">
            <div className="bg-blue-400 p-2 px-6 text-black rounded-lg w-44 mt-6 flex items-center space-x-4 h-12">
              <span>Contact Us</span>
              <FaArrowRight className="text-blue-100 font-extrabold text-xl" />
            </div>
          </Link>
        </div>
        <div className="md:absolute md:bottom-0 md:right-0 ">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
