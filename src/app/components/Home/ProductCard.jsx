import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ServiceProductCard = () => {
  const products = [
    {
      title: "Coffee Shops",
      description:
        "Laila Saif Mutlaq Al-Otaibi has developed many coffee shops in Saudi arabia with our professional skilled staff.",
      image: "/products/1.png",
    },
    {
      title: "Shops",
      description:
        "Many shops & malls developed all over the the kingdom by amaze arabia contracting company",
      image: "/products/2.png",
    },
    {
      title: "Outlets",
      description:
        "Laila Saif Mutlaq Al-Otaibi has developed many outlets. Saudi Arabia with our skills and professional staff.",
      image: "/products/3.png",
    },
  ];
  return (
    <div className=" pt-10 max-w-7xl flex flex-col m-2">
      <h2 className="text-bold text-5xl text-black font-[NeoSansPro-Medium]">
        Products We Ship!
      </h2>
      <div className="md:mt-4 md:flex  md:gap-[3vh] gap-96">
        {products.map((product, id) => (
          <div
            key={id}
            className="group relative bg-white hover:bg-blue-50 rounded-3xl border shadow-lg  overflow-hidden transition-transform transform hover:scale-105 p-5 md:mt-0 mt-10"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="rounded-3xl hover:bg-blue-50">
              <div className="relative aspect-h-1 aspect-w-1 w-full lg:aspect-none rounded-t-3xl group-hover:opacity-90   lg:h-80 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.image}
                  className="h-52 w-full object-cover object-center lg:h-full lg:w-full max-h-full rounded-t-3xl"
                />
                <Link
                  href=""
                  data-aos="fade-up"
                  className="absolute bottom-2 left-2"
                >
                  <div className="bg-blue-600 p-2 px-6 text-gray-100 rounded-r-lg w-32 mt-6 flex items-center space-x-4 h-12">
                    <span>Explore</span>
                  </div>
                </Link>
              </div>

              <div className="mt-4 p-3 flex justify-center">
                <div className="">
                  <h3 className="text-sm font-semibold text-black">
                    <Link
                      href={``}
                      className="hover:underline text-black font-bold text-lg"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-3">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center justify-center rounded-full hover:bg-white w-28 h-10 bg-blue-100 z-50 border text-center text-2xl">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="text-blue-500 font-bold hover:underline text-end p-3 text-xl md:text-2xl"
        href="/products"
      >
        <p>View All .....</p>
      </a>
    </div>
  );
};

export default ServiceProductCard;
