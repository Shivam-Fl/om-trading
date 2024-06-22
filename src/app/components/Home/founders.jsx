import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Founders() {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className="flex max-md:flex-col justify-center items-center max-w-7xl m-2 gap-x-10 mt-10 ">
      <div className="basis-2/4 flex flex-col gap-y-10">
        <h2 className="text-bold max-md:text-3xl max-sm:text-center md:text-5xl text-black font-[NeoSansPro-Medium]">
          Meet Our Founders
        </h2>
        <div className="bg-blue-100 p-5 md:p-10 rounded-3xl font-[NeoSansPro-Light]">
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus culpa beatae praesentium dolor corrupti optio deserunt
            perspiciatis tempore neque vitae? Nulla saepe quae explicabo
            praesentium perferendis vitae hic velit sint?
          </p>
        </div>
      </div>
      <div
        data-aos="flip-down"
        data-aos-duration="600"
        className="basis-1/4 flex flex-col justify-center items-center gap-y-4 p-4"
      >
        <img
          className="rounded-full h-32 w-32"
          src="/ANJANA_JALAPUR.jpeg"
          alt="ANJANA_JALAPUR"
        />
        <div className="text-bold font-[NeoSansPro-Medium]">
          <h2 className="text-center ">ANJANA JALAPUR</h2>
          <h2 className="text-center">Proprietor</h2>
        </div>
        <div className="flex gap-2">
          {/* <a href="">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/ios/50/facebook-new.png"
              alt="facebook"
            />
          </a> */}
          <a href="https://www.instagram.com/anjanajayant?igsh=MTM2Nzl4M3lhMXR2bQ==">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/ios/50/instagram-new--v1.png"
              alt="instagram"
            />
          </a>
          {/* <a href="">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/ios/50/linkedin.png"
              alt="linkedin"
            />
          </a> */}
        </div>
      </div>
      <div
        data-aos="flip-up"
        data-aos-duration="600"
        className="basis-1/4 flex flex-col justify-center items-center gap-y-4 bg-blue-100 rounded-3xl p-4"
      >
        <img
          className="rounded-full h-32 w-32"
          src="/shreyas.jpeg"
          alt="Shreyas photo"
        />
        <div className="text-bold font-[NeoSansPro-Medium]">
          <h2 className="text-center ">SHREYAS JALAPUR</h2>
          <h2 className="text-center">CMO</h2>
        </div>
        <div className="flex gap-2">
          {/* <a href="">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/ios/50/facebook-new.png"
              alt="facebook"
            />
          </a> */}
          <a href="https://www.instagram.com/woh_scrapji_wala?utm_source=qr&igsh=dmRoenQyNmxzNjFu">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/ios/50/instagram-new--v1.png"
              alt="instagram"
            />
          </a>
          {/* <a href="">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/ios/50/linkedin.png"
              alt="linkedin"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
