"use client"
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceProductCard = () => {
  // const products = [
  //   {
  //     title: "PEARL POWDER",
  //     description:
  //       "Nacre, an ingredient in pearl powder can also stimulate fibroblasts in the body, which accelerates wound healing. This can also help collagen regenerate itself, which may make wrinkles appear less prominent. Pearl powder was used as an anti-inflammatory, detoxifying agent, and relaxant in Chinese medicine",
  //     image: "/products/1.png",
  //   },
  //   {
  //     title: "TOMATO POWDER",
  //     description:
  //       "Tomato Powder has anti-atherosclerotic properties thanks to the acid they contain, which intensifies the oxidation of fatty acids in liver cells and inhibits the accumulation of triglycerides in them. Cholesterol levels are also lowered by pectin in tomato powder. Lycopene also works well for the heart.",
  //     image: "/products/2.png",
  //   },
  //   {
  //     title: "MORINGA",
  //     description:
  //       "Moringa contains a range of antioxidant and anti-inflammatory agents, such as quercetin, which may help protect cardiovascular health. Quercetin may help prevent lipid formation and inflammation, both of which can contribute to heart disease. Moringa may also have cholesterol-lowering properties.",
  //     image: "/products/3.png",
  //   },
  // ];

  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const products = [
    {
      image: "/products/1.png",
      name: "PEARL POWDER",
      link: "#",
      label: "New",
      rating: 4,
      price: "$99.00",
      description:
        "Nacre, an ingredient in pearl powder can also stimulate fibroblasts in the body, which accelerates wound healing. This can also help collagen regenerate itself, which may make wrinkles appear less prominent. Pearl powder was used as an anti-inflammatory, detoxifying agent, and relaxant in Chinese medicine. Because of more Calcium contains it's used in pharma / cosmetics / Herbal products",
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
      description: "Using shell powder as a feed additive can promote bone growth and blood circulation of livestock and poultry, and improve the quality and output of eggs and milk. After being eaten, shell powder can stay in the muscles of poultry and livestock for up to several days, and the absorption time is sufficient. Because of more Calcium contains it's used in pharma / cosmetics / Herbal products ",
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
  return (
    <div className=" pt-10 max-w-7xl flex flex-col m-2">
      <h2 className="text-bold max-md:text-3xl max-sm:text-center md:text-5xl text-black font-[NeoSansPro-Medium]">
        Products We Ship!
      </h2>
    <div className="md:mt-4 flex flex-wrap   gap-[3vh] justify-center items-center ">
        {products.map((product, id) => (
          <div
            key={id}
            className="group relative max-lg:max-w-[19rem] bg-white hover:bg-blue-50 rounded-3xl border shadow-lg  overflow-hidden transition-transform transform hover:scale-105 p-5 md:mt-0 mt-10 max-w-96 "
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
                <div
                  
                  data-aos="fade-up"
                  className="absolute bottom-2 left-2"
                >
                  <a onClick={() => setSelectedItem(product)} className="bg-blue-600 p-2 px-6 text-gray-100 rounded-r-lg w-32 mt-6 flex items-center space-x-4 h-12">
                    <span>Tap for info</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 p-3 flex justify-center">
                <div className="">
                  <h3 className="text-sm font-semibold text-black">
                    <p
                      onClick={() => setSelectedItem(product)}
                      className="hover:underline text-black font-bold text-lg"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </p>
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
      {/* <a
        className="text-blue-500 font-bold hover:underline text-end p-3 text-xl md:text-2xl"
        href="/products"
      >
        <p>View All .....</p>
      </a> */}
    </div>
  );
};

export default ServiceProductCard;
