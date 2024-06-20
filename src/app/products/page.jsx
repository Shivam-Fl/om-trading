"use client";
import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    image: "/products/1.png",
    name: "PEARL POWDER",
    link: "#",
    label: "New",
    rating: 4,
    price: "$99.00",
    description:
      "Nacre, an ingredient in pearl powder can also stimulate fibroblasts in the body, which accelerates wound healing. This can also help collagen regenerate itself, which may make wrinkles appear less prominent. Pearl powder was used as an anti-inflammatory, detoxifying agent, and relaxant in Chinese medicine",
  },
  {
    image: "/products/2.png",
    name: "TOMATO POWDER",
    link: "#",
    label: "",
    rating: 5,
    price: "$299.00",
    description:
      "Tomato Powder has anti-atherosclerotic properties thanks to the acid they contain, which intensifies the oxidation of fatty acids in liver cells and inhibits the accumulation of triglycerides in them. Cholesterol levels are also lowered by pectin in tomato powder. Lycopene also works well for the heart.",
  },
  {
    image: "/products/3.png",
    name: "MORINGA",
    link: "#",
    label: "Sale",
    rating: 3,
    price: "$199.00",
    description:
      "Moringa contains a range of antioxidant and anti-inflammatory agents, such as quercetin, which may help protect cardiovascular health. Quercetin may help prevent lipid formation and inflammation, both of which can contribute to heart disease. Moringa may also have cholesterol-lowering properties.",
  },
  {
    image: "/products/4.png",
    name: "SHELL POWDER",
    link: "#",
    label: "",
    rating: 5,
    price: "$349.00",
    description: "Using shell powder as a feed additive can promote bone growth and blood circulation of livestock and poultry, and improve the quality and output of eggs and milk. After being eaten, shell powder can stay in the muscles of poultry and livestock for up to several days, and the absorption time is sufficient",
  },
  {
    image: "/products/5.png",
    name: "ONION POWDER",
    link: "#",
    label: "",
    rating: 5,
    price: "$349.00",
    description:
      "Onion powder can combat various bacterial and fungal infections, including those in the mouth, which often lead to mouth sores. Its antimicrobial properties are also of high significance in treating chest and nasal congestion, making it a natural remedy for common ailments like bronchitis and asthmatic conditions.",
  },
  {
    image: "/products/6.png",
    name: "PEARL",
    link: "#",
    label: "",
    rating: 5,
    price: "$349.00",
    description: "Pearls are prized gemstones known for their lustrous beauty and elegance. They are formed within the soft tissue of a living shelled mollusk. Pearls come in various colors, including white, black, and pink. They symbolize purity and are often used in jewelry such as necklaces, earrings, and bracelets. Besides their aesthetic value, pearls are believed to have calming effects and promote emotional balance."
,
  },
  {
    image: "/products/7.png",
    name: "POTASH ALUM",
    link: "#",
    label: "",
    rating: 5,
    price: "$349.00",
    description:
      "Properties of alum for the skin Astringents can temporarily reduce the size of pores and tighten the skin. Alum is also bacteriostatic, which means it prevents bacteria from growing, making it useful as a preservative. It can reduce bacterial growth in personal care products and extend their shelf life",
  },
  {
    image: "/products/8.png",
    name: "Multani Mitti",
    link: "#",
    label: "",
    rating: 5,
    price: "$349.00",
    description:
      "Multani Mitti is backed by oil-absorbing properties, which help control the excess sebum produced by sebaceous glands. It makes it a perfect ingredient for people with oily or acne-prone skin. It reduces oiliness, unclogs skin pores, and prevents acne and pimple breakouts.",
  },
  {
    image: "/products/9.png",
    name: "CURRY LEAVES",
    link: "#",
    label: "",
    rating: 5,
    price: "$349.00",
    description: "Curry leaves are rich in antioxidants, vitamins (such as A, B, C, and E), and minerals. They are believed to have various health benefits, including aiding digestion, promoting hair health, reducing cholesterol, controlling diabetes, and having anti-inflammatory properties",
  },
  {
    image: "/products/alphonso_mango.jpg",
    name: "ALPHONSO MANGO",
    link: "#",
    label: "Seasonal",
    rating: 5,
    price: "$499.00",
    description: "Alphonso mangoes are renowned for their rich flavor, vibrant color, and sweet taste. They are a great source of vitamins A, C, and E, as well as dietary fiber. Alphonso mangoes are often enjoyed fresh, in smoothies, or as a key ingredient in desserts and sauces."
  },
  {
    image: "/products/yellow_turmeric.webp",
    name: "YELLOW TURMERIC POWDER",
    link: "#",
    label: "",
    rating: 4.5,
    price: "$199.00",
    description: "Yellow turmeric powder is widely used for its vibrant color and earthy flavor in culinary dishes. It is rich in curcumin, which has powerful anti-inflammatory and antioxidant properties. This spice is also known to support immune health, improve digestion, and enhance skin health."
  },{
    image: "/products/black_turmeric.jpg",
    name: "BLACK TURMERIC POWDER",
    link: "#",
    label: "",
    rating: 4.5,
    price: "$299.00",
    description: "Black turmeric powder is known for its distinctive dark color and pungent flavor. It contains curcumin and other bioactive compounds that offer numerous health benefits, including anti-inflammatory, antioxidant, and antimicrobial properties. It is often used in traditional medicine to aid with respiratory issues, digestive problems, and joint pain."
  },    
  
  
];

const FeaturedItems = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 font-[NeoSansPro-Regular]">
      <header
        data-aos="fade-up"
        data-aos-duration="600"
        className="bg-blue-600 h-52 text-white p-6"
      >
        <div className="container flex max-sm:justify-center max-sm:items-center text-center sm:h-80 mx-10 relative ">
          <h1 className="font-extralight mb-4 text-start text-4xl xl:text-7xl pt-14 sm:pt-24 font-[NeoSansPro-Medium] ">
            Products
          </h1>
          <p className="text-sm sm:text-xl  text-gray-800 max-sm:max-w-[15rem] max-lg:max-w-[20rem] lg:max-w-lg bg-blue-50 px-4 py-5 xl:px-10 lg:py-12 absolute max-sm:-bottom-20  bottom-24 sm:-right-14 md:right-8 lg:right-28  font-[NeoSansPro-Light] font-bold rounded-3xl">
            High-quality products sourced globally, ensuring compliance,
            reliability, and timely delivery.
          </p>
        </div>
      </header>
      <div className="px-4 pt-20 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-blue-50 rounded-b-3xl p-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            What we supply !
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:gap-y-10 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-duration="1000"
              className="relative group"
              onClick={() => setSelectedItem(item)}
            >
              <div className="overflow-hidden  bg-blue-50 border-0 rounded-3xl">
                <img
                  className="   transition-all duration-300 group-hover:scale-125 md:min-h-96"
                  src={item.image}
                  alt={item.name}
                />
                <div
                  
                  data-aos="fade-up"
                  className="absolute max-md:bottom-16 md:bottom-20 left-2"
                >
                  <a  className="bg-blue-600 p-1 md:p-2 md:px-6 text-gray-100 rounded-r-lg md:w-32 w-20 max-md:text-xs max-md:h-6 mt-6 flex items-center md:space-x-4 md:h-12">
                    <span>Tap for info</span>
                  </a>
                </div>
              </div>
              {item.label && (
                <div
                  className={`absolute left-3 top-3 ${
                    item.label === "New"
                      ? "bg-white text-gray-900"
                      : "bg-gray-900 text-white"
                  } rounded-full px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide uppercase`}
                >
                  {item.label}
                </div>
              )}
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a title={item.name}>
                      {item.name}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </h3>
                  <div className="flex items-center mt-2.5 space-x-px">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < item.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">{item.price}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <img
                  src={selectedItem.image}
                  className="text-xl w-32 h-32 font-semibold text-gray-900 dark:text-white"
                />
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {selectedItem.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setSelectedItem(null)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedItems;
