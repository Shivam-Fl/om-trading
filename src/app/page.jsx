"use client";
import Image from "next/image";
import HomeIntro from "@/app/components/Home/intro";
import ServiceProductCard from "@/app/components/Home/ProductCard";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "@/app/components/Home/about";
import Achivement from "@/app/components/Home/achievement";
import Founders from "@/app/components/Home/founders";
import FAQ from "@/app/components/FAQs/page";


export default function Home() {
 

  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className="overflow-hidden max-lg:-mt-5">
      <div>
        <HomeIntro />
      </div>
      <div className="max-w-7xl mx-auto max-sm:mx-4">
        <ServiceProductCard />
      </div>

      <div className="max-w-7xl mx-auto mb-[5vh] p-[3vh] ">
        <AboutUs />
      </div>
      <div className="max-w-7xl mx-auto mb-[5vh] md:p-[3vh]">
        <Founders />
      </div>
      <div className="max-w-7xl mx-auto mb-[5vh] p-[3vh]">
        <Achivement />
      </div>
      <div className="max-w-7xl mx-auto mb-[5vh] p-[3vh]">
        <FAQ />
      </div>

     
    </div>
  );
}
