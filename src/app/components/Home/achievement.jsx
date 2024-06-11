"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Achivement = () => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row md:shadow-none shadow-inner shadow-black justify-center items-center">
      <div className="p-5 basis-1/2" data-aos="flip-up">
        <h2 className="text-bold text-4xl text-black font-[NeoSansPro-Medium]">
          Our Achievements
        </h2>
        <p className="md:leading-9 text-[#4D5053] line-clamp-6 pt-5">
          Over the years, Om Trading Corporation and our dedicated team have
          achieved numerous milestones by successfully delivering client
          projects. We believe in fostering long-term relationships through our
          high level of service proficiency and commitment to excellence.
        </p>
        <div className="flex items-center space-x-4 pt-5">
          <div className="flex items-center justify-center rounded-full hover:bg-white w-16 h-16 bg-blue-100 z-50 border text-center text-2xl">
            <IoCallOutline className="text-blue-700 hover:text-black" />
          </div>

          <div className="text-left ">
            <span className="text-[#4D5053] block font-bold">
              +966 66666666666
            </span>
            <span className="text-[#4D5053] block">Call Us Anytime</span>
          </div>
        </div>

        <Link href="/contact" data-aos="fade-up " className="pt-5">
          <div className="bg-blue-600 p-2 px-6 text-black rounded-lg w-40 mt-6  flex items-center space-x-4 h-12">
            <span className="text-white text-sm">Read More</span>
            <FaArrowRight className="text-blue-100 font-extrabold text-xl" />
          </div>
        </Link>
      </div>
      <img
        data-aos="flip-down"
        className="rounded-lg basis-1/2  md:w-[60vh] mx-auto mb-[5vh] md:mb-0"
        src={
          "https://hbr.org/resources/images/article_assets/2023/09/R2306N_NORTON.png"
        }
        alt="logo"
      />
    </div>
  );
};

export default Achivement;
