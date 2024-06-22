"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Trading",
    description:
      "Connecting you with reliable global markets, ensuring the best value and quality for your products and services.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s",
  },
  {
    title: "International Supply",
    description:
      "Streamlining your supply chain operations to enhance efficiency, reduce costs, and ensure timely delivery.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s",
  },
  {
    title: "Logistics",
    description:
      "Managing the logistics of your goods, ensuring safe and efficient transport across international borders.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s",
  },
  {
    title: "Compliance",
    description:
      "Ensuring that your trade practices meet all international regulations and standards.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s",
  },
];

const otherServices = [
  { href: "https://unsplash.com/photos/5fNmWej4tAA", title: "Market Analysis" },
  { href: "https://unsplash.com/photos/yHiNpx7Wh2I", title: "Risk Management" },
  {
    href: "https://unsplash.com/photos/wAwEfYdpkag",
    title: "Supply Chain Optimization",
  },
  {
    href: "https://unsplash.com/photos/9SoCnyQmkzI",
    title: "Customs Brokerage",
  },
  {
    href: "https://images.unsplash.com/photo-1581094478164-6c3e1ce3d2b6",
    title: "Training",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div>
       <Head>
        <title>Services - Om Trading Corporation</title>
        <meta name="description" content="Discover the range of services offered by Om Trading Corporation. We provide exceptional global trading and supply chain solutions to help you succeed in the international market." />
        <meta name="keywords" content="om trading, services, global trading, supply chain solutions, international market, business services" />
      </Head>

      <main className="mx-auto font-[NeoSansPro-Regular]">
        <div className=" flex flex-col     ">
          <header
            data-aos="fade-up"
            data-aos-duration="600"
            className="bg-blue-600 h-52 text-white p-6"
          >
            <div className="container flex max-sm:justify-center max-sm:items-center text-center sm:h-80 mx-10 relative">
              <h1 className="font-extralight mb-4 text-start text-4xl xl:text-7xl pt-14 sm:pt-24 font-[NeoSansPro-Medium] ">
                Services
              </h1>
              <p className="text-sm sm:text-xl  text-gray-800 max-sm:max-w-[15rem] max-lg:max-w-[20rem] lg:max-w-lg bg-blue-50 px-4 py-5 xl:px-10 lg:py-12 absolute max-sm:-bottom-20  bottom-24 sm:-right-14 md:right-8 lg:right-28  font-[NeoSansPro-Light] font-bold rounded-3xl">
                Om Trading Corporation is a leading provider of international
                trading and supply chain solutions.
              </p>
            </div>
          </header>

          <div className="flex flex-col mx-auto justify-center items-center lg:flex-row max-w-7xl bg-blue-50 p-2 sm:p-10 gap-x-32 gap-y-8  border-b rounded-b-3xl ">
            <div className="basis-2/3 ">
              <section
                data-aos="fade-up"
                data-aos-duration="600"
                className="mt-14 bg-blue-200 rounded-2xl shadow-sm p-4"
              >
                <h3 className="text-xl  md:text-2xl text-center font-normal mb-2">
                  {" "}
                  Our extensive network spans across continents, ensuring the
                  seamless movement of goods and services globally.{" "}
                </h3>
              </section>
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="600"
              className="bg-white max-w-96 rounded-lg shadow-md p-6 mt-10 basis-1/3 z-[100]"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuposbl6SbLVzfVXLlDPELAZiRlHgXySvQ&s"
                  alt="Greenhouse"
                  className="w-full h-full object-cover"
                />
                {/* Obscured face placeholders */}
                <div className="absolute inset-0 bg-brown opacity-50"></div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mt-4">Our Responsibility</h2>

              {/* Descriptive text */}
              <p className="text-gray-600 mt-2">
                At Om Trading Corporation, our mission of facilitating global
                trade with integrity, efficiency, and sustainability positions
                us as a catalyst for positive change in the international
                marketplace.
              </p>
            </div>
          </div>
        </div>
        <section className=" mx-5 max-sm:flex max-sm:justify-center max-sm:items-center sm:mx-16 pt-20 ">
          <div className="sm:container mx-auto flex flex-wrap justify-center items-center gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white max-w-80 rounded-lg shadow-md"
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="relative h-48 overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brown opacity-50"></div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="px-6 py-4"
                >
                  <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-6 sm:mx-16 py-8">
          <div className="container mx-auto">
            <h4 className="text-2xl sm:text-4xl font-bold mb-4 text-primary mt-10">
              Other services
            </h4>
            <div className="sm:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.map((service, index) => (
                <div
                  key={index}
                  className="pl-4 py-4 text-gray-800 shadow-lg rounded-lg flex h-[4.25rem] md:h-14"
                >
                  <h5 className="text-lg sm:text-xl font-bold mb-2 basis-3/4">
                    <p>{service.title}</p>
                  </h5>
                  <div className="basis-1/4  relative ">
                    <img
                      className="h-14 absolute -top-4 left-3 sm:left-6"
                      src={service.href}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className=" py-8 text-center">
            <div className='container mx-auto'>
            <h4 className=" text-3xl font-bold mb-4 text-primary">Looking for something else?</h4>
          <Link href="/regions">
            <p className="bg-primary text-white py-2 px-4 rounded-lg">Explore our services by region</p>
          </Link>
            </div>
          
        </section> */}
      </main>

      {/* <footer className="bg-primary text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Link href="/">
              <p className="text-lg font-bold">Om Trading Corporation</p>
            </Link>
          </div>
          <nav className="space-x-4 mb-4">
            <Link href="/disclaimer">
              <p>Disclaimer</p>
            </Link>
            <Link href="/terms">
              <p>Terms</p>
            </Link>
            <Link href="/privacy">
              <p>Privacy</p>
            </Link>
            <Link href="/cookies">
              <p>Cookies</p>
            </Link>
            <Link href="/ethical-trading">
              <p>Ethical Trading Statement</p>
            </Link>
          </nav>
          <div>
            <p>
              &copy; {new Date().getFullYear()} Om Trading Corporation. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
